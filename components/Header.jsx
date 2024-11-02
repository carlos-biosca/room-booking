"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { toast } from "react-toastify";

import destroySession from "@/app/actions/destroySession";
import { useUser } from "@/context/userContext";

const baseClasses = "rounded-md px-3 py-2 text-sm font-medium";
const activeClasses = "text-gray-800 hover:bg-gray-700 hover:text-white";
const disabledClasses = "text-gray-400";

const Header = () => {
  const router = useRouter();
  const { isAuth, setIsAuth } = useUser();

  const handleLogout = async () => {
    const { success, error } = await destroySession();
    if (success) {
      setIsAuth(false);
      return router.push("/login");
    }
    toast.error(error);
  };

  return (
    <header>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <Image className="h-12 w-auto" src={logo} alt="R" priority />
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={`${baseClasses} ${activeClasses}`}>
                Available Rooms
              </Link>
              {/*Logged In */}
              <Link
                href="/rooms/add"
                className={`${baseClasses} ${
                  isAuth ? activeClasses : disabledClasses
                }`}
              >
                Add Room
              </Link>
            </div>
          </div>
          {/*Right Menu */}
          <div>
            <div className="ml-4 flex items-center md:ml-6">
              {isAuth ? (
                <>
                  {/*Logged In */}
                  <Link
                    href="/rooms/user"
                    className="flex items-center mr-5 text-gray-800 hover:text-gray-600 hover:underline"
                  >
                    My Rooms
                  </Link>
                  <Link
                    href="/bookings"
                    className="flex items-center mr-5 text-gray-800 hover:text-gray-600 hover:underline"
                  >
                    Bookings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center text-gray-800 hover:text-gray-600 hover:underline"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {/*Logged Out */}
                  <Link
                    href="/login"
                    className="flex items-center mr-5 text-gray-800 hover:text-gray-600 hover:underline"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center text-gray-800 hover:text-gray-600 hover:underline"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/*Mobile */}
      <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Available Rooms
          </Link>
          {/*Logged In */}
          <Link
            href="/rooms/add"
            className={`${baseClasses} block ${
              isAuth ? activeClasses : disabledClasses
            }`}
          >
            Add Room
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
