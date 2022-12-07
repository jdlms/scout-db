import axios from "axios";
import { useQuery } from "react-query";

export function RecentTitles() {
  const { isLoading, error, data, isFetching } = useQuery(
    ["recentTitles"],
    async () =>
      await axios
        .get("http://localhost:5000/recent-titles", data, {
          withCredentials: true,
        })
        .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div>Recent Titles</div>
      {data.map((title) => {
        return (
          <div
            style={{
              backgroundColor: "#f7e7ce",
              height: "150px",
              width: "400px",
              display: "flex",
              color: "#0e0e1d",
              margin: "4px",
              borderRadius: "2%",
            }}
          >
            <h3>
              {title.title} by{" "}
              {title.author.map((author) => `${author.firstName} ${author.lastName}`)}
            </h3>
          </div>
        );
      })}
      {console.log(data)}
    </>
  );
}
