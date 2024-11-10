"use client";

import deleteRoom from "@/app/actions/deleteRoom";
import { toast } from "react-toastify";
import { LiaSpinnerSolid } from "react-icons/lia";
import { useState } from "react";

const DeleteButton = ({ id }) => {
  const [isPending, setIsPending] = useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Confirm you want to delete this room. This will cancel all room bookings."
    );

    if (confirmed) {
      try {
        setIsPending(true);
        const response = await deleteRoom(id);
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
      onClick={handleDelete}
      className="px-4 py-3 rounded mb-2 sm:mb-0 w-full sm:w-40 text-center bg-red-500 text-white hover:bg-red-400"
      disabled={isPending}
    >
      {isPending ? (
        <LiaSpinnerSolid className="h-6 w-6 animate-spin mx-auto" />
      ) : (
        "Delete Room"
      )}
    </button>
  );
};

export default DeleteButton;
