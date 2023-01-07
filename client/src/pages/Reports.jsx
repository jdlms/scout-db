import { Button, ButtonGroup } from "@mui/material";
import { UnreleasedReports } from "../components/UnreleasedReports";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { ReleasedReports } from "../components/ReleasedReports";

export default function Reports() {
  const { checkForUser } = useContext(UserContext);

  const [releasedReports, setReleasedReports] = useState(false);

  const unreleasedClick = () => {
    setReleasedReports(false);
  };

  const releasedClick = () => {
    setReleasedReports(true);
  };

  checkForUser;

  return (
    <div>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={unreleasedClick}>Unreleased</Button>
        <Button onClick={releasedClick}>Released</Button>
      </ButtonGroup>
      {releasedReports ? <ReleasedReports /> : <UnreleasedReports />}
    </div>
  );
}

//#todo add unique ideas to all listed items
//#todo snackbars for errors
//#todo you should not be able to add more than 1 book with the same title
//#todo learn how to use mui box layouts
