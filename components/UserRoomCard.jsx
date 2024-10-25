import Link from "next/link";
import { FaTrash, FaEye } from "react-icons/fa";

const UserRoomCard = ({ room }) => {
  return (
    <div className="bg-white border rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold my-2">{room.name}</h3>
      </div>
      <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0">
        <Link
          href={`/rooms/${room.$id}`}
          className="flex items-center justify-center gap-2 bg-gray-700 text-white px-4 py-3 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-gray-500"
        >
          <FaEye /> View
        </Link>

        <button className="flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-3 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-red-500">
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default UserRoomCard;
