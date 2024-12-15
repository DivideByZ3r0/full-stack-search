import express from 'express';

import * as citiesController from '../controllers/citiesControllers';

const router = express.Router();

router.get('/', citiesController.getAllCities)

router.get('/:id', citiesController.getCity)


export default router;