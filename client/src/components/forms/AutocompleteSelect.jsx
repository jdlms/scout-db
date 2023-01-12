import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/consts";

export function AutocompleteSelect({ control, url, name, label }) {
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
          sx={{ width: 300 }}
          onChange={(_, data) => {
            field.onChange(data);
          }}
          isOptionEqualToValue={(option, value) =>
            value === undefined || value === "" || option.id === value.id
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="outlined"
              InputProps={{
                ...params.InputProps,

              }}
            />
          )}
        />
      )}
    />
  );
}
