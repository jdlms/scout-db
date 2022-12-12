import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";

export function AutocompleteField({ onChange: ignored, control, url, name, label }) {
  const [options, setOptions] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
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
      let requestedData = request.data;
      console.log(request.data);
      if (active) {
        setOptions([...requestedData]);
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
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          getOptionLabel={(option) => option}
          options={options}
          // value={selectedItems}
          sx={{ width: 300 }}
          freeSolo
          autoSelect
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          onChange={(e, newValue) => {
            setSelectedItems(newValue);
            onChange(newValue);
          }}
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
        />
      )}
    />

    //     <Controller
    //       name="autocomplete"
    //       control={control}
    //       defaultValue={""}
    //       render={({ onChange, value }) => (
    //         <Autocomplete
    //           options={options}
    //           getOptionLabel={(option) => option}
    //           value={selectedItems}
    //           onChange={(e, newValue) => {
    //             setSelectedItems(newValue);
    //             onChange(newValue);
    //           }}
    //           freeSolo
    //           autoSelect
    //           open={open}
    //           onOpen={() => {
    //             setOpen(true);
    //           }}
    //           onClose={() => {
    //             setOpen(false);
    //           }}
    //           renderInput={(params) => (
    //             <TextField {...params} label={label} margin="normal" variant="outlined" />
    //           )}
    //         />
    //       )}
    //     />
    //   );
    // }
  );
}
