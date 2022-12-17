import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export function Role() {
  const { user, addUserToContext } = useContext(UserContext);
  const navigate = useNavigate();

  const chooseRole = async (role) => {
    try {
      const userInfo = { email: user.email, role: role };
      await axios.post(BASE_URL + "role", userInfo, {
        withCredentials: true,
      });
      addUserToContext(userInfo);
      if (role === "Scout") {
        navigate("/scout-landing");
      }
      if (role === "Client") {
        navigate("/client-landing");
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <div>
      <h3>Please choose a role...</h3>
      <button onClick={() => chooseRole("Scout")}>Scout</button>
      <button onClick={() => chooseRole("Client")}>Client</button>
    </div>
  );
}


//#todo create mouse over event to change image, one for scout and one for client...