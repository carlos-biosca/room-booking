"use client";

import cancelBooking from "@/app/actions/cancelBooking";
import { toast } from "react-toastify";

const CancelButton = ({ bookingId }) => {
  const handleCancelBooking = async () => {
    const confirmed = window.confirm("Confirm you want to cancel this booking");

    if (confirmed) {
      try {
        const response = await cancelBooking(bookingId);
        toast.success(response.success);
      } catch (err) {
        console.log(err);
        toast.error(response.error);
      }
    }
  };

  return (
    <button
      onClick={handleCancelBooking}
      className="px-4 py-3 rounded w-full text-center bg-red-500 text-white hover:bg-red-400"
    >
      Cancel Booking
    </button>
  );
};

export default CancelButton;
