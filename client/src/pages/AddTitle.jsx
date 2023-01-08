import { useForm } from "react-hook-form";
import axios from "axios";
import { AutocompleteForm } from "../components/forms/AutocompleteForm";
import { Text } from "../components/forms/Text";
import { MaterialSelect } from "../components/forms/MaterialSelect";
import { MultilineText } from "../components/forms/MultilineText";
import { StatusSelect } from "../components/forms/StatusSelect";
import { AutocompleteSelect } from "../components/forms/AutocompleteSelect";
import { SwitchConfidential } from "../components/forms/SwitchConfidential";
import { Button } from "@mui/material";

const defaultValues = {
  title: "",
  authorFirstName: "",
  authorLastName: "",
  agency: "",
  publisher: "",
  editor: "",
  details: "",
  rightsSold: "",
  currentMaterial: "",
  internalNotes: "",
  status: "",
  confidential: false,
  addToReport: "",
  reported: false,
};

export function AddTitle() {
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues,
  });

  const onSubmit = async (data) => {
    try {
      await axios.post(BASE_URL + "titles/add", data, {
        withCredentials: true,
      });
      reset(defaultValues);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />

        <AutocompleteForm control={control} name={"title"} url={"/title"} label={"Title"} />

        <AutocompleteForm
          control={control}
          name={"authorFirstName"}
          url={"/author-first-name"}
          label={"First name"}
        />

        <AutocompleteForm
          control={control}
          name={"authorLastName"}
          url={"/author-last-name"}
          label={"Last name"}
        />
        <AutocompleteForm control={control} name={"agency"} url={"/agency-name"} label={"Agency"} />

        <AutocompleteForm
          control={control}
          name={"publisher"}
          url={"/publisher-name"}
          label={"Publisher"}
        />

        <AutocompleteForm control={control} name={"editor"} url={"/editor-name"} label={"Editor"} />

        <MultilineText control={control} name={"details"} label={"Details"} />

        <Text control={control} name={"rightsSold"} label={"Rights sold"} />

        <MaterialSelect control={control} name={"currentMaterial"} label={"Current material"} />

        <StatusSelect control={control} name={"status"} label={"Status"} />

        <MultilineText control={control} name={"internalNotes"} label={"Internal notes"} />

        <fieldset
          style={{
            display: "inline",
            borderColor: "rgba(255, 255, 255, 0.12)",
            borderWidth: "1.5px",
            borderRadius: "2px",
          }}
        >
          <legend>Confidential</legend>
          <SwitchConfidential control={control} name={"confidential"} label={"Confidential"} />
        </fieldset>

        <AutocompleteSelect
          control={control}
          name={"addToReport"}
          url={"unreleased-reports"}
          label={"Add to Report"}
        />

        <Button type="submit" size="large" variant="outlined">
          Add
        </Button>
      </form>
    </div>
  );
}

//#todo add imprint
//#todo make rights sold field able to accept publisher names and save them in correct territories, auto search each time after comma?
