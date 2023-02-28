import { Button } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../utils/consts";
import { AutocompleteSelect } from "./AutocompleteSelect";

export function AddToReportBar({ titleId }) {
  const { handleSubmit, control, reset } = useForm({ defaultValues: { addToReport: "" } });

  const onSubmit = async (data) => {
    try {
      await axios.post(BASE_URL + `titles/add-to-report/${titleId}`, data, {
        withCredentials: true,
      });
     
      // reset(defaultValues);
      // setOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  // #todo snackbar for adding to report

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <AutocompleteSelect
          control={control}
          name={"addToReport"}
          url={"unreleased-reports"}
          label={"Add to Report"}
        />
        <Button type="submit" size="small" variant="outlined">
          Add
        </Button>
      </form>
    </div>
  );
}
