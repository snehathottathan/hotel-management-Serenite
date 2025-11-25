import express from 'express';
import { createBookings, getBookings } from '../../controllers/bookings-controller';
import { verifyToken } from '../../middleware/auth-middleware';
import { verifyAdmin } from '../../middleware/admin-middleware';

const bookingRoutes = express.Router();

bookingRoutes.post('/create-bookings', createBookings);

bookingRoutes.get('/list-bookings', verifyToken, verifyAdmin, getBookings);

export default bookingRoutes;
