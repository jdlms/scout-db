import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { ScoutLayout } from "./components/ScoutLayout";
import { AddTitle } from "./pages/AddTitle";
import { Client } from "./pages/Client";
import { Login } from "./pages/Login";
import { Role } from "./pages/Role";
import { RecentTitles } from "./pages/RecentTitles";
import { ScoutLanding } from "./pages/ScoutLanding";
import { ClientLayout } from "./components/ClientLayout";
import Reports from "./pages/Reports";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="role" element={<Role />} />
      <Route element={<ScoutLayout />}>
        <Route path="scout-landing" element={<ScoutLanding />} />
        <Route path="add-title" element={<AddTitle />} />
        <Route path="recent" element={<RecentTitles />} />
        <Route path="reports" element={<Reports />} />
      </Route>
      <Route element={<ClientLayout />}>
        <Route path="client-landing" element={<Client />} />
      </Route>
    </Routes>
  );
}

export default App;
