import Link from "next/link";
import { usePathname } from "next/navigation";

const mobileClasses =
  "block rounded-md px-3 py-2 text-base font-medium text-gray-800";
const activeClasses = "bg-gray-800 text-white";

const MenuMobile = ({ isOpen, isAuth, toggleMenu, handleLogout }) => {
  const pathname = usePathname();
  return (
    <>
      {isOpen ? (
        <nav
          className="bg-white space-y-1 px-2 py-1  sm:px-3 absolute w-full z-10 border-b border-gray-800 child:border-t"
          onClick={toggleMenu}
        >
          <Link
            href="/"
            className={`${mobileClasses} ${pathname === "/" && activeClasses}`}
          >
            Home
          </Link>
          <Link
            href="/rooms/list"
            className={`${mobileClasses} ${
              pathname === "/rooms/list" && activeClasses
            }`}
          >
            Available Rooms
          </Link>
          {/*Logged In */}
          <Link
            href="/rooms/add"
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isAuth ? "text-gray-800" : "text-gray-400"
            } ${pathname === "/rooms/add" && activeClasses}`}
          >
            Add Room
          </Link>
          {isAuth ? (
            <>
              <Link
                href="/rooms/user"
                className={`${mobileClasses} ${
                  pathname === "/rooms/user" && activeClasses
                }`}
              >
                My Rooms
              </Link>
              <Link
                href="/bookings"
                className={`${mobileClasses} ${
                  pathname === "/bookings" && activeClasses
                }`}
              >
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
        </nav>
      ) : null}
    </>
  );
};

export default MenuMobile;
