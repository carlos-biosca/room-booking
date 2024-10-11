import Image from "next/image";
import Link from "next/link";

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white mb-14 shadow-xl rounded-lg sm:rounded-[20px] sm:border">
      <div className="flex flex-col sm:flex-row sm:items-center">
        <div className="relative h-[250px] sm:h-[320px] sm:flex-1">
          <Image
            src={`/images/${room.image}`}
            alt={room.name}
            className="object-cover rounded-lg sm:rounded-[20px]"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="p-2 sm:space-y-2 sm:w-1/2 lg:w-1/3 sm:px-6">
          <div className="p-4 sm:p-0">
            <h4 className="text-xl sm:text-2xl font-bold">{room.name}</h4>
            <p className="sm:text-lg text-gray-600">
              <span className="font-semibold text-gray-800"> Address: </span>
              {room.address}
            </p>
            <p className="sm:text-lg text-gray-600">
              <span className="font-semibold text-gray-800">
                Availability:{" "}
              </span>
              {room.availability}
            </p>
            <p className="sm:text-lg text-gray-600">
              <span className="font-semibold text-gray-800"> Price: </span>$
              {room.price_per_hour}/hour
            </p>
          </div>
          <Link
            href={`/rooms/${room.$id}`}
            className="block sm:inline-block bg-gray-700 text-white px-4 py-3 sm:py-2 rounded w-full sm:w-auto text-center hover:bg-gray-500"
          >
            View Room
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
