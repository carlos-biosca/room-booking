"use client";

import { UserProvider } from "@/context/userContext";

const ContextWrapper = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default ContextWrapper;
