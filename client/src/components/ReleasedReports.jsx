import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { addId } from "../utils/addId";
import { ReportDetails } from "./ReportDetails";

export function ReleasedReports() {
  const [viewDetails, setViewDetails] = useState(false);
  const [divClicked, setDivClicked] = useState(null);

  const handleClick = (event, index) => {
    if (divClicked === null) {
      setViewDetails(!viewDetails);
      setDivClicked(index);
    }
    if (divClicked !== null && divClicked === index) {
      setViewDetails(!viewDetails);
      setDivClicked(null);
    }
  };

  const { isLoading, error, data, refetch } = useQuery(
    ["Released Reports"],
    async () =>
      await axios
        .get(BASE_URL + "scout/released-reports", {
          withCredentials: true,
        })
        .then((res) => res.data),
    { staleTime: 1000 * 10 }
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
              onClick={(event) => handleClick(event, index)}
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
          </div>
        );
      })}
      <br />
      {viewDetails ? (
        <ReportDetails data={data} divClicked={divClicked} refetch={refetch} />
      ) : undefined} 
    </>
  );
}
