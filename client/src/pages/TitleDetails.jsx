import { Typography } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { BASE_URL } from "../utils/consts";

export function TitleDetails({ idFromTitle, viewDetails }) {
  const { user } = useContext(UserContext);

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
          height: "150px",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          color: "#0e0e1d",
          margin: "4px",
          borderRadius: "2%",
          borderColor: "#f7e7ce",
        }}
      >
        <div style={{ borderBottom: "2px solid #0e0e1d" }}>
          <Typography variant="h5" gutterBottom>
            {data.title} by {data.author.map((author) => ` ${author.firstName} ${author.lastName}`)}
          </Typography>
        </div>
        <br />
        {user.role === "Scout" ? (
          <Link style={{ textDecoration: "none", color: "Red" }} to={`/edit-title/${data._id}`}>
            Edit
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
