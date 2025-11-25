"use client";

import { useState } from "react";
import "./booking.scss";
import { bookingFormFields } from "./formFields";

export default function Booking() {
  const [formValues, setFormValues] = useState({});

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate check-in/check-out dates
    if (formValues.checkInDate && formValues.checkOutDate) {
      const checkIn = new Date(formValues.checkInDate);
      const checkOut = new Date(formValues.checkOutDate);

      if (checkIn >= checkOut) {
        alert("Check-in date must be earlier than check-out date.");
        return;
      }
    }
    
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:4001/api/v1/bookings-route/create-bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formValues),
        }
      );

      const data = await response.json();

      // Show alert based on backend response
      if (data.success) {
        alert(data.message); // success message
        setFormValues({});   // clear the form
      } else {
        alert(data.message || "Booking failed"); // error message
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Server error while creating booking");
    }
  };

  return (
    <div className="bookings">
      <div className="bookings-sub" style={{ display: "flex", flexDirection: "column" }}>
        <h1>BOOK YOUR STAY</h1>
        <p>Ready to experience nature? Reserve your spot today.</p>
      </div>

      <form className="booking-form" onSubmit={onSubmit}>
        {bookingFormFields.map((field) => (
          <div className="form-content" key={field.name}>
            <div style={{ width: "120px" }}>
              <label className="label-form">{field.label}</label>
            </div>
            <input
              className="input-form"
              name={field.name}
              type={field.type}
              value={formValues[field.name] || ""}
              onChange={onChange}
            />
          </div>
        ))}
        <button className="form-button">Confirm Booking</button>
      </form>
    </div>
  );
}
