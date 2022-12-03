import axios from "axios";

export function Logout() {
  const logout = async () => {
    try {
      const res = await axios.post("http://localhost:5000/logout", { withCredentials: true });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error);
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
