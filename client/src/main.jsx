import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
    },
  },
});

const myTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ffca80",
    },
    secondary: {
      main: "#9580ff",
    },
    background: {
      default: "#21222c",
      paper: "#282a36",
    },
    text: {
      primary: "#f8f8f2",
    },
    error: {
      main: "#ff9580",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#3E68A8",
          },
          "& label.Mui-focused": {
            color: "#3E68A8",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#3E68A8",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#3E68A8",
            },
            "&:hover fieldset": {
              borderColor: "#3E68A8",
              borderWidth: "0.15rem",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3E68A8",
            },
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <UserContextProvider>
        <ThemeProvider theme={myTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </UserContextProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
