import getUserBookings from "../actions/getUserBookings";

const Bookings = async () => {
  const bookings = await getUserBookings();
  console.log(bookings);
  return <div>bookings</div>;
};

export default Bookings;
