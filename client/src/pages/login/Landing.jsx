import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";

export function Landing() {
  const [signupState, setSignupState] = useState(false);
  const [loginState, setLoginState] = useState(false);

  const handleLoginClick = () => setLoginState(!loginState);
  const handleSignupClick = () => setSignupState(!signupState);

  return (
    <div
      style={{
        position: "fixed",
        padding: 0,
        margin: 0,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        display="flex"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid container display="flex" direction="column" alignItems="center">
          <Typography color="#0e0e1d" variant="h4" component="h1" gutterBottom>
            Scout DB
          </Typography>
          <Typography variant="h3">🕵️📚</Typography>

          <Grid>
            {!loginState && !signupState && (
              <ButtonGroup variant="contained">
                <Button onClick={handleLoginClick}>Login</Button>
                <Button onClick={handleSignupClick}>Signup</Button>
              </ButtonGroup>
            )}

            {loginState && <Login />}

            {signupState && <Signup />}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
