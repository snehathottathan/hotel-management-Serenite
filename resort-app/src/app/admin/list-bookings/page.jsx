"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { bookingFormFields } from "../../booking/formFields";
import "./ListBookings.scss";

export default function ListBookings() {
  const router = useRouter();

  const [listBookings, setListBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(true); // track auth status

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // If token missing, do NOT force redirect — just mark unauthorized
      setAuthorized(false);
      setLoading(false);
      return;
    }

    listBooking(token);
  }, []);

  const listBooking = async (token) => {
    try {
      const res = await fetch(
        "http://localhost:4001/api/v1/admin/bookings/list-bookings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (data.message === "Access denied. Admins only.") {
        // mark as unauthorized but do not redirect
        setAuthorized(false);
        return;
      }

      setListBookings(data.data || []);
    } catch (error) {
      console.error("Error:", error);
      setAuthorized(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading bookings...</p>;

  if (!authorized)
    return (
      <div>
        <h1>Access Denied</h1>
        <p>You must be an admin to view this page.</p>
        <button onClick={() => router.push("/admin/login-page")}>
          Go to Login
        </button>
      </div>
    );

  return (
    <div className="list-bookings">
      <div>
        <h1>Booking List</h1>
        <table>
          <thead>
            <tr>
              {bookingFormFields.map((field) => (
                <th key={field.name}>{field.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {listBookings.map((booking, index) => (
              <tr key={index}>
                {bookingFormFields.map((field) => (
                  <td key={field.name}>{booking[field.name]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
