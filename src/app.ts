import express from 'express';
import formRoutes from './routes/formRoutes';
import { errorHandler } from './middlewares/errorHandler';
import mongoose from 'mongoose';
import config from './config/config';

mongoose.connect(config.mongoUri).then(() => {
    console.log('Conectado a MongoDB');
}).catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1); // Exit the process with failure
})

const app = express();

// Middleware para parsear JSON
app.use(express.json());

//routes
app.use('/api', formRoutes);

//global error handler
app.use(errorHandler);

export default app;