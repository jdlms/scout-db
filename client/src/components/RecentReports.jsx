export function RecentReports({ data }) {
  return (
    <>
      <div>Recent Reports</div>
      {data.map((title) => {
        return (
          <div
            style={{
              backgroundColor: "#f7e7ce",
              height: "65px",
              width: "350px",
              display: "flex",
              color: "#0e0e1d",
              margin: "4px",
              borderRadius: "2%",
            }}
          >
            <h3>{title.title}</h3>
          </div>
        );
      })}
      {console.log(data)}
    </>
  );
}
