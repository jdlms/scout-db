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

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: "",
    },
  });

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

      <UnreleasedReports />
    </div>
  );
}

//#todo add unique ideas to all listed items
//#todo snackbars for errors
//#todo you should not be able to add more than 1 book with the same title
//#todo learn how to use mui box layouts
