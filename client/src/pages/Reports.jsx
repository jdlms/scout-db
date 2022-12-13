import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Text } from "../components/forms/Text";
import { RecentReports } from "../components/RecentReports";
import { useContext } from "react";
import { useQuery } from "react-query";
import { UserContext } from "../contexts/UserContext";

export default function Reports() {
  const { checkForUser } = useContext(UserContext);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: "",
    },
  });

  const { isLoading, error, data, refetch } = useQuery(
    ["recentTitles"],
    async () =>
      await axios
        .get("http://localhost:5000/scout/reports", {
          withCredentials: true,
        })
        .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  checkForUser;

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await axios.post("http://localhost:5000/scout/create-report", data, {
        withCredentials: true,
      });
      //for demo purposes only, change this reset call!

      reset();
      await refetch();
      console.log(data);
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
      <RecentReports data={data} />
    </div>
  );
}

//#todo add unique ideas to all listed items
//#todo snackbars for errors
//#todo you should not be able to add more than 1 book with the same title
//#todo learn how to use mui box layouts