import { IconButton, styled } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
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

  const CustomButton = styled(IconButton)(({ theme }) => ({
    color: "white",
    fontSize: 15.5,
    fontFamily: "Chivo",
  }));

  return (
    <>
      <CustomButton size="small" onClick={logout}>
        Logout
      </CustomButton>
    </>
  );
}
