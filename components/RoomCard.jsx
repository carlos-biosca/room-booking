import Image from "next/image";
import Link from "next/link";

import defaultImage from "@/public/images/default-image.jpg";

const RoomCard = ({ room }) => {
  const { $id, name, image, location, availability, description } = room;

  const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_IMAGES;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  const imageUrl = `${endpoint}/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;
  const imageSrc = image ? imageUrl : defaultImage;

  return (
    <Link
      href={`/rooms/${$id}`}
      className="block bg-white mb-14 shadow rounded-lg sm:rounded-[20px] sm:border"
    >
      <div className="flex flex-col sm:flex-row sm:items-center">
        <div className="relative h-[250px] sm:h-[320px] sm:w-3/5 lg:w-2/3">
          <Image
            src={imageSrc}
            alt={name}
            className="object-cover rounded-lg sm:rounded-r-none"
            fill
            sizes="(max-width: 640px) 100vw, 70vw"
            priority
          />
        </div>
        <div className="p-2 sm:space-y-2 sm:px-6 sm:w-2/5 lg:w-1/3">
          <div className="p-4 sm:p-0">
            <h2 className="text-xl sm:text-2xl font-bold">{name}</h2>
            <p className="sm:text-lg text-gray-600">
              <span className="font-semibold text-gray-800 "> Location: </span>
              {location}
            </p>
            <p className="sm:text-lg text-gray-600">
              <span className="font-semibold text-gray-800">
                Availability:{" "}
              </span>
              {availability}
            </p>
          </div>
          <button className="block sm:inline-block bg-gray-700 text-white px-4 py-3 sm:py-2 rounded w-full sm:w-auto text-center hover:bg-gray-500">
            View Room
          </button>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
