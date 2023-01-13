import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { ScoutLayout } from "./components/ScoutLayout";
import { AddTitle } from "./pages/AddTitle";
import { Client } from "./pages/client/Client";
import { Landing } from "./pages/login/Landing";
import { Role } from "./pages/Role";
import { RecentTitles } from "./pages/RecentTitles";
import { ScoutLanding } from "./pages/ScoutLanding";
import { ClientLayout } from "./components/ClientLayout";
import Reports from "./pages/Reports";
import { TitleDetails } from "./pages/TitleDetails";
import { EditTitle } from "./pages/EditTitle";
import { Tracked } from "./pages/client/Tracked";
import { Titles } from "./pages/client/Titles";
import { ClientReports } from "./pages/client/ClientReports";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="role" element={<Role />} />
      <Route element={<ScoutLayout />}>
        <Route path="scout-landing" element={<ScoutLanding />} />
        <Route path="add-title" element={<AddTitle />} />
        <Route path="scout/details/:id" element={<TitleDetails />} />
        <Route path="edit-title/:id" element={<EditTitle />} />
        <Route path="recent" element={<RecentTitles />} />
        <Route path="reports" element={<Reports />} />
      </Route>
      <Route element={<ClientLayout />}>
        <Route path="client/landing" element={<Client />} />
        <Route path="client/tracked" element={<Tracked />} />
        <Route path="client/titles" element={<Titles />} />
        <Route path="client/reports" element={<ClientReports />} />
        <Route path="client/details/:id" element={<TitleDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
