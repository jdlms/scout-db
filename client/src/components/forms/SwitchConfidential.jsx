import { Controller } from "react-hook-form";
import { FormGroup, Switch } from "@mui/material";

export function SwitchConfidential({ control, name, label }) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Switch onChange={(e) => field.onChange(e.target.checked)} checked={field.value} />
        )}
      />
    </>
  );
}
