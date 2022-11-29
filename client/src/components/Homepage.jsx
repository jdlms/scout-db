import { Link } from "react-router-dom";

export function Homepage() {
  return (
    <div className="homepage-container">
      <h1>Welcome to Scout DB!</h1>
      <p>Please choose a role...</p>
      <br />
      <div className="homepage-button-container">
        <Link to={"scout-landing"}>
          <button>Scout</button>
        </Link>
        <Link to={"client-landing"}>
          <button>Client</button>
        </Link>
      </div>
    </div>
  );
}
