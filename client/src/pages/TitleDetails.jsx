import { Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Link, useParams } from "react-router-dom";
import { AddToReportBar } from "../components/forms/AddToReportBar";
import { UserContext } from "../contexts/UserContext";
import { BASE_URL } from "../utils/consts";

export function TitleDetails({ idFromTitle }) {
  const { user } = useContext(UserContext);
  const { id } = useParams();

  let { isLoading, error, data, refetch } = useQuery(
    ["titleDetails", idFromTitle],

    () =>
      axios
        .get(BASE_URL + `titles/single/${idFromTitle || id}`, {
          withCredentials: true,
        })
        .then((res) => res.data)
  );

  if (isLoading) return "";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <div>
      <div
        style={{
          height: "85%",
          width: "600px",
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
          <hr />
          <Typography variant="subtitle2" gutterBottom>
            Material: {data.currentMaterial}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Details: {data.details}
          </Typography>
          <hr />
          <Typography variant="body1" gutterBottom>
            Internal Notes: {data.internalNotes}
          </Typography>
          <hr />
          <Typography variant="subtitle2" gutterBottom>
            Rights sold: {data.rightsSold.length < 1 ? "None" : data.rightsSold}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Reported: {data.reported === true ? "Yes" : "No"}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Confidential: {data.confidential === true ? "Yes" : "No"}
          </Typography>

          {user.role === "Scout" ? (
            <>
              <Link style={{ textDecoration: "none", color: "Red" }} to={`/edit-title/${data._id}`}>
                Edit
              </Link>
              <AddToReportBar titleId={data._id} />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
