import getUserBookings from "../actions/getUserBookings";
import Heading from "@/components/Heading";
import BookingCard from "@/components/BookingCard";
import Link from "next/link";

const Bookings = async () => {
  const bookings = await getUserBookings();

  return (
    <>
      <Heading title="Bookings" />
      {bookings.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4">
          {bookings.map(booking => {
            return <BookingCard key={booking.$id} booking={booking} />;
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-center my-12">Your booking list is empty</p>
          <Link
            href="/rooms/list"
            className="bg-gray-700 text-white px-4 py-3 sm:py-2 mt-4 rounded text-center hover:bg-gray-500"
          >
            Check Available Rooms
          </Link>
        </div>
      )}
    </>
  );
};

export default Bookings;
