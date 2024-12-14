import express from 'express';
import {MongoClient} from "mongodb";


const router = express.Router();

router.get('/hotels', async (req, res) => {
console.log('hotels')
})

router.get('/hotels/:id', async (req, res) => {
  console.log('/hotels/:id')
})

export default router;