import axios from "axios";
import { useNavigate } from "react-router-dom";

const chooseRole = async (event) => {
  const role = { role: event.target.value };
  await axios.post("http://localhost:5000/role", role);
};

export function Role() {
  return (
    <div>
      <h3>Please choose a role...</h3>
      <button value={"Scout"} onClick={chooseRole}>
        Scout
      </button>
      <button value={"Client"} onClick={chooseRole}>
        Client
      </button>
    </div>
  );
}
