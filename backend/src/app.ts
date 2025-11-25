import express from "express";
import bookingRoutes from './routes/custom-routes/booking-routes'
// import authRoutes from './routes/custom-routes/auth-route'

const app = express();

app.use(express.json());

// BASE ROUTES
// app.use("/bookings", bookingRoutes);
// app.use("/auth", authRoutes);

export default app;
