import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { GetTitles } from "../components/GetTitles";
import { TitleDetails } from "./TitleDetails";

export function RecentTitles() {
  const [viewDetails, setViewDetails] = useState(false);
  const [divClicked, setDivClicked] = useState(null);
  const [idFromTitle, setIdFromTitle] = useState(null);

  const handleClick = (event, index, titleId) => {
    if (divClicked === null) {
      setViewDetails(!viewDetails);
      setDivClicked(index);
      setIdFromTitle(titleId);
    }
    if (divClicked !== null && divClicked === index) {
      setViewDetails(!viewDetails);
      setDivClicked(null);
      setIdFromTitle(null);
    }
    console.log(titleId);
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box style={{ maxHeight: "100vh", maxWidth: 450, overflow: "auto" }}>
                <GetTitles
                  title={"Recent Titles"}
                  url={"titles/recent"}
                  handleClick={handleClick}
                />
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box style={{ maxHeight: "100vh", maxWidth: 450, overflow: "auto" }}>
                {viewDetails ? <TitleDetails idFromTitle={idFromTitle} /> : <div></div>}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
