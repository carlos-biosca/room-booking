import Link from "next/link";

const mobileClasses =
  "block rounded-md px-3 py-2 text-base font-medium text-gray-800";

const MenuMobile = ({ isOpen, isAuth, toggleMenu, handleLogout }) => {
  return (
    <>
      {isOpen ? (
        <nav
          className="bg-white space-y-1 px-2 pb-3 pt-2 sm:px-3 absolute w-full z-10 border-b border-gray-800"
          onClick={toggleMenu}
        >
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
              isAuth ? "text-gray-800" : "text-gray-400"
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
        </nav>
      ) : null}
    </>
  );
};

export default MenuMobile;
