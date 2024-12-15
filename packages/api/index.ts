import express, { Router } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import searchRoutes from "./routes/searchRoutes";
import hotelsRoutes from "./routes/hotelsRouter";
import countryRoutes from "./routes/countryRouter";
import citiesRoutes from "./routes/citiesRouter";
import connectDB  from './config/db'

dotenv.config({path: './config/.env'});

connectDB()
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors())
app.use(express.json());

const router = Router();

router.use('/api/v1/search', searchRoutes )
router.use('/api/v1/hotels',  hotelsRoutes)
router.use('/api/v1/country',  countryRoutes)
router.use('/api/v1/city',  citiesRoutes)

app.use(router)

const server = app.listen(PORT, () => {
  console.log(`API Server Started at ${PORT}`)
})

// if database crases or some async call - i want app to crash
process.on('uncaughtRejection', ((err, promise) => { console.log('Error: ', err.message); server.close(()=> process.exit(1)) }))