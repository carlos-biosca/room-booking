import Image from "next/image";
import Link from "next/link";

const RoomCard = ({ room }) => {
  const { $id, name, image, location, availability, description } = room;

  const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_IMAGES;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

  const imageUrl = `${endpoint}/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;
  const imageSrc = image ? imageUrl : "/images/default-image.jpg";

  return (
    <Link
      href={`/rooms/${$id}`}
      className="block bg-white shadow mb-14 sm:border rounded-lg sm:rounded-[20px]"
    >
      <div className="flex sm:flex-row flex-col sm:items-center">
        <div className="relative sm:w-3/5 lg:w-2/3 h-[250px] sm:h-[320px]">
          <Image
            src={imageSrc}
            alt={name}
            className="rounded-lg sm:rounded-r-none object-cover"
            fill
            sizes="(max-width: 640px) 100vw, 70vw"
            priority
          />
        </div>
        <div className="sm:space-y-2 p-2 sm:px-6 sm:w-2/5 lg:w-1/3">
          <div className="p-4 sm:p-0">
            <h2 className="font-bold text-xl sm:text-2xl">{name}</h2>
            <p className="text-gray-600 sm:text-lg">
              <span className="font-semibold text-gray-800"> Location: </span>
              {location}
            </p>
            <p className="text-gray-600 sm:text-lg">
              <span className="font-semibold text-gray-800">
                Availability:{" "}
              </span>
              {availability}
            </p>
          </div>
          <button className="block sm:inline-block bg-gray-700 hover:bg-gray-500 px-4 py-3 sm:py-2 rounded w-full sm:w-auto text-white text-center">
            View Room
          </button>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
