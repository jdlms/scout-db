import { Typography } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { UserContext } from "../contexts/UserContext";
import { addId } from "../utils/addId";
import { BASE_URL } from "../utils/consts";

export function GetTitles({ title, url, handleClick }) {
  // const { checkForUser } = useContext(UserContext);

  const { isLoading, error, data } = useQuery(
    ["getTitles"],
    async () =>
      await axios
        .get(BASE_URL + url, {
          withCredentials: true,
        })
        .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  // checkForUser;

  //#todo write util to make url id title-lastName-year

  return (
    <>
      {data.map((title, index) => {
        const titleId = title._id;
        return (
          <div key={addId()}>
            <div
              onClick={(event) => handleClick(event, index, titleId)}
              className="listDiv"
              style={{
                height: "150px",
                width: "300px",
                color: "#0e0e1d",
                margin: "4px",
                borderRadius: "3%",
                borderStyle: "solid",
                borderColor: "#0e0e1d",
                borderWidth: "1px",
              }}
            >
              <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                <Typography variant="h6" gutterBottom>
                  {title.title} by
                  {title.author.map((author) => ` ${author.firstName} ${author.lastName}`)}
                </Typography>
                <span>{title.status}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

//#todo add fiction/nonfiction
