import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";

export function AutocompleteField({ onChange: ignored, control, url, name, label }) {
  const [options, setOptions] = useState([]);
  const [open, setOpen] = useState(false);
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
      console.log(requestedData);
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
    // <Controller
    //   render={({ props }) => (
    //     <Autocomplete
    //       id={name}
    //       sx={{ width: 300 }}
    //       freeSolo
    //       autoSelect
    //       open={open}
    //       onOpen={() => {
    //         setOpen(true);
    //       }}
    //       onClose={() => {
    //         setOpen(false);
    //       }}
    //       isOptionEqualToValue={(option, value) => option === value}
    //       options={options}
    //       loading={loading}
    //       renderInput={(params) => (
    //         <TextField
    //           {...params}
    //           label={label}
    //           InputProps={{
    //             ...params.InputProps,
    //             endAdornment: (
    //               <>
    //                 {loading ? <CircularProgress color="inherit" size={20} /> : null}
    //                 {params.InputProps.endAdornment}
    //               </>
    //             ),
    //           }}
    //         />
    //       )}
    //     />
    //   )}
    //   onChange={([, data]) => data}
    //   name={name}
    //   control={control}
    // />

    <Controller
      name="autocomplete"
      control={control}
      onChange={([, data]) => data}
      // onChange={([e, data, reason]) => handleChange(e, data, reason)}
      // onInputChange={(e, data) => handleInputChange(e, data)}
      defaultValue={""}
      render={({ onChange, ...props }) => (
        <Autocomplete
          id="autocomplete"
          freeSolo
          autoSelect
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          loading={loading}
          options={options}
          renderInput={(params) => (
            <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
          )}
        />
      )}
     
    />
  );
}
