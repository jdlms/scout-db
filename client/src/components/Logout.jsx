import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Logout() {
  navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await axios.post("http://localhost:5000/logout", { withCredentials: true });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  );
}
