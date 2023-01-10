import { useQuery } from "react-query";
import axios from "axios";
import { addId } from "../../utils/addId";
import { ReleasedReports } from "../../components/ReleasedReports";

export function ClientReports() {
  const { isLoading, error, data, refetch } = useQuery(
    ["recentTitles"],
    async () =>
      await axios
        .get(BASE_URL + "scout/released-reports", {
          withCredentials: true,
        })
        .then((res) => res.data),
    { staleTime: 1000 * 10 }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <ReleasedReports />
    </>
  );
}
