import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export function Text({ control, title, label, errors }) {
  return (
    <Controller
      name={title}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState }) => (
        <TextField
          onChange={onChange}
          value={value}
          ref={ref}
          error={errors.title ? true : false}
          helperText={errors.title ? errors.title.message : undefined}
          label={label}
          sx={{ width: 300 }}
        />
      )}
    />
  );
}
