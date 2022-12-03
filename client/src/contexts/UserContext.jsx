import { createContext, useState } from "react";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  logoutUser = () => setUser(null);

  return (
    <>
    <UserContext.Provider value={{ user, loginUser: setUser, clearUser: logoutUser }}>
      {children}
    </UserContext.Provider>
    </>
  );
}
