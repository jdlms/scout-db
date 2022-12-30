import axios from "axios";

export function ReportRemoveTitle({ report, id, refetch }) {
  const handleClick = async () => {
    try {
      await axios.post(BASE_URL + `scout/remove-title/${id}`, report, { withCredentials: true });
      console.log(report);
      console.log(id);
      await refetch();
    } catch (error) {}
  };

  return (
    <span style={{ cursor: "pointer" }} onClick={handleClick}>
      ❌
    </span>
  );
}
