import express from 'express';
import { 
  createCategory, 
  getAllCategories, 
  getCategoryById, 
  updateCategory, 
  deleteCategory 
} from '../controllers/categoryController.js';

const router = express.Router();

// Routes CRUD pour les catégories
router.post('/', createCategory); // Créer une catégorie
router.get('/', getAllCategories); // Obtenir toutes les catégories
router.get('/:id', getCategoryById); // Obtenir une catégorie par ID
router.put('/:id', updateCategory); // Mettre à jour une catégorie
router.delete('/:id', deleteCategory); // Supprimer une catégorie

export default router;
