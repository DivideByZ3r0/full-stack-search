import {Request, Response} from "express";
import * as searchServices from "../services/searchServices";

export const searchHotels = async (req: Request, res: Response) => {
    const filters = req.body; // Assuming filters are sent in the request body

    try {
        const results = await searchServices.searchHotels(filters.searchTerm);
        res.status(200).json(results);
    } catch (error) {
        console.error('[HotelsController]', error);
        res.status(500).json({
            error: 'An unexpected error occurred while searching for hotels.',
        });
    }
};