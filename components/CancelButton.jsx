"use client";

import cancelBooking from "@/app/actions/cancelBooking";
import { toast } from "react-toastify";
import { LiaSpinnerSolid } from "react-icons/lia";
import { useState } from "react";

const CancelButton = ({ bookingId }) => {
  const [isPending, setIsPending] = useState(false);

  const handleCancelBooking = async () => {
    const confirmed = window.confirm("Confirm you want to cancel this booking");

    if (confirmed) {
      try {
        setIsPending(true);
        const response = await cancelBooking(bookingId);
        toast.success(response.success);
        setIsPending(false);
      } catch (err) {
        console.log(err);
        toast.error(response.error);
      }
    }
  };

  return (
    <button
      onClick={handleCancelBooking}
      className="px-4 py-3 rounded w-full xl:w-[151px] text-center bg-red-500 text-white hover:bg-red-400"
      disabled={isPending}
    >
      {isPending ? (
        <LiaSpinnerSolid className="h-6 w-6 animate-spin mx-auto" />
      ) : (
        "Cancel Booking"
      )}
    </button>
  );
};

export default CancelButton;
