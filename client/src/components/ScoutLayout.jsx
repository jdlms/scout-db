import { Outlet } from "react-router-dom";
import { ScoutNav } from "./ScoutNav";

export function ScoutLayout() {
  return (
    <div>
      <ScoutNav />
      <main>
        <article>
          <Outlet />
        </article>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
