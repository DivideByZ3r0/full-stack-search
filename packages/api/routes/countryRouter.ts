import express, {Request, Response} from 'express';
import Country from "../models/CountrySchema";
import mongoose from "mongoose";
import Hotel from "../models/HotelSchema";


const router = express.Router();


router.get('/', async (req: Request, res: Response) => {
    try {
        const country = await Country.find(); // Fetch all hotels
        res.status(200).json(country); // Respond with the hotels
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while fetching hotels' });
    }
})

router.get('/:id', async (req: Request, res: Response) =>{

    try {
        const countryId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(countryId)) {
            return res.status(400).json({ message: 'Invalid country ID format' });
        }

        const country = await Country.findById(countryId);
        if (!country) {
            return res.status(404).json({ message: 'Country not found' });
        }

        res.status(200).json(country);
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while fetching the country' });
    }
})


export default router;