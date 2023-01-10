import { Box, Grid } from "@mui/material";
import { GetTitles } from "../components/GetTitles";

export function RecentTitles() {
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
                <GetTitles title={"Recent Titles"} url={"titles/recent"} />
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box style={{ maxHeight: "100vh", maxWidth: 450, overflow: "auto" }}>
                <h1>Hi!</h1>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
