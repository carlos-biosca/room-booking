"use client";

import { useFormStatus } from "react-dom";
import { LiaSpinnerSolid } from "react-icons/lia";

const SubmitButton = ({ text }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="w-full bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-500 text-center"
      disabled={pending}
    >
      {pending ? (
        <LiaSpinnerSolid className="h-6 w-6 animate-spin mx-auto" />
      ) : (
        text
      )}
    </button>
  );
};

export default SubmitButton;
