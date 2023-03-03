import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { addId } from "../utils/addId";
import { BASE_URL } from "../utils/consts";

export function GetTitles({ url, handleClick }) {
  const [page, setPage] = useState(0);

  const fetchTitles = (page = 0) =>
    axios
      .get(BASE_URL + "titles/all?page=" + `${page}`, {
        withCredentials: true,
      })
      .then((res) => res.data);

  // const fetchProjects = (page = 0) => fetch('/api/projects?page=' + page).then((res) => res.json())

  const { isLoading, error, data, isFetching, isPreviousData } = useQuery({
    queryKey: ["getTitles", page],
    queryFn: async () => await fetchTitles(page),
    keepPreviousData: true,
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  // #todo write util to make url id title-lastName-year

  return (
    <>
      <span>Page {page + 1}</span>
      <Button onClick={() => setPage((old) => Math.max(old - 1, 0))} disabled={page === 0}>
        Previous
      </Button>{" "}
      <Button
        onClick={() => {
          if (!isPreviousData && data.hasNextPage) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || !data.hasNextPage}
      >
        Next
      </Button>
      {isFetching ? <span> Loading...</span> : null}{" "}
      {data.docs.map((title, index) => {
        const titleId = title._id;
        return (
          <div key={addId()}>
            <div
              onClick={(event) => handleClick(event, index, titleId)}
              className="listDiv"
              style={{
                height: "130px",
                width: "355px",
                color: "#0e0e1d",
                margin: "4px",
                borderStyle: "solid",
                borderColor: "#0e0e1d",
                borderWidth: "1.5px",
              }}
            >
              <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                <Typography variant="h6" gutterBottom>
                  {title.title} by
                  {title.author.map((author) => ` ${author.firstName} ${author.lastName}`)}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {title.agency[0].name} / {title.publisher[0].name}
                </Typography>

                <Typography variant="caption" gutterBottom>
                  {title.status}
                </Typography>
              </div>
            </div>
          </div>
        );
      })}
      <span>Page {page + 1}</span>
      <Button onClick={() => setPage((old) => Math.max(old - 1, 0))} disabled={page === 0}>
        Previous
      </Button>{" "}
      <Button
        onClick={() => {
          if (!isPreviousData && data.hasNextPage) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || !data.hasNextPage}
      >
        Next
      </Button>
      {isFetching ? <span> Loading...</span> : null}{" "}
    </>
  );
}

// #todo add fiction/nonfiction
