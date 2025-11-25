
import router from './routes/custom-routes/auth-route';


import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import http from "http";
import authRoutes from "./routes/custom-routes/auth-route";
import bookingRoutes from "./routes/custom-routes/booking-routes";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://hotel-management-serenite-7kde.vercel.app"
  ],
  credentials: true
}));


app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth',router);
app.use('/api/v1/bookings-route',bookingRoutes);
app.use('/api/v1/admin/bookings',bookingRoutes)


const server = http.createServer(app);

const startServer = () => {
  server.listen(4001, () => console.log("Server running on 4001"));
};

export default startServer;

