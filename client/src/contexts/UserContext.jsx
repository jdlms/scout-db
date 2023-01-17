import { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/consts";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const removeUserFromContext = () => {
    setUser(null);
  };

  useEffect(() => {
    const checkForUser = async () => {
      try {
        const request = await axios.get(BASE_URL + "refresh-user", {
          withCredentials: true,
        });

        if (request.data.user) {
          setUser(request.data.user);
          if (request.data.user.role === "Scout") {
            navigate("/scout-landing");
          }
          if (request.data.user.role === "Client") {
            navigate("client/landing");
          }
          if (request.data.user.role === undefined) {
            navigate("/");
          }
        }
        console.log("Current role:", request.data.user.role);
      } catch (error) {
        console.error("There was an error!");
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
