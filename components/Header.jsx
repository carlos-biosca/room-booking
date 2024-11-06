"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { toast } from "react-toastify";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

import destroySession from "@/app/actions/destroySession";
import { useUser } from "@/context/userContext";
import MenuMobile from "./MenuMobile";

const baseClasses = "rounded-md px-3 py-2 text-sm font-medium";
const activeClasses = "text-gray-800 hover:bg-gray-700 hover:text-white";
const disabledClasses = "text-gray-400";

const Header = () => {
  const router = useRouter();
  const { isAuth, setIsAuth } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
                    className="block sm:inline-block bg-gray-700 text-white px-4 py-2 rounded w-auto text-center hover:bg-gray-500"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="block sm:inline-block bg-gray-700 text-white px-4 py-2 rounded w-auto text-center hover:bg-gray-500"
                >
                  Login
                </Link>
              )}
              <button
                className="block md:hidden ml-3 px-1 border border-gray-800"
                onClick={toggleMenu}
              >
                <IoMenu size={36} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/*Mobile */}
      <MenuMobile
        isOpen={isOpen}
        isAuth={isAuth}
        toggleMenu={toggleMenu}
        handleLogout={handleLogout}
      />
    </header>
  );
};
export default Header;
