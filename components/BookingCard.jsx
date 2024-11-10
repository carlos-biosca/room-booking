import Link from "next/link";
import formatDate from "@/helpers/formatDate";
import CancelButton from "./CancelButton";

const BookingCard = ({ booking }) => {
  const { room_id, check_in, check_out } = booking;

  return (
    <div className="border p-4 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
      <div>
        <h4 className="text-3xl font-semibold mb-3">{room_id.name}</h4>
        <p className="text-sm md:text-lg text-gray-600">
          <strong>Location:</strong> {room_id.location}
        </p>
        <p className="text-sm md:text-lg text-gray-600">
          <strong>CheckIn:</strong> {formatDate(check_in)}
        </p>
        <p className="text-sm md:text-lg text-gray-600">
          <strong>CheckOut:</strong> {formatDate(check_out)}
        </p>
      </div>
      <div className="flex flex-col w-full gap-2 my-2 xl:my-0 xl:w-auto">
        <Link
          href={`/rooms/${room_id.$id}`}
          className=" bg-gray-700 text-white px-4 py-3 rounded w-full text-center hover:bg-gray-500"
        >
          View Room
        </Link>
        <CancelButton bookingId={booking.$id} />
      </div>
    </div>
  );
};

export default BookingCard;
