import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
dotenv.config();


const connectDB = async () => {
  try {
    // Connexion à MongoDB sans les options obsolètes
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connecté avec succès');
  } catch (err) {
    console.error('Erreur de connexion MongoDB:', err);
    process.exit(1);  // Quitte le processus en cas d'échec de la connexion
  }
};

export default connectDB;


