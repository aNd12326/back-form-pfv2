import dotenv from 'dotenv';

dotenv.config();

interface Config {
  mongoUri: string; // MongoDB connection URI
  port: number;     // Port number for the server       
  nodeEnv: string; // Node environment (development, production, etc.)
}

const config: Config = {
    mongoUri: process.env.MONGO_URI || '', // Asegúrate de tener esta variable en tu archivo .env
    port: Number(process.env.PORT) || 3000, // Default to 3000 if PORT is not set
    nodeEnv: process.env.NODE_ENV || 'development', // Default to 'development' if NODE_ENV is not set
}

export default config;