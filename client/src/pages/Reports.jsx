import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import { UnreleasedReports } from "../components/UnreleasedReports";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { ReleasedReports } from "../components/ReleasedReports";
import { ReportDetails } from "../components/ReportDetails";

export default function Reports() {
  const { checkForUser, user } = useContext(UserContext);
  checkForUser;
  const [viewDetails, setViewDetails] = useState(false);
  const [divClicked, setDivClicked] = useState(null);
  const [reportId, setReportId] = useState(undefined);

  const [releasedReports, setReleasedReports] = useState(false);

  const handleClick = (event, index, data, refetch) => {
    if (divClicked === null) {
      setViewDetails(!viewDetails);
      setDivClicked(index);
      setReportId(data);
    }
    if (divClicked !== null && divClicked === index) {
      setViewDetails(!viewDetails);
      setDivClicked(null);
      setReportId(undefined);
    }
  };

  const unreleasedClick = () => {
    setViewDetails(false);
    setDivClicked(null);
    setReleasedReports(false);
    setReportId(undefined);
  };

  const releasedClick = () => {
    setViewDetails(false);
    setDivClicked(null);
    setReleasedReports(true);
    setReportId(undefined);
  };

  return (
    <div>
      <div style={{ width: "95%" }}>
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
              <Box style={{ maxHeight: "100vh", maxWidth: 320, overflow: "auto" }}>
                {user.role !== "Client" ? (
                  <div
                    style={{
                      borderBottomStyle: "solid",
                      borderBottomColor: "#f5f5f5",
                    }}
                  >
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button onClick={unreleasedClick}>Unreleased</Button>
                      <Button onClick={releasedClick}>Released</Button>
                    </ButtonGroup>
                  </div>
                ) : (
                  ""
                )}
                {releasedReports || user.role !== "Scout" ? (
                  <ReleasedReports handleClick={handleClick} />
                ) : (
                  <UnreleasedReports handleClick={handleClick} setViewDetails={setViewDetails} />
                )}
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box style={{ maxHeight: "100vh", maxWidth: 600, overflow: "auto" }}>
                {viewDetails === true ? (
                  <ReportDetails
                    reportId={reportId !== undefined ? reportId : { 1: "" }}
                    releasedReports={releasedReports}
                  />
                ) : (
                  ""
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

//#todo add unique ideas to all listed items
//#todo snackbars for errors
//#todo you should not be able to add more than 1 book with the same title
//#todo learn how to use mui box layouts
