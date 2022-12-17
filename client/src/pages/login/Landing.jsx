import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";

export function Landing() {
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
