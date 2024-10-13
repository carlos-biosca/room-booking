import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import rooms from "@/data/rooms.json";
import BookForm from "@/components/BookForm";
import Facilities from "@/components/Facilities";
import Description from "@/components/Description";

const RoomPage = ({ params }) => {
  const { id } = params;
  const room = rooms.find(room => room.$id === id);
  const amenities = room.amenities.split(", ");

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
          <div className="relative h-[250px] sm:h-[400px] mb-6 md:mb-10">
            <Image
              src={`/images/${room.image}`}
              alt={room.name}
              className=" object-cover rounded-3xl"
              fill
              priority
            />
          </div>

          <div className="grid md:grid-cols-5 px-2 sm:px-0 gap-6">
            <div className="md:col-span-3">
              <Description room={room} />
              <Facilities amenities={amenities} />
            </div>
            <BookForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomPage;
