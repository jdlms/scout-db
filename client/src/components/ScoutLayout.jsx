import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import { ScoutNav } from "./ScoutNav";

export function ScoutLayout() {
  return (
    <Box
      style={{ height: "100vh", width: "100vw" }}
      sx={{ bgcolor: (theme) => (theme.palette.mode === "dark" ? "#101010" : "grey.100") }}
    >
      <ScoutNav />
   
        <Outlet />

      {/* <Footer /> */}
    </Box>
  );
}

// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

// export function ScoutLayout() {
//   return (
//     <>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton size="medium" edge="start" sx={{ mr: 2 }}></IconButton>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               News
//             </Typography>
//             <Button>Login</Button>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <Box sx={{ flexGrow: 1 }}>
//         <Outlet />
//       </Box>
//     </>
//   );
// }
