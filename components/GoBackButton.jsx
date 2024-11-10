"use client";

import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

const GoBackButton = ({ show }) => {
  const router = useRouter();
  return (
    <button
      className={`${
        show ? "flex items-center text-gray-600 hover:text-gray-800" : "hidden"
      }`}
      onClick={() => router.back()}
    >
      <FaChevronLeft className="inline mr-1" />
      <span className="ml-2">Go Back</span>
    </button>
  );
};

export default GoBackButton;
