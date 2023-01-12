import axios from "axios";
import { BASE_URL } from "../utils/consts";

export function ReportRemoveTitle({ report, id }) {

  const handleClick = async () => {
    try {
      await axios.post(BASE_URL + `scout/remove-title/${id}`, report, { withCredentials: true });

      // queryClient.refetchQueries({ queryKey: ["UnreleasedReports"] });

      // await refetch();
      //#todo find out how to trigger refetch here
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <span style={{ cursor: "pointer" }} onClick={handleClick}>
      ❌
    </span>
  );
}
