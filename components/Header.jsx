"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import destroySession from "@/app/actions/destroySession";

import { useUser } from "@/context/userContext";
import MenuMobile from "./MenuMobile";
import MenuNav from "./MenuNav";

const Header = () => {
  const { isAuth, setIsAuth } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    const { success, error } = await destroySession();
    if (success) {
      setIsAuth({ session: false });
      return router.push("/login");
    }
    toast.error(error);
  };

  return (
    <header>
      <MenuNav
        isAuth={isAuth}
        toggleMenu={toggleMenu}
        handleLogout={handleLogout}
      />
      {/*Mobile */}
      <MenuMobile
        isOpen={isOpen}
        isAuth={isAuth?.session}
        toggleMenu={toggleMenu}
        handleLogout={handleLogout}
      />
    </header>
  );
};
export default Header;
