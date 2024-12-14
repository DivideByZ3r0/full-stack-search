import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import searchRoutes from "./routes/searchRoutes";
import connectDB  from './config/db'

dotenv.config({path: './config/.env'});

connectDB()
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors())
app.use(express.json());

app.use('/api/v1/search', searchRoutes )

const server = app.listen(PORT, () => {
  console.log(`API Server Started at ${PORT}`)
})

// if database crases or some async call - i want app to crash
process.on('uncaughtRejection', ((err, promise) => { console.log('Error: ', err.message); server.close(()=> process.exit(1)) }))