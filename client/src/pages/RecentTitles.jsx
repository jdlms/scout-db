import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { GetTitles } from "../components/GetTitles";
import { UserContext } from "../contexts/UserContext";
import { TitleDetails } from "./TitleDetails";

export function RecentTitles() {
  const { user } = useContext(UserContext);

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
  };

  const url = user.role === "Scout" ? "titles/recent" : "titles/reported";
  console.log(user.role);

  return (
    <>
      <div style={{ width: "80vw", height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
          height="100%"
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box style={{ maxHeight: "100vh", maxWidth: 450, overflow: "auto" }}>
                <GetTitles title={"Recent Titles"} url={url} handleClick={handleClick} />
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box style={{ maxHeight: "100vh", maxWidth: 450, overflow: "auto" }}>
                {viewDetails ? (
                  <TitleDetails idFromTitle={idFromTitle} viewDetails={viewDetails} />
                ) : (
                  <div></div>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
