import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { BASE_URL } from "../utils/consts";

export function ReportRemoveTitle({ reportId, bookId }) {
  const queryClient = useQueryClient();

  const removeTitleFromReport = useMutation({
    mutationFn: async ({ reportId, bookId }) => {
      await axios.post(
        BASE_URL + `scout/remove-title/${bookId}`,
        { report: reportId },
        {
          withCredentials: true,
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["SingleReport"] });
    },
  });

  return (
    <span
      style={{ cursor: "pointer" }}
      onClick={() => removeTitleFromReport.mutate({ reportId: reportId, bookId: bookId })}
    >
      ❌
    </span>
  );
}
