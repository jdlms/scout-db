import { addId } from "../utils/addId";
import { Link } from "react-router-dom";
import { ReportRemoveTitle } from "./ReportRemoveTitle";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Typography } from "@mui/material";

export function ReportDetails({ reportData, divClicked }) {
  const { user } = useContext(UserContext);
  const report = reportData[divClicked];

  return (
    <div>
      <div style={{ borderBottom: "2px solid #0e0e1d", paddingTop: "15px" }}>
        <Typography variant="h5" gutterBottom>
          {report.title}
        </Typography>
      </div>
      {report.books.map((book) => {
        return (
          <div key={addId()}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={
                user.role !== "Client"
                  ? `/scout/details/${book._id}`
                  : `/client/details/${book._id}`
              }
            >
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  height: "50px",
                  width: "400px",
                  display: "flex",
                  flexDirection: "column",
                  color: "#0e0e1d",
                  margin: "4px",
                  borderRadius: "2%",
                }}
              >
                <span>
                  {book.title} by{" "}
                  {book.author.map((author) => `${author.firstName} ${author.lastName}`)}
                </span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{`${book.publisher[0].name} / ${book.agency[0].name}`}</span>
                  <span style={{ alignSelf: "flex-end" }}>Status: {book.status}</span>
                </div>
              </div>
            </Link>
            {user.role === "Scout" ? (
              <ReportRemoveTitle report={report} id={book._id} />
            ) : undefined}
          </div>
        );
      })}
    </div>
  );
}

//#todo map over all titles, for each status, make header and list books under it

//#todo add mui basic dialog to allow setting report header for each title "on submision" ect.
