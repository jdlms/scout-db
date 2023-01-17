import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

import { BASE_URL } from "../../utils/consts";
import { Fields } from "./Fields";

export function Login() {
  const { addUserToContext } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const sendLoginDetails = await axios.post(BASE_URL + "login", data, {
        withCredentials: true,
      });
      const user = sendLoginDetails.data.user;

      addUserToContext(user);

      if (user.role === "Scout") {
        navigate("/scout-landing");
      }
      if (user.role === "Client") {
        navigate("/client/landing");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <Fields onSubmit={onSubmit} />
    </div>
  );
}
