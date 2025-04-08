import express from 'express';
import formRoutes from './routes/formRoutes';
import { errorHandler } from './middlewares/errorHandler';
import mongoose from 'mongoose';
import config from './config/config';
import cors from 'cors'

mongoose.connect(config.mongoUri).then(() => {
    console.log('Conectado a MongoDB');
}).catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1); // Exit the process with failure
})

const app = express();

// Configura CORS
const corsOptions = {
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',  // Métodos permitidos
    allowHeaders: 'Content-Type, Authorization', // Cabeceras permitidas
    credentials: true, // Permitir credenciales (cookies, autorización, etc.)
}

app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json());

//routes
app.use('/api', formRoutes);

//global error handler
app.use(errorHandler);

export default app;