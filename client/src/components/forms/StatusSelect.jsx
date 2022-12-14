import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";

export function StatusSelect({ control, name, label }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl>
          <InputLabel>Status</InputLabel>
          <Select {...field} label="Status" sx={{ width: 250 }}>
            <MenuItem value={"In development"}>In development</MenuItem>
            <MenuItem value={"On submission"}>On submission</MenuItem>
            <MenuItem value={"In auction"}>In auction</MenuItem>
            <MenuItem value={"Sold"}>Sold</MenuItem>
            <MenuItem value={"Sold"}>Published</MenuItem>
            <MenuItem value={"International submission"}>International submission</MenuItem>
          </Select>
        </FormControl>
      )}
    />
  );
}
// ["In development", "On submission", "In auction", "Sold", "International submission"],
