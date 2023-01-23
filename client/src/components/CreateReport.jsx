import { Button } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../utils/consts";
import { Text } from "./forms/Text";

export function CreateReport({ refetch }) {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await axios.post(BASE_URL + "scout/create-report", data, {
        withCredentials: true,
      });
      reset();
      await refetch();
    } catch (error) {
      console.log(error.response.data);
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
    </div>
  );
}
