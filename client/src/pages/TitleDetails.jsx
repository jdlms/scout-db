import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export function TitleDetails() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(
    ["titleDetails"],
    async () =>
      await axios
        .get("http://localhost:5000/title-details/" + `${id}`, {
          withCredentials: true,
        })
        .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <div>{data.title}</div>
      <div
        style={{
          backgroundColor: "#f7e7ce",
          height: "150px",
          width: "400px",
          display: "flex",
          color: "#0e0e1d",
          margin: "4px",
          borderRadius: "2%",
        }}
      >
        <h3>
          {data.title} by {data.author.map((author) => `${author.firstName} ${author.lastName}`)}
        </h3>
      </div>
    </div>
  );
}
