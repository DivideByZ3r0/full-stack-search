import express from 'express';
import {MongoClient} from "mongodb";


const router = express.Router();


router.get('/states', async (req, res) => {
 console.log('states')

})

router.get('/states/:id', async (req, res) => {
    console.log('states id')

})


export default router;