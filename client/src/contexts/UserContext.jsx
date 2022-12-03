import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  const removeUserFromContext = () => {
    setUser(null);
  };

  return (
    <>
      <UserContext.Provider
        value={{ user, addUserToContext: setUser, clearUser: removeUserFromContext }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}
