import getUserRooms from "@/app/actions/getUserRooms";

import Heading from "@/components/Heading";
import UserRoomCard from "@/components/UserRoomCard";

const MyRooms = async () => {
  const rooms = await getUserRooms();
  return (
    <>
      <Heading title="My rooms" />
      {rooms.length > 0 ? (
        rooms.map(room => <UserRoomCard key={room.$id} room={room} />)
      ) : (
        <p className="text-center my-12">Your room's list is empty</p>
      )}
    </>
  );
};

export default MyRooms;
