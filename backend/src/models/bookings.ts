import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
  name: string;
  email: string;
  phone: string;
  checkInDate: Date;
  checkOutDate: Date;
  guests: number;
  roomType: string;
  message?: string;
}


const BookingSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    guests: { type: Number, required: true },
    roomType: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IBooking>("Booking", BookingSchema);
