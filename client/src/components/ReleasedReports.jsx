import { Typography } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import { addId } from "../utils/addId";
import { BASE_URL } from "../utils/consts";

export function ReleasedReports({ handleClick }) {
  const { isLoading, error, data, refetch } = useQuery(
    ["Released Reports"],
    async () =>
      await axios
        .get(BASE_URL + "scout/released-reports", {
          withCredentials: true,
        })
        .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {data.map((title, index) => {
        return (
          <div key={addId()}>
            <div
              className="Reports-Div"
              onClick={(event) => handleClick(event, index, data[index])}
              style={{
                height: "65px",
                width: "300px",
                color: "#0e0e1d",
                marginTop: "6px",
                paddingLeft: "10px",
                paddingTop: "10px",
                borderStyle: "solid",
                borderColor: "#0e0e1d",
                borderWidth: "1px",
              }}
            >
              <Typography variant="h6" gutterBottom>
                {title.title}
              </Typography>
            </div>
          </div>
        );
      })}
    </>
  );
}
