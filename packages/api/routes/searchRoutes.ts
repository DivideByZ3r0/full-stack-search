import express from 'express';



const router = express.Router();

router.get('/hotels', async (req, res) => {
    console.log('search hotels')
})

router.get('/states', async (req, res) => {
    console.log('search states')
})

router.get('/cities', async (req, res) => {
    console.log('search cities')
})

router.get('/all', async (req, res) => {
    console.log('search all')
})


export default router;