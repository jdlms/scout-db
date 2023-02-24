import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { GetTitles } from "../components/GetTitles";
import { UserContext } from "../contexts/UserContext";
import { TitleDetails } from "./TitleDetails";

export function RecentTitles() {
  const { checkForUser, user } = useContext(UserContext);
  checkForUser;

  // const [viewDetails, setViewDetails] = useState(false);
  // const [divClicked, setDivClicked] = useState(null);
  const [idFromTitle, setIdFromTitle] = useState(null);
  const queryClient = useQueryClient();

  const handleClick = (event, index, titleId) => {
    setIdFromTitle(titleId);
    queryClient.invalidateQueries({ queryKey: ["titleDetails"] });
  };

  const url = user.role === "Scout" ? "titles/recent" : "titles/reported";

  return (
    <>
      <div style={{ width: "95%", height: "100%" }}>
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
                {idFromTitle ? <TitleDetails idFromTitle={idFromTitle} /> : <div></div>}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
