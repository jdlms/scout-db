import { addId } from "../utils/addId";
import { DeleteReport } from "./DeleteReport";
import { ReleaseReport } from "./ReleaseReport";
import { CreateReport } from "./CreateReport";
import { useQuery } from "react-query";
import axios from "axios";
import { BASE_URL } from "../utils/consts";
import { Typography } from "@mui/material";

export function UnreleasedReports({ handleClick }) {
  const { isLoading, error, data, refetch } = useQuery(
    ["UnreleasedReports"],
    async () =>
      await axios
        .get(BASE_URL + "scout/unreleased-reports-obj", {
          withCredentials: true,
        })
        .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <br />
      <CreateReport refetch={refetch} />
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
            <DeleteReport title={title} refetch={refetch} />
            <ReleaseReport title={title} refetch={refetch} />
          </div>
        );
      })}
    </>
  );
}
