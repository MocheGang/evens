import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Nom de l'événement
  date: { type: Date, required: true },  // Date de l'événement
  description: { type: String },         // Description de l'événement
  location: { type: String },            // Lieu de l'événement
  creator: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }, // Référence au modèle User
  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category', 
    required: true 
  } // Référence au modèle Category
}, { timestamps: true });

export default mongoose.model('Event', eventSchema);

