"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBuilding } from "react-icons/fa";
import { toast } from "react-toastify";

import destroySession from "@/app/actions/destroySession";

const Header = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const { success, error } = await destroySession();
    if (success) return router.push("/login");
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
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
              >
                Rooms
              </Link>
              {/*Logged In */}
              <Link
                href="/bookings"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
              >
                Bookings
              </Link>
              <Link
                href="/rooms/add"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
              >
                Add Room
              </Link>
            </div>
          </div>
          {/*Right Side Menu */}
          <div>
            <div className="ml-4 flex items-center md:ml-6">
              {/*Logged Out */}
              <Link
                href="/login"
                className="flex items-center mr-3 text-gray-800 hover:text-gray-600 hover:underline"
              >
                <FaSignInAlt className="inline mr-1" /> Login
              </Link>
              <Link
                href="/register"
                className="flex items-center mr-3 text-gray-800 hover:text-gray-600 hover:underline"
              >
                <FaUser className="inline mr-1" /> Register
              </Link>
              {/*Logged In */}
              <Link
                href="/rooms/user"
                className="flex items-center mr-3 text-gray-800 hover:text-gray-600 hover:underline"
              >
                <FaBuilding className="inline mr-1" /> My Rooms
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center mr-3 text-gray-800 hover:text-gray-600 hover:underline"
              >
                <FaSignOutAlt className="inline mr-1" /> Sign Out
              </button>
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
            Rooms
          </Link>
          {/*Logged In */}
          <Link
            href="/bookings"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Bookings
          </Link>
          <Link
            href="/add-room"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Add Room
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
