import axios from "axios";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

export function TitleDetails({ idFromTitle }) {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(
    ["titleDetails"],
    () =>
      axios
        .get(BASE_URL + `titles/single/${idFromTitle}`, {
          withCredentials: true,
        })
        .then((res) => res.data),
    { cacheTime: 1000 }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <div
        style={{
          backgroundColor: "#f7e7ce",
          height: "150px",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          color: "#0e0e1d",
          margin: "4px",
          borderRadius: "2%",
        }}
      >
        <h3>
          {data.title} by {data.author.map((author) => `${author.firstName} ${author.lastName}`)}
        </h3>
        <br />
        <Link style={{ textDecoration: "none", color: "Red" }} to={`/edit-title/${data._id}`}>
          Edit
        </Link>
      </div>
    </div>
  );
}
