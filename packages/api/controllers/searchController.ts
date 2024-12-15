import {Request, Response} from "express";
import * as searchServices from "../services/searchServices";
import searchAllDto from '../../types/src/searchAllDto'
import { z } from "zod";

export const searchHotels = async (req: Request, res: Response) => {
    const filters = req.body;
    try {
        const { searchTerm } = searchAllDto.parse(filters);
        const results = await searchServices.searchHotels(searchTerm);
        res.status(200).json(results);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                error: "Validation failed",
                details: error.errors,
            });
        }

        console.error('[HotelsController]', error);
        res.status(500).json({
            error: 'An unexpected error occurred while searching for hotels.',
        });
    }
};