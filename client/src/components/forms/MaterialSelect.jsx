import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";

export function MaterialSelect({ control, name, label }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl>
          <InputLabel>{label}</InputLabel>
          <Select {...field} label="Material" sx={{ width: 250 }}>
            <MenuItem value={"None"}>None</MenuItem>
            <MenuItem value={"Proposal"}>Proposal</MenuItem>
            <MenuItem value={"Sample pages"}>Sample pages</MenuItem>
            <MenuItem value={"Full ms."}>Full ms.</MenuItem>
            <MenuItem value={"Partial ms."}>Partial ms.</MenuItem>
          </Select>
        </FormControl>
      )}
    />
  );
}
