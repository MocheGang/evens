import Notification from '../models/Notification.js';

// Créer une notification
export const createNotification = async (req, res) => {
  try {
    const { user, content, status, sentAt } = req.body;

    const notification = new Notification({
      user,
      content,
      status,
      sentAt
    });

    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir toutes les notifications
export const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().populate('user', 'name email');
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir une notification par ID
export const getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id).populate('user', 'name email');
    if (!notification) {
      return res.status(404).json({ message: 'Notification non trouvée' });
    }
    res.json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une notification
export const updateNotification = async (req, res) => {
  try {
    const { content, status, sentAt } = req.body;

    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { content, status, sentAt },
      { new: true }
    );

    if (!notification) {
      return res.status(404).json({ message: 'Notification non trouvée' });
    }

    res.json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une notification
export const deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);

    if (!notification) {
      return res.status(404).json({ message: 'Notification non trouvée' });
    }

    res.json({ message: 'Notification supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
