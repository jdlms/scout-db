import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { UserContext } from "../contexts/UserContext";
import { addId } from "../utils/addId";

export function GetTitles({ title, url, handleClick }) {
  const { checkForUser } = useContext(UserContext);

  const { isLoading, error, data } = useQuery(
    ["getTitle"],
    async () =>
      await axios
        .get(BASE_URL + url, {
          withCredentials: true,
        })
        .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  checkForUser;

  //#todo write util to make url id title-lastName-year

  return (
    <>
      {data.map((title, index) => {
        const titleId = title._id;
        return (
          <div key={addId()}>
            <div
              onClick={(event) => handleClick(event, index, titleId)}
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
                {title.title} by
                {title.author.map((author) => `${author.firstName} ${author.lastName}`)}
              </h3>
            </div>
          </div>
        );
      })}
    </>
  );
}

//#todo add fiction/nonfiction
