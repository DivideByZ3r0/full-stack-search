import express from 'express';
import {MongoClient} from "mongodb";


const router = express.Router();

router.get('/cities', async (req, res) => {
    console.log('cities')
})

router.get('/cities/:id', async (req, res) => {
 console.log(req.params.id)
})


export default router;