import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";

export function AutocompleteForm({ control, url, name, label }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    (async () => {
      const requestedData = await axios.get(BASE_URL + "search/" + url, {
        withCredentials: true,
      });
      setOptions(requestedData.data);
    })();
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={options}
          freeSolo
          autoSelect
          sx={{ width: 300 }}
          onChange={(_, data) => {
            field.onChange(data);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {/* {options.length === 0 ? <CircularProgress color="inherit" size={10} /> : null} */}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      )}
    />
  );
}
