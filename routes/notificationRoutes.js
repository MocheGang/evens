import express from 'express';
import {
  createNotification,
  getAllNotifications,
  getNotificationById,
  updateNotification,
  deleteNotification
} from '../controllers/notificationController.js';

const router = express.Router();

// Route pour créer une notification
router.post('/', createNotification);

// Route pour récupérer toutes les notifications
router.get('/', getAllNotifications);

// Route pour récupérer une notification par ID
router.get('/:id', getNotificationById);

// Route pour mettre à jour une notification
router.put('/:id', updateNotification);

// Route pour supprimer une notification
router.delete('/:id', deleteNotification);

export default router;
