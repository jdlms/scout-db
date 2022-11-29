import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Scout } from "./components/Scout";
import { Members } from "./components/Members";
import { Client } from "./components/Client";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="scout-landing" element={<Scout />} />
      <Route path="client-landing" element={<Client />} />
      <Route path="members" element={<Members />} />
    </Routes>
  );
}

export default App;
