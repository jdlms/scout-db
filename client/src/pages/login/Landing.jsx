import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { LandingModal } from "../../components/LandingModal";
import { Login } from "./Login";
import { Signup } from "./Signup";

export function Landing() {
  const [signupState, setSignupState] = useState(false);
  const [loginState, setLoginState] = useState(false);

  //modal state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        backgroundColor: "#0e0e1d",
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
        <div
          style={{
            direction: "column",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            top: 0,
            left: 0,
            width: "35%",
            height: "420px",
            backgroundColor: "#f5f5f5",
            borderRadius: "3%",
          }}
        >
          <Grid container display="flex" direction="column" alignItems="center">
            <h1 color="#0e0e1d" variant="h4" component="h1">
              Scout DB
            </h1>
            {!signupState ? (
              <Typography variant="h3">🕵️📚</Typography>
            ) : (
              <Typography variant="h3">📚🕵️</Typography>
            )}
            <div
              style={{
                height: "6px",
              }}
            ></div>
            <Grid>
              {loginState && !signupState && (
                <ButtonGroup variant="contained">
                  <Button onClick={handleLoginClick}>Login</Button>
                  <Button onClick={handleSignupClick}>Sign up</Button>
                </ButtonGroup>
              )}

              {loginState && (
                <Grid container display="flex" direction="column" alignItems="center">
                  <Login setLoginState={setLoginState} setSignupState={setSignupState} />
                </Grid>
              )}
            </Grid>

            {signupState && (
              <Grid container display="flex" direction="column" alignItems="center">
                <Signup setLoginState={setLoginState} setSignupState={setSignupState} />
              </Grid>
            )}
          </Grid>
        </div>
        <LandingModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
      </Grid>
    </div>
  );
}
