"use client";

import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import Heading from "@/components/Heading";
import addRoom from "@/app/actions/addRoom";

const AddRoom = () => {
  const [state, formAction] = useFormState(addRoom, {});
  const router = useRouter();

  useEffect(() => {
    if (state?.error) toast.error(state.error);
    if (state?.success) {
      toast.success("Room added successfully");
      router.push("/");
    }
  }, [state]);

  return (
    <>
      <Heading title="Add a room" />
      <div className="bg-white border rounded-lg p-6 w-full">
        <form action={formAction}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Room Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter a name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="border rounded w-full h-24 py-2 px-3"
              placeholder="Enter a description"
              required
            ></textarea>
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

          <div className="mb-4">
            <label
              htmlFor="price_per_hour"
              className="block text-gray-700 font-bold mb-2"
            >
              Price Per Hour
            </label>
            <input
              type="number"
              id="price_per_hour"
              name="price_per_hour"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter price per hour"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-bold mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter full address"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-700 font-bold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="border rounded w-full py-2 px-3"
              placeholder="Location (Building, Floor, Room)"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="availability"
              className="block text-gray-700 font-bold mb-2"
            >
              Availability
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              className="border rounded w-full py-2 px-3"
              placeholder="Availability (Monday - Friday, 9am - 5pm)"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="amenities"
              className="block text-gray-700 font-bold mb-2"
            >
              Amenities
            </label>
            <input
              type="text"
              id="amenities"
              name="amenities"
              className="border rounded w-full py-2 px-3"
              placeholder="projector, whiteboard, etc..."
            />
          </div>
          {/*<!-- Image Upload --> */}
          <div className="mb-8">
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              Image
            </label>

            <input
              type="file"
              id="image"
              name="image"
              className="border rounded w-full py-2 px-3"
            />
          </div>

          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRoom;