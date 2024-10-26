import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import BookForm from "@/components/BookForm";
import Amenities from "@/components/Amenities";
import Description from "@/components/Description";
import getRoom from "@/app/actions/getRoom";

const RoomPage = async ({ params }) => {
  const { id } = params;
  const room = await getRoom(id);
  if (!room) {
    return <Heading title="Room not found" />;
  }
  const amenities = room.amenities.split(", ");

  const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_IMAGES;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  const imageUrl = `${endpoint}/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;
  const imageSrc = room.image ? imageUrl : "/images/default-image.jpg";

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
              src={imageSrc}
              alt={room.name}
              className=" object-cover rounded-3xl"
              fill
              priority
            />
          </div>

          <div className="grid md:grid-cols-5 px-2 sm:px-0 gap-6">
            <div className="md:col-span-3">
              <Description room={room} />
              {room.amenities ? <Amenities amenities={amenities} /> : null}
            </div>
            <BookForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomPage;
