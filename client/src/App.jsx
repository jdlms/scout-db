import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { CreateTitle } from "./components/CreateTitle";
import { Client } from "./components/Client";
import { Login } from "./components/Login";
import { Role } from "./components/Role";
import { Layout } from "./components/Layout";
import { ScoutLanding } from "./components/ScoutLanding";
import { RecentTitles } from "./components/RecentTitles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="homepage" element={<Homepage />} />
      <Route path="role" element={<Role />} />
      <Route element={<Layout />}>
        <Route path="scout-landing" element={<ScoutLanding />} />
        <Route path="create-title" element={<CreateTitle />} />
        <Route path="recent" element={<RecentTitles />} />
        <Route path="client-landing" element={<Client />} />
      </Route>
    </Routes>
  );
}

export default App;
