import Event from '../models/Event.js';

// Créer un événement
export const createEvent = async (req, res) => {
  try {
    const { name, date, description, location } = req.body;
    const event = new Event({ name, date, description, location, creator: req.user.id });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir tous les événements
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('creator', 'name email');
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir un événement par ID
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('creator', 'name email');
    if (!event) {
      return res.status(404).json({ message: 'Événement non trouvé' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un événement
export const updateEvent = async (req, res) => {
  try {
    const { name, date, description, location } = req.body;
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { name, date, description, location },
      { new: true }
    );
    if (!event) {
      return res.status(404).json({ message: 'Événement non trouvé' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un événement
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Événement non trouvé' });
    }
    res.json({ message: 'Événement supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
