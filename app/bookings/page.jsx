import getUserBookings from "../actions/getUserBookings";
import Heading from "@/components/Heading";
import BookingCard from "@/components/BookingCard";

const Bookings = async () => {
  const bookings = await getUserBookings();

  return (
    <>
      <Heading title="Bookings" />
      {bookings.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {bookings.map(booking => {
            return <BookingCard key={booking.$id} booking={booking} />;
          })}
        </div>
      ) : (
        <p className="text-center my-12">Your booking list is empty</p>
      )}
    </>
  );
};

export default Bookings;
