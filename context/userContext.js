import { createContext, useContext, useState, useEffect } from "react";
import checkUser from "@/app/actions/checkUser";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUserStatus = async () => {
      const { isAuth, user } = await checkUser();
      setIsAuth({ session: isAuth });
      setUser(user)
    };
    checkUserStatus();
  }, []);

  return (
    <UserContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context
}