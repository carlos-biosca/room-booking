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
const mobileClasses =
  "block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white";

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
            <div className="flex items-baseline space-x-1">
              <Link href="/" className={`${baseClasses} ${activeClasses}`}>
                Home
              </Link>
              <Link
                href="/rooms/list"
                className={`${baseClasses} ${activeClasses}`}
              >
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
                <div className="hidden md:flex items-center">
                  <Link
                    href="/rooms/user"
                    className="mr-3 text-sm font-medium text-gray-800 hover:text-gray-600 hover:underline"
                  >
                    My Rooms
                  </Link>
                  <Link
                    href="/bookings"
                    className="mr-3 text-sm font-medium text-gray-800 hover:text-gray-600 hover:underline"
                  >
                    Bookings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block sm:inline-block bg-gray-700 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-gray-500"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="block sm:inline-block bg-gray-700 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-gray-500"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/*Mobile */}
      <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link href="/" className={`${mobileClasses}`}>
            Home
          </Link>
          <Link href="/rooms/list" className={`${mobileClasses}`}>
            Available Rooms
          </Link>
          {/*Logged In */}
          <Link
            href="/rooms/add"
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isAuth
                ? "text-gray-800 hover:bg-gray-700 hover:text-white"
                : disabledClasses
            }`}
          >
            Add Room
          </Link>
          {isAuth ? (
            <>
              <Link href="/rooms/user" className={`${mobileClasses}`}>
                My Rooms
              </Link>
              <Link href="/bookings" className={`${mobileClasses}`}>
                Bookings
              </Link>
              <button
                onClick={handleLogout}
                className={`${mobileClasses} w-full text-left`}
              >
                Logout
              </button>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
};
export default Header;
