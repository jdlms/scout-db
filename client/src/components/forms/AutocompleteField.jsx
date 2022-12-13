import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";

export function AutocompleteField({ onChange: ignored, control, url, name, label }) {
  const [options, setOptions] = useState([
    "Carol Janeway",
    "Emmet Merlin",
    "Jane Williams",
    "Tony Judt",
  ]);
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const loading = open && options.length === 0;

  // useEffect(() => {
  //   let active = true;

  //   if (!loading) {
  //     return undefined;
  //   }

  //   (async () => {
  //     const request = await axios.get("http://localhost:5000/search/" + url, {
  //       withCredentials: true,
  //     });
  //     let requestedData = request.data;
  //     console.log(request.data);
  //     if (active) {
  //       setOptions(requestedData.map((val) => ({ val })));
  //     }
  //   })();

  //   return () => {
  //     active = false;
  //   };
  // }, [loading]);

  // useEffect(() => {
  //   if (!open) {
  //     setOptions([]);
  //   }
  // }, [open]);

  console.log(options);

  return (
    <Controller
      name={name}
      control={control}
      // render={({ field: { onChange, value } }) => (

      render={({ field }) => {
        return <MuiAutoComplete {...{ field, url, label }} />;
      }}
    />
  );
}

function MuiAutoComplete({ field, url, label }) {
  const [options, setOptions] = useState([
    "Carol Janeway",
    "Emmet Merlin",
    "Jane Williams",
    "Tony Judt",
  ]);

  useEffect(() => {
    (async () => {
      const request = await axios.get("http://localhost:5000/search/" + url, {
        withCredentials: true,
      });
      let requestedData = request.data;
      console.log(request.data);

      setOptions(requestedData.map((label) => ({ label })));
    })();
  }, []);
  console.log(field);
  return (
    <Autocomplete
      {...field}
      // getOptionLabel={(option) => {
      //   console.log(option);
      //   return option.label || "";
      // }}
      // renderOption={(option) => <span>{option.label || ""}</span>}
      options={options.map(({ label }) => label)}
      sx={{ width: 300 }}
      freeSolo
      onChange={(_, data) => field.onChange(data)}
      // autoSelect
      // open={open}
      // onOpen={() => {
      //   setOpen(true);
      // }}
      // onClose={() => {
      //   setOpen(false);
      // }}
      // onChange={(e, newValue) => {
      //   onChange(newValue);
      // }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          InputProps={{
            ...params.InputProps,
            // endAdornment: (
            //   <>
            //     {loading ? <CircularProgress color="inherit" size={20} /> : null}
            //     {params.InputProps.endAdornment}
            //   </>
            // ),
          }}
        />
      )}
    />
  );
}
