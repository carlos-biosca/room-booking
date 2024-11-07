import getUserRooms from "@/app/actions/getUserRooms";

import Heading from "@/components/Heading";
import UserRoomCard from "@/components/UserRoomCard";
import Link from "next/link";

const MyRooms = async () => {
  const rooms = await getUserRooms();
  return (
    <>
      <Heading title="My rooms" />
      {rooms.length > 0 ? (
        rooms.map(room => <UserRoomCard key={room.$id} room={room} />)
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-center my-12">Your meeting room list is empty</p>
          <Link
            href="/rooms/add"
            className="bg-gray-700 text-white px-4 py-3 sm:py-2 mt-4 rounded text-center hover:bg-gray-500"
          >
            Add a Room
          </Link>
        </div>
      )}
    </>
  );
};

export default MyRooms;
