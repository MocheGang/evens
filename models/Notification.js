import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }, // Référence à l'utilisateur
  content: { 
    type: String, 
    required: true 
  }, // Contenu de la notification
  status: { 
    type: String, 
    enum: ['sent', 'pending'], 
    default: 'pending' 
  }, // Statut de la notification
  createdAt: { 
    type: Date, 
    default: Date.now 
  }, // Date de création
  sentAt: { 
    type: Date 
  } // Date d'envoi
}, { timestamps: true });

export default mongoose.model('Notification', notificationSchema);
