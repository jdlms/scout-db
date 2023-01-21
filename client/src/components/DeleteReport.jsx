import { Button } from "@mui/material";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { BASE_URL } from "../utils/consts";

export function DeleteReport({ title }) {
  const queryClient = useQueryClient();

  const deleteReport = useMutation({
    mutationFn: async (title) => {
      console.log("mutating...");
      return await axios.post(BASE_URL + "scout/delete-report", title, { withCredentials: true });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["UnreleasedReports"] });
    },
  });

  return (
    <Button variant="contained" size="small" onClick={() => deleteReport.mutate(title)}>
      Delete
    </Button>
  );
}
