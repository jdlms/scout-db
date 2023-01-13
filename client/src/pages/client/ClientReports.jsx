import { useQuery } from "react-query";
import axios from "axios";
import { addId } from "../../utils/addId";
import { ReleasedReports } from "../../components/ReleasedReports";
import { BASE_URL } from "../../utils/consts";
import Reports from "../Reports";

export function ClientReports() {
  
  return (
    <>
      <Reports />
    </>
  );
}
