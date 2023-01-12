import { MaterialSelect } from "./forms/MaterialSelect";
import { MultilineText } from "./forms/MultilineText";
import { StatusSelect } from "./forms/StatusSelect";
import { SwitchConfidential } from "./forms/SwitchConfidential";
import { Text } from "./forms/Text";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { AutocompleteSelect } from "./forms/AutocompleteSelect";
import { useEffect } from "react";
import axios from "axios";
import { DeleteTitle } from "./DeleteTitle";
import { BASE_URL } from "../utils/consts";

export function UpdateTitleFields({ data, defaultValues, id }) {
  const { handleSubmit, control, reset } = useForm({
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  const onSubmit = async (data) => {
    try {
      await axios.post(BASE_URL + `titles/edit/${id}`, data, {
        withCredentials: true,
      });
      //redirect back to last location via local storage?
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />

        <Text control={control} name="title" label={"Title"} />

        <Text control={control} name={"authorFirstName"} label={"First name"} />

        <Text control={control} name={"authorLastName"} label={"Last name"} />
        <Text control={control} name={"agency"} label={"Agency"} />

        <Text control={control} name={"publisher"} label={"Publisher"} />

        <Text control={control} name={"editor"} label={"Editor"} />

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
          Update
        </Button>
        <DeleteTitle id={id} />
      </form>
    </div>
  );
}
