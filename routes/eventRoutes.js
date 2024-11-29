import express from 'express';
import { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } from '../controllers/eventController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();



// Route pour créer un événement
router.post('/', authenticateToken, createEvent);

// Route pour obtenir tous les événements
router.get('/', getAllEvents);

// Route pour obtenir un événement par ID
router.get('/:id', getEventById);

// Route pour mettre à jour un événement
router.put('/:id', authenticateToken, updateEvent);

// Route pour supprimer un événement
router.delete('/:id', authenticateToken, deleteEvent);

export default router;
