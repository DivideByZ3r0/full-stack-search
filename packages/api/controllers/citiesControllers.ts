import { Request, Response } from 'express';
import * as citiesService from '../services/citiesServices';

export const getAllCities = async (req: Request, res: Response) => {
    try {
        const cities = await citiesService.getAllCities();
        res.status(200).json(cities);
    } catch (error) {
        console.error('[CitiesController]', error);
        res.status(500).json({
            error: 'Failed to fetch all cities.',
        });
    }
};

export const getCity = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'Missing city ID in request.' });
    }

    try {
        const city = await citiesService.getCity(id);
        res.status(200).json(city);
    } catch (error) {
        console.error('[CitiesController]', error);
        res.status(404).json({
            error: error
        });
    }
};