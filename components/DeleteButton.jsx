"use client";

import deleteRoom from "@/app/actions/deleteRoom";
import { toast } from "react-toastify";

const DeleteButton = ({ id }) => {
  const handleDelete = async () => {
    const confirmed = window.confirm("Confirm you want to delete this room");

    if (confirmed) {
      try {
        const response = await deleteRoom(id);
        toast.success(response.success);
      } catch (err) {
        console.log(err);
        toast.error(response.error);
      }
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="px-4 py-3 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center bg-red-500 text-white  hover:bg-red-400 "
    >
      Delete
    </button>
  );
};

export default DeleteButton;
