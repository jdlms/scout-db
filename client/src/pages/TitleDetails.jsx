import { Typography } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { BASE_URL } from "../utils/consts";

export function TitleDetails({ idFromTitle, viewDetails }) {
  const { user } = useContext(UserContext);
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(
    ["titleDetails"],
    () =>
      axios
        .get(BASE_URL + `titles/single/${idFromTitle || id}`, {
          withCredentials: true,
        })
        .then((res) => res.data),
    { cacheTime: 0 }
  );

  if (isLoading) return "";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <div
        style={{
          height: "85%",
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
        <div style={{ paddingTop: "10px" }}>
          <Typography variant="subtitle2" gutterBottom>
            {data.agency[0].name}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {data.publisher[0].name} - {data.editor[0].name}
          </Typography>

          <Typography variant="body1" gutterBottom>
            {data.details}
          </Typography>

          <Typography variant="subtitle2" gutterBottom>
            Material: {data.currentMaterial}
          </Typography>

          <Typography variant="subtitle2" gutterBottom>
            Rights sold: {data.rightsSold.length < 1 ? "None" : data.rightsSold.length}
          </Typography>

          <Typography variant="subtitle2" gutterBottom>
            Reported: {data.reported === true ? "Yes" : "No"}
          </Typography>

          <Typography variant="subtitle2" gutterBottom>
            Confidential: {data.confidential === true ? "Yes" : "No"}
          </Typography>

          {user.role === "Scout" ? (
            <Link style={{ textDecoration: "none", color: "Red" }} to={`/edit-title/${data._id}`}>
              Edit
            </Link>
          ) : (
            <div> </div>
          )}
        </div>
      </div>
    </div>
  );
}
