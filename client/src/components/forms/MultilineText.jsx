import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export function MultilineText({ control, name, label }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          onChange={onChange}
          value={value}
          label={label}
          multiline
          rows={4}
          sx={{ width: 300 }}
        />
      )}
    />
  );
}
