import Heading from "@/components/Heading";
import RoomCard from "@/components/RoomCard";
import getAllRooms from "@/app/actions/getAllRooms";

const RoomList = async () => {
  const rooms = await getAllRooms();
  return (
    <>
      <Heading title="Available rooms" />
      <p className="mb-8 md:text-lg ">
        Explore the list of available meeting rooms. Click on the one you are
        interested in to see more details, and access the booking form.
      </p>
      {rooms.length > 0 ? (
        rooms.map(room => <RoomCard key={room.$id} room={room} />)
      ) : (
        <p className="text-xl font-medium text-center mt-20">
          The list is empty
        </p>
      )}
    </>
  );
};

export default RoomList;
