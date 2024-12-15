import express from 'express';

import {searchHotels} from "../controllers/searchController";

const router = express.Router();

router.get('/hotels', searchHotels)


export default router;