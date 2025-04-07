import express from 'express';
import formRoutes from './routes/formRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

//routes
app.use('/api', formRoutes);

//global error handler
app.use(errorHandler);

export default app;