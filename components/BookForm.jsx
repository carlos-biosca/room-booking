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
      className="md:col-span-2 p-4 border-2 rounded-xl max-h-max"
    >
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 mb-6">
        <input type="hidden" name="room_id" value={room.$id} />
        <div>
          <label
            htmlFor="check_in_date"
            className="block font-medium text-gray-700 text-sm"
          >
            Check-In Date
          </label>
          <input
            type="date"
            id="check_in_date"
            name="check_in_date"
            className="block shadow-sm mt-1 px-3 py-2 border border-gray-300 rounded-md w-full sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="check_in_time"
            className="block font-medium text-gray-700 text-sm"
          >
            Check-In Time
          </label>
          <input
            type="time"
            id="check_in_time"
            name="check_in_time"
            className="block shadow-sm mt-1 px-3 py-2 border border-gray-300 rounded-md w-full sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="check_out_date"
            className="block font-medium text-gray-700 text-sm"
          >
            Check-Out Date
          </label>
          <input
            type="date"
            id="check_out_date"
            name="check_out_date"
            className="block shadow-sm mt-1 px-3 py-2 border border-gray-300 rounded-md w-full sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="check_out_time"
            className="block font-medium text-gray-700 text-sm"
          >
            Check-Out Time
          </label>
          <input
            type="time"
            id="check_out_time"
            name="check_out_time"
            className="block shadow-sm mt-1 px-3 py-2 border border-gray-300 rounded-md w-full sm:text-sm"
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
