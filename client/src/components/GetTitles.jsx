import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { UserContext } from "../contexts/UserContext";
import { addId } from "../utils/addId";

export function GetTitles({ title, url }) {
  const { checkForUser } = useContext(UserContext);

  const { isLoading, error, data, isFetching } = useQuery(
    ["recentReports"],
    async () =>
      await axios
        .get("http://localhost:5000/" + url, {
          withCredentials: true,
        })
        .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  checkForUser;

  return (
    <>
      <div>{title}</div>
      {data.map((title) => {
        return (
          <div
            key={addId()}
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
              {title.title} by{" "}
              {title.author.map((author) => `${author.firstName} ${author.lastName}`)}
            </h3>
          </div>
        );
      })}
    </>
  );
}
