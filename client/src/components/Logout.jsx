import axios from "axios";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export function Logout() {
  const { user, addUserToContext } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await axios.post(BASE_URL + "logout", {}, { withCredentials: true });

      const data = await res.data;
      console.log(data);

      addUserToContext({});
      navigate("/");
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <>
      <NavLink style={{ textDecoration: "none" }} onClick={logout}>
        Logout
      </NavLink>
    </>
  );
}
