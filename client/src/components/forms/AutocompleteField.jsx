import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";

export function AutocompleteField({ onChange, control, url, name, label }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const request = await axios.get("http://localhost:5000/search/" + url, {
        withCredentials: true,
      });
      let authorsArray = request.data;

      if (active) {
        setOptions([...authorsArray]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Controller
      render={({ props }) => (
        <Autocomplete
          id={name}
          sx={{ width: 300 }}
          freeSolo={true}
          defaultValue=""
          clearOnBlur={false}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option, value) => option.author === value.author}
          options={options}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
          onChange={(_, data) => props.onChange(data)}
        />
      )}
      onChange={([, data]) => data}
      name={name}
      control={control}
    />
  );
}
