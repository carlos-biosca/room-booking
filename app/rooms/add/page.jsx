"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

import Heading from "@/components/Heading";
import addRoom from "@/app/actions/addRoom";
import AmenitiesOptions from "@/components/AmenitiesOptions";
import ImageUploader from "@/components/ImageUploader";
import SubmitButton from "@/components/SubmitButton";

const AddRoom = () => {
  const [state, formAction] = useFormState(addRoom, {});
  const router = useRouter();

  useEffect(() => {
    if (state?.error) toast.error(state.error);
    if (state?.success) {
      toast.success("Room added successfully!");
      router.push("/rooms/user");
    }
  }, [state]);

  return (
    <>
      <Heading title="Add a room" />
      <p className="mb-6 md:text-lg">
        Complete the following form to add a new room to the list of available
        rooms, so that other users can book it. Not all fields are mandatory.
        <br></br> If you are only interested in booking rooms, go directly to
        the list of{" "}
        <Link href="/rooms/list" className="font-semibold hover:underline">
          Available rooms
        </Link>
        .
      </p>
      <p className="mb-2 ml-3 md:ml-6 text-red-500">Required fields (*)</p>
      <div className="bg-white border rounded-lg p-3 md:p-6 w-full">
        <form action={formAction}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Room Name
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter room name"
              required
              autoComplete="on"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
              <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              className="border rounded w-full h-24 py-2 px-3"
              placeholder="Enter room description"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-700 font-bold mb-2"
            >
              Location
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="border rounded w-full py-2 px-3"
              placeholder="Example: Building A, floor 5, room B"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="availability"
              className="block text-gray-700 font-bold mb-2"
            >
              Availability
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              className="border rounded w-full py-2 px-3"
              placeholder="Example: Monday - Friday, 9am - 5pm"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="sqmt"
              className="block text-gray-700 font-bold mb-2"
            >
              Square Meters
            </label>
            <input
              type="number"
              id="sqmt"
              name="sqmt"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter room size"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="capacity"
              className="block text-gray-700 font-bold mb-2"
            >
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              className="border rounded w-full py-2 px-3"
              placeholder="Number of people the room can hold"
            />
          </div>

          <ImageUploader />
          <AmenitiesOptions />

          <SubmitButton text="Add Room" />
        </form>
      </div>
    </>
  );
};

export default AddRoom;
