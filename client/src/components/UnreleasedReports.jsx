import { addId } from "../utils/addId";
import { ReportButton } from "./ReportButton";
import { ReleaseReport } from "./ReleaseReport";
import { CreateReport } from "./CreateReport";
import { useQuery } from "react-query";
import axios from "axios";
import { BASE_URL } from "../utils/consts";
import { Typography } from "@mui/material";

export function UnreleasedReports({ handleClick, setViewDetails }) {
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
              onClick={(event) => handleClick(event, index, data[index]._id)}
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
            <ReportButton title={title} url={"scout/delete-report"} btnText={"Delete"} />
            <ReportButton title={title} url={"scout/release-report"} btnText={"Release"} />
          </div>
        );
      })}
    </>
  );

  //#todo save some code and refactor 👆 these buttons above, they're the same
}
