import { Request, response, Response } from "express"
import Bookings from "../models/bookings"
export const createBookings = async (req: Request, res: Response) => {
  try {
    // Destructure all required fields
    const { name, email, phone, roomType, checkInDate, checkOutDate, guests } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !roomType || !checkInDate || !checkOutDate) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone, room type, check-in and check-out dates are required",
      });
    }

    // Convert guests to number if sent as string
    const guestsNumber = guests ? Number(guests) : 1;

    // Create booking
    const booking = await Bookings.create({
      name,
      email,
      phone,
      roomType,
      checkInDate,
      checkOutDate,
      guests: guestsNumber,
    });

    return res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Server error while creating booking",
      error: error.message,
    });
  }
};


export const getBookings = async(req: Request, res: Response) => {

    try {

        const bookings = await Bookings.find()

        return res.status(201).json({
            sucess: true,
            message: "Booking listed",
            data: bookings
        })

    }catch(error:any){

         res.status(500).json({
            success: false,
            message: "Server error while creating booking",
            error: error.message,
        });
    }

}
