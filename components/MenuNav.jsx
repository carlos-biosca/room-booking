"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { IoMenu } from "react-icons/io5";

const baseClasses = "rounded-md px-3 py-2 text-sm font-medium";
const activeClasses = "text-gray-800 hover:bg-gray-700 hover:text-white";
const disabledClasses = "text-gray-400";

const MenuNav = ({ isAuth, toggleMenu, handleLogout }) => {
  const pathname = usePathname();

  return (
    <nav className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex justify-between items-center h-16">
        <Link href="/">
          <Image
            className="w-auto h-12"
            src="/assets/logo.png"
            alt="R"
            priority
          />
        </Link>
        {isAuth ? (
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
                  isAuth.session ? activeClasses : disabledClasses
                }`}
              >
                Add Room
              </Link>
            </div>
          </div>
        ) : null}

        <div className="flex">
          {isAuth ? (
            <div className="flex items-center ml-4 md:ml-6">
              {isAuth.session ? (
                <div className="hidden md:flex items-center">
                  <Link
                    href="/rooms/user"
                    className="mr-3 font-medium text-gray-800 hover:text-gray-600 text-sm hover:underline"
                  >
                    My Rooms
                  </Link>
                  <Link
                    href="/bookings"
                    className="mr-3 font-medium text-gray-800 hover:text-gray-600 text-sm hover:underline"
                  >
                    Bookings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block sm:inline-block hover:bg-gray-700 px-4 py-[6px] border border-gray-700 rounded w-auto hover:text-white"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className={`block sm:inline-block border border-gray-700 px-4 py-[6px] rounded w-auto hover:bg-gray-700 hover:text-white ${
                    pathname === "/login" || pathname === "/register"
                      ? "opacity-0 cursor-default"
                      : null
                  }`}
                >
                  Login
                </Link>
              )}
            </div>
          ) : null}
          <button
            className="md:hidden block ml-3 px-1 border border-gray-800"
            onClick={toggleMenu}
          >
            <IoMenu size={36} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MenuNav;
