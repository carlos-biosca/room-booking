"use client";

import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { PiEye, PiEyeClosed } from "react-icons/pi";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import createUser from "../actions/createUser";
import SubmitButton from "@/components/SubmitButton";

const Register = () => {
  const [state, formAction] = useFormState(createUser, {});
  const router = useRouter();
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm: false
  });

  const togglePasswordVisibility = value => {
    setShowPassword(prev => ({ ...prev, [value]: !prev[value] }));
  };

  useEffect(() => {
    if (state?.error) toast.error(state.error);
    if (state?.success) {
      toast.success("Proceed to log in!");
      router.push("/login");
    }
  }, [state]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white border rounded-lg p-6 w-full max-w-sm mt-4">
        <form action={formAction}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Register
          </h2>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded w-full py-2 px-3"
              placeholder="user name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded w-full py-2 px-3"
              placeholder="name@mail.com"
              required
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type={showPassword.password ? "text" : "password"}
              id="password"
              name="password"
              className="border rounded w-full py-2 pl-3 pr-10"
              placeholder="minimum 8 characters"
              required
            />
            <button
              type="button"
              className="absolute right-4 top-[46px]"
              onClick={() => togglePasswordVisibility("password")}
            >
              {showPassword.password ? <PiEye /> : <PiEyeClosed />}
            </button>
          </div>

          <div className=" relative mb-6">
            <label
              htmlFor="confirm"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type={showPassword.confirm ? "text" : "password"}
              id="confirm"
              name="confirm"
              className="border rounded w-full py-2 px-3"
              placeholder="minimum 8 characters"
              required
            />
            <button
              type="button"
              className="absolute right-4 top-[46px]"
              onClick={() => togglePasswordVisibility("confirm")}
            >
              {showPassword.confirm ? <PiEye /> : <PiEyeClosed />}
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <SubmitButton text="Register" />
            <p>
              Have an account already?{" "}
              <Link href="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
