import { useState } from "react";
import { addId } from "../utils/addId";

export function UnreleasedReports({ data, viewDetails, setViewDetails }) {
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

  return (
    <>
      <div>Unreleased Reports</div>
      {data.map((title, index) => {
        return (
          <div
            onClick={(event) => handleClick(event, index)}
            key={addId()}
            style={{
              backgroundColor: "#f7e7ce",
              height: "65px",
              width: "350px",
              display: "flex",
              color: "#0e0e1d",
              margin: "4px",
              borderRadius: "2%",
            }}
          >
            <h3>{title.title}</h3>
          </div>
        );
      })}
    </>
  );
}
