// src/routes/userRoutes.ts
import express from 'express';
import { allOperatingArea, confirmDelivery, deliveryCode } from '../controllers/miscellaneousController';

export const router = express.Router();

router.get('/operating_areas', allOperatingArea)
router.get('/delivery-detail', deliveryCode)
router.get('/confirm-delivery', confirmDelivery)
