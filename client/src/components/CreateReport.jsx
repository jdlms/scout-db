import { Button, Snackbar } from "@mui/material";
import axios from "axios";
import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../utils/consts";
import { Text } from "./forms/Text";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function CreateReport({ refetch }) {
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: "",
    },
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSubmit = async (data) => {
    try {
      await axios.post(BASE_URL + "scout/create-report", data, {
        withCredentials: true,
      });
      reset();
      await refetch();
    } catch (error) {
      setOpen(true);
      setErrorMsg((old) => error.response.data.error);
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
      {open === true ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errorMsg}
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}
    </div>
  );
}
