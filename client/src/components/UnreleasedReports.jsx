import { addId } from "../utils/addId";
import { DeleteReport } from "./DeleteReport";
import { ReleaseReport } from "./ReleaseReport";
import { CreateReport } from "./CreateReport";
import { useQuery } from "react-query";
import axios from "axios";

export function UnreleasedReports({ handleClick }) {
  const { isLoading, error, data, refetch } = useQuery(
    ["recentTitles"],
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
              onClick={(event) => handleClick(event, index, data)}
              style={{
                backgroundColor: "#f7e7ce",
                height: "65px",
                width: "350px",
                color: "#0e0e1d",
                margin: "4px",
                borderRadius: "2%",
              }}
            >
              <h3>{title.title}</h3>
            </div>
            <DeleteReport title={title} refetch={refetch} />
            <ReleaseReport title={title} refetch={refetch} />
          </div>
        );
      })}
    </>
  );
}
