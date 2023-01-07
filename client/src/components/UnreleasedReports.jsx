import { addId } from "../utils/addId";
import { DeleteReport } from "./DeleteReport";
import { ReleaseReport } from "./ReleaseReport";

export function UnreleasedReports({
  data,
  viewDetails,
  setViewDetails,
  divClicked,
  setDivClicked,
  refetch,
}) {
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

  return (
    <>
      <div>Unreleased Reports</div>
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
            <DeleteReport title={title} refetch={refetch} />
            <ReleaseReport title={title} refetch={refetch} />
          </div>
        );
      })}
    </>
  );
}
