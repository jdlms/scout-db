import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export function Role() {
  const { user, addUserToContext } = useContext(UserContext);
  const navigate = useNavigate();

  const chooseRole = async (role) => {
try {
  const userInfo = { email: user.email, role };
  const request = await axios.post("http://localhost:5000/role", userInfo, {
    withCredentials: true,
  });
  console.log("hi");

  return addUserToContext((old) => ({ ...old, userInfo }));
  
} catch (error) {
  console.error
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
