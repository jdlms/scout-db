import { useEffect } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  const removeUserFromContext = () => {
    setUser(null);
  };

  useEffect(() => {
    const checkForUser = async () => {
      try {
        const request = await axios.get("http://localhost:5000/refresh-user", {
          withCredentials: true,
        });
        console.log(request.data);
        setUser(request.data.user);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };
    checkForUser();
  }, []);

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
