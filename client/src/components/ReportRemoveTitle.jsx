import axios from "axios";

export function ReportRemoveTitle({ report, id, refetch }) {
  const handleClick = async () => {
    try {
      await axios.post(BASE_URL + `scout/remove-title/${id}`, report, { withCredentials: true });

      await refetch();
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
