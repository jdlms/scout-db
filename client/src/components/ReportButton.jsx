import { Button } from "@mui/material";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { BASE_URL } from "../utils/consts";

export function ReportButton({ title, url, btnText }) {
  const queryClient = useQueryClient();

  const deleteReport = useMutation({
    mutationFn: async (title) => {
      return await axios.post(BASE_URL + url, title, { withCredentials: true });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["UnreleasedReports"] });
    },
  });

  return (
    <Button variant="contained" size="small" onClick={() => deleteReport.mutate(title)}>
      {btnText}
    </Button>
  );
}
