import express from 'express';
import morgan from 'morgan';
import connect from './db/db.js';
import userRoutes from './routes/user.routes.js';
import projectRoutes from './routes/project.routes.js';
import aiRoutes from './routes/ai.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

connect();

const app = express();

app.use(cors({
    origin: ["https://cake-frontend-eta.vercel.app"], // ✅ Explicit frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // ✅ Required for cookies, auth headers
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userRoutes);
app.use('/projects', projectRoutes);
app.use("/ai", aiRoutes)

app.get('/', (req, res) => {
    res.send('hello world')
})

export default app;