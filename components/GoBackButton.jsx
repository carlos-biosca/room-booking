"use client";

import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <button
      className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
      onClick={() => router.back()}
    >
      <FaChevronLeft className="inline mr-1" />
      <span className="ml-2">Go Back</span>
    </button>
  );
};

export default GoBackButton;
