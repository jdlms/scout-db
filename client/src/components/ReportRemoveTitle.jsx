import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { BASE_URL } from "../utils/consts";

export function ReportRemoveTitle({ reportData, id }) {
  const queryClient = useQueryClient();

  const removeTitleFromReport = useMutation({
    mutationFn: async ({ reportData, id }) => {
      console.log("mutating...");
      console.log(reportData, id);
      return await axios.post(BASE_URL + `scout/remove-title/${id}`, reportData, {
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["UnreleasedReports"] }, { force: true });
    },
  });

  // const handleClick = async () => {
  //   try {
  // await axios.post(BASE_URL + `scout/remove-title/${id}`, report, { withCredentials: true });

  //     // queryClient.refetchQueries({ queryKey: ["UnreleasedReports"] });

  //     // await refetch();
  //     //#todo find out how to trigger refetch here
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <span
      style={{ cursor: "pointer" }}
      onClick={() => removeTitleFromReport.mutate({ reportData: reportData, id: id })}
    >
      ❌
    </span>
  );
}
