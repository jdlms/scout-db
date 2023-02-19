import { Button, ButtonGroup } from "@mui/material";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { BASE_URL } from "../utils/consts";

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
        navigate("/client/landing");
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  // #todo there are two calls happening here, on Signup and on Role. It should only be one. First choose the role, then signup, then send to server

  return (
    <div>
      <p>Please choose a role...</p>
      <ButtonGroup variant="contained">
        <Button onClick={() => chooseRole("Scout")}>Scout</Button>
        <Button onClick={() => chooseRole("Client")}>Client</Button>
      </ButtonGroup>
      <div
        style={{
          height: "25px",
        }}
      ></div>
    </div>
  );
}
