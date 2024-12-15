import { Request, Response } from 'express';
import * as hotelsService from '../services/hotelServices';
import * as searchServices from '../services/searchServices';



export const getAllHotels = async (req: Request, res: Response) => {
    try {
        const hotels = await hotelsService.getAllHotels();
        res.status(200).json(hotels);
    } catch (error) {
        console.error('[HotelsController]', error);
        res.status(500).json({
            error: 'Failed to fetch all hotels.',
        });
    }
};

export const getHotel = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'Missing hotel ID in request.' });
    }

    try {
        const hotel = await hotelsService.getHotel(id);
        res.status(200).json(hotel);
    } catch (error) {
        console.error('[HotelsController]', error);
        res.status(404).json({
            error
        });
    }
};