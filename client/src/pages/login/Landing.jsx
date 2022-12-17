import { Button, ButtonGroup } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Login } from "./Login";
import { Signup } from "./Signup";

export function Landing() {
  const { user, addUserToContext } = useContext(UserContext);
  const navigate = useNavigate();

  const [signupState, setSignupState] = useState(false);
  const [loginState, setLoginState] = useState(false);

  const handleLoginClick = () => setLoginState(!loginState);
  const handleSignupClick = () => setSignupState(!signupState);

  


  return (
    <div>
      <h1>Scout DB</h1>

      {!loginState && !signupState && (
        <ButtonGroup variant="contained" aria-label="text  button group">
          <Button onClick={handleLoginClick}>Login</Button>
          <Button onClick={handleSignupClick}>Signup</Button>
        </ButtonGroup>
      )}

      {loginState && <Login />}

      {signupState && <Signup />}


 
    </div>
  );
}
