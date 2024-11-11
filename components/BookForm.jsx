"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import bookRoom from "@/app/actions/bookRoom";
import SubmitButton from "./SubmitButton";

const BookForm = ({ room }) => {
  const [state, formAction] = useFormState(bookRoom, {});
  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("Booking completed!");
      router.push("/bookings");
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="max-h-max p-4 border-2 rounded-xl md:col-span-2"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <input type="hidden" name="room_id" value={room.$id} />
        <div>
          <label
            htmlFor="check_in_date"
            className="block text-sm font-medium text-gray-700"
          >
            Check-In Date
          </label>
          <input
            type="date"
            id="check_in_date"
            name="check_in_date"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="check_in_time"
            className="block text-sm font-medium text-gray-700"
          >
            Check-In Time
          </label>
          <input
            type="time"
            id="check_in_time"
            name="check_in_time"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="check_out_date"
            className="block text-sm font-medium text-gray-700"
          >
            Check-Out Date
          </label>
          <input
            type="date"
            id="check_out_date"
            name="check_out_date"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="check_out_time"
            className="block text-sm font-medium text-gray-700"
          >
            Check-Out Time
          </label>
          <input
            type="time"
            id="check_out_time"
            name="check_out_time"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            required
          />
        </div>
      </div>

      <SubmitButton text="Book Room" />
      <p className="my-2 text-xs">
        * The availability of the room will be checked automatically.
      </p>
    </form>
  );
};

export default BookForm;
