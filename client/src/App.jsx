import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { CreateTitle } from "./components/CreateTitle";
import { Client } from "./components/Client";
import { Login } from "./components/Login";
import { Role } from "./components/Role";
import { ScoutLayout } from "./components/ScoutLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="homepage" element={<Homepage />} />
      <Route path="role" element={<Role />} />
      <Route element={<ScoutLayout />}>
        <Route path="create-title" element={<CreateTitle />} />
      </Route>
      <Route path="client-landing" element={<Client />} />
    </Routes>
  );
}

export default App;
