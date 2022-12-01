import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Scout } from "./components/Scout";
import { Client } from "./components/Client";
import { Login } from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="homepage" element={<Homepage />} />
      <Route path="scout-landing" element={<Scout />} />
      <Route path="client-landing" element={<Client />} />
    </Routes>
  );
}

export default App;
