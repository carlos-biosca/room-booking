import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import rooms from "@/data/rooms.json";
import BookForm from "@/components/BookForm";

const RoomPage = ({ params }) => {
  const { id } = params;
  const room = rooms.find(room => room.$id === id);

  if (!room) {
    return <Heading title="Room not found" />;
  }

  return (
    <>
      <Link
        href="/"
        className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
      >
        <FaChevronLeft className="inline mr-1" />
        <span className="ml-2">Back to Main</span>
      </Link>
      <Heading title={room.name} />
      <div className="bg-white">
        <div className="flex flex-col">
          <div className="relative h-[250px] sm:h-[400px] mb-4 sm:mb-10">
            <Image
              src={`/images/${room.image}`}
              alt={room.name}
              className=" object-cover rounded-3xl"
              fill
              priority
            />
          </div>

          <div className="grid md:grid-cols-5 px-2 sm:px-0 gap-6">
            <div className="mt-4 sm:mt-0 md:col-span-3">
              <h2 className="text-xl font-bold">Description</h2>
              <p className="text-gray-600 mb-4">{room.description}</p>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold text-gray-800">Size:</span>{" "}
                  {room.sqft} square feet
                </li>
                <li>
                  <span className="font-semibold text-gray-800">
                    Availability:
                  </span>{" "}
                  {room.availability}
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Price:</span> $
                  {room.price_per_hour}/hour
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Address:</span>{" "}
                  {room.address}
                </li>
              </ul>
            </div>
            <BookForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomPage;
