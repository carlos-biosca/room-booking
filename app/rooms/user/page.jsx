import getUserRooms from "@/app/actions/getUserRooms";

import Heading from "@/components/Heading";
import UserRoomCard from "@/components/UserRoomCard";
import Link from "next/link";

const MyRooms = async () => {
  const rooms = await getUserRooms();
  return (
    <>
      <Heading title="My rooms" />
      <p className="mb-8 md:text-lg">
        Manage your list of meeting rooms. Review the room details, or delete
        rooms that are no longer in use.<br></br>Deleting a room will
        automatically cancel all bookings associated with it.
      </p>
      {rooms.length > 0 ? (
        rooms.map(room => <UserRoomCard key={room.$id} room={room} />)
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-xl font-medium text-center mt-20">
            Your meeting room list is empty
          </p>
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
