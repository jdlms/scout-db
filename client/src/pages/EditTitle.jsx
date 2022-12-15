import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { UpdateTitleFields } from "../components/UpdateTitleFields";
import axios from "axios";

export function EditTitle() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(
    ["titleDetails"],
    async () =>
      await axios
        .get("http://localhost:5000/title-details/" + `${id}`, {
          withCredentials: true,
        })
        .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data._id);
  const defaultValues = {
    title: data.title,
    authorFirstName: data.author[0].firstName,
    authorLastName: data.author[0].lastName,
    agency: data.agency[0].name,
    publisher: data.publisher[0].name,
    editor: data.editor[0].name,
    details: data.details,
    rightsSold: data.rightsSold,
    currentMaterial: data.currentMaterial,
    internalNotes: data.currentMaterial,
    status: data.status,
    confidential: data.confidential,
    addToReport: "",
  };

  return (
    <div>
      <UpdateTitleFields data={data} defaultValues={defaultValues} id={id} />
    </div>
  );
}
