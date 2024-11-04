import Heading from "@/components/Heading";
import RoomCard from "@/components/RoomCard";
import getAllRooms from "@/app/actions/getAllRooms";

const RoomList = async () => {
  const rooms = await getAllRooms();
  return (
    <>
      <Heading title="Available rooms" />
      {rooms.length > 0 ? (
        rooms.map(room => <RoomCard key={room.$id} room={room} />)
      ) : (
        <p className="text-center my-12">The list is empty</p>
      )}
    </>
  );
};

export default RoomList;
