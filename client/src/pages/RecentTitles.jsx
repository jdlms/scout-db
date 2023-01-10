import { Box } from "@mui/material";
import { GetTitles } from "../components/GetTitles";

export function RecentTitles() {
  return (
    <>
      <Box style={{ maxHeight: "100vh", maxWidth: 450, overflow: "auto" }}>
        <GetTitles title={"Recent Titles"} url={"titles/recent"} />
      </Box>
    </>
  );
}
