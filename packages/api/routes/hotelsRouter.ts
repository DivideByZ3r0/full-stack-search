import express, { Request, Response } from 'express';
import * as hotelsController from '../controllers/hotelsControllers';


const router = express.Router();

router.get('/',hotelsController.getAllHotels)
router.get('/:id', hotelsController.getHotel);

export default router;