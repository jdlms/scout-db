import { Outlet } from "react-router-dom";
import { ScoutNav } from "./ScoutNav";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { ClientNav } from "./ClientNav";

export function Layout() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user === "Scout" ? <ScoutNav /> : <ClientNav />}
      <main>
        <article>
          <Outlet />
        </article>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
