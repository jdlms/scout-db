import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Text } from "../components/forms/Text";
import { UnreleasedReports } from "../components/UnreleasedReports";
import { ReportDetails } from "../components/ReportDetails";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { UserContext } from "../contexts/UserContext";

export default function Reports() {
  const { checkForUser } = useContext(UserContext);

  const [viewDetails, setViewDetails] = useState(false);
  const [divClicked, setDivClicked] = useState(null);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: "",
    },
  });

  const { isLoading, error, data, refetch } = useQuery(
    ["recentTitles"],
    async () =>
      await axios
        .get(BASE_URL + "scout/unreleased-reports-obj", {
          withCredentials: true,
        })
        .then((res) => res.data),
    { staleTime: 1000 * 10 }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  checkForUser;

  const onSubmit = async (data) => {
    try {
      await axios.post(BASE_URL + "scout/create-report", data, {
        withCredentials: true,
      });
      reset();
      await refetch();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text control={control} name={"title"} label={"Report title"} />
        <Button type="submit" size="small" variant="outlined">
          Create report
        </Button>
      </form>
      <br />

      <UnreleasedReports
        data={data}
        viewDetails={viewDetails}
        setViewDetails={setViewDetails}
        divClicked={divClicked}
        setDivClicked={setDivClicked}
      />
      <br />
      {viewDetails ? <ReportDetails data={data} divClicked={divClicked} /> : undefined}
    </div>
  );
}

//#todo add unique ideas to all listed items
//#todo snackbars for errors
//#todo you should not be able to add more than 1 book with the same title
//#todo learn how to use mui box layouts
