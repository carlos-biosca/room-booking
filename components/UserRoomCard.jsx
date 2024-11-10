import Link from "next/link";
import DeleteButton from "./DeleteButton";

const UserRoomCard = ({ room }) => {
  return (
    <div className="bg-white border rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex flex-col">
        <h4 className="text-3xl font-semibold my-2">{room.name}</h4>
      </div>
      <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0">
        <Link
          href={`/rooms/${room.$id}`}
          className=" bg-gray-700 text-white px-4 py-3 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-gray-500"
        >
          View Room
        </Link>
        <DeleteButton id={room.$id} />
      </div>
    </div>
  );
};

export default UserRoomCard;
