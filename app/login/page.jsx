"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import createSession from "../actions/createSession";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/userContext";

const Login = () => {
  const [state, formAction] = useFormState(createSession, {});
  const router = useRouter();
  const { setIsAuth } = useUser();

  useEffect(() => {
    if (state?.error) toast.error(state.error);
    if (state?.success) {
      setIsAuth(true);
      toast.success("Login success");
      router.push("/");
    }
  }, [state]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white border rounded-lg p-6 w-full max-w-sm mt-20">
        <form action={formAction}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>

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
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Login
            </button>

            <p>
              No account yet?{" "}
              <Link href="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
