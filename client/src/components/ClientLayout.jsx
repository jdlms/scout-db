import { Outlet } from "react-router-dom";
import { ClientNav } from "./ClientNav";

export function ClientLayout() {
  return (
    <div>
      <ClientNav />
      <main>
        <article>
          <Outlet />
        </article>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
