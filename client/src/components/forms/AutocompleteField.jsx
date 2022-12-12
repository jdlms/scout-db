import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { Controller } from "react-hook-form";
import { useState } from "react";

export function AutocompleteField({ control, url, name, placehold, ...props }) {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <Controller
      name={"test"}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          filterSelectedOptions
          options={options}
          defaultValue={placehold}
          getOptionLabel={(option) => option}
          // value={selectedItems}
          onChange={(e, newValue) => {
            setSelectedItems(newValue);
            onChange(newValue);
          }}
          renderInput={(params) => <TextField {...params} {...props} />}
        />
      )}
    />
  );
}

//if options are an array of strings you need  getOptionLabel={(option) => option}.
//if options are array of objects you need value={selectedItems.title} & getOptionLabel={(option) => option.title}

// const options = [{ title: "Big Fish" }, { title: "Little Fish" }, { title: "Littler Fish" }];

const options = ["Harry", "Sally", "Aylin", "Felina"];

//     <Controller
//       name="autocomplete"
//       control={control}
//       onChange={([, data]) => data}
//       // onChange={([e, data, reason]) => handleChange(e, data, reason)}
//       // onInputChange={(e, data) => handleInputChange(e, data)}
//       defaultValue={""}
//       render={({ onChange, ...props }) => (
//         <Autocomplete
//           id="autocomplete"
//           freeSolo
//           autoSelect
//           open={open}
//           onOpen={() => {
//             setOpen(true);
//           }}
//           onClose={() => {
//             setOpen(false);
//           }}
//           loading={loading}
//           options={options}
//           renderInput={(params) => (
//             <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
//           )}
//         />
//       )}

//     />
//   );
// }
