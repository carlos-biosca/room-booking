import getUserRooms from "@/app/actions/getUserRooms";

import Heading from "@/components/Heading";

const MyRooms = async () => {
  const rooms = await getUserRooms();
  return (
    <>
      <Heading title="My rooms" />
      {rooms.length > 0 ? (
        rooms.map(room => <h3>{room.name}</h3>)
      ) : (
        <p className="text-center my-12">Your room's list is empty</p>
      )}
    </>
  );
};

export default MyRooms;
