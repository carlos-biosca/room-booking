import Link from "next/link";
import formatDate from "@/helpers/formatDate";
import CancelButton from "./CancelButton";

const BookingCard = ({ booking }) => {
  const { room_id, check_in, check_out } = booking;

  return (
    <div className="bg-white border rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div>
        <h4 className="text-2xl font-semibold mb-3">{room_id.name}</h4>
        <p className="text-sm md:text-lg text-gray-600">
          <strong>Check In Time:</strong> {formatDate(check_in)}
        </p>
        <p className="text-sm md:text-lg text-gray-600">
          <strong>Check Out Time:</strong> {formatDate(check_out)}
        </p>
      </div>
      <div className="flex flex-col w-full sm:w-auto gap-2 my-2 sm:my-0">
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
