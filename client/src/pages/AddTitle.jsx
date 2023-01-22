import { useForm } from "react-hook-form";
import axios from "axios";
import { AutocompleteForm } from "../components/forms/AutocompleteForm";
import { Text } from "../components/forms/Text";
import { MaterialSelect } from "../components/forms/MaterialSelect";
import { MultilineText } from "../components/forms/MultilineText";
import { StatusSelect } from "../components/forms/StatusSelect";
import { AutocompleteSelect } from "../components/forms/AutocompleteSelect";
import { SwitchConfidential } from "../components/forms/SwitchConfidential";
import { Box, Button, FormControl, FormGroup } from "@mui/material";
import { BASE_URL } from "../utils/consts";
import { forwardRef, useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const defaultValues = {
  title: "",
  authorFirstName: "",
  authorLastName: "",
  agency: "",
  publisher: "",
  editor: "",
  details: "",
  rightsSold: "",
  currentMaterial: "",
  internalNotes: "",
  status: "",
  confidential: false,
  addToReport: "",
  reported: false,
};

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function AddTitle() {
  const [open, setOpen] = useState(false);

  const { checkForUser } = useContext(UserContext);
  checkForUser;

  const { register, handleSubmit, control, reset } = useForm({
    defaultValues,
  });

  const onSubmit = async (data) => {
    try {
      await axios.post(BASE_URL + "titles/add", data, {
        withCredentials: true,
      });

      reset(defaultValues);
      setOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <div style={{ width: "95%", height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
          height="100%"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <FormControl margin="dense">
                <AutocompleteForm control={control} name={"title"} url={"title"} label={"Title"} />
              </FormControl>
            </div>

            <div>
              <FormControl margin="dense">
                <FormGroup row>
                  <AutocompleteForm
                    control={control}
                    name={"authorFirstName"}
                    url={"author-first-name"}
                    label={"First name"}
                  />

                  <AutocompleteForm
                    control={control}
                    name={"authorLastName"}
                    url={"author-last-name"}
                    label={"Last name"}
                  />
                </FormGroup>
              </FormControl>
            </div>

            <div>
              <FormControl margin="dense">
                <FormGroup row>
                  <FormGroup>
                    <AutocompleteForm
                      control={control}
                      name={"agency"}
                      url={"agency-name"}
                      label={"Agency"}
                    />
                    <Text control={control} name={"rightsSold"} label={"Rights sold"} />
                  </FormGroup>
                  <FormGroup>
                    <AutocompleteForm
                      control={control}
                      name={"publisher"}
                      url={"publisher-name"}
                      label={"Publisher"}
                    />

                    <AutocompleteForm
                      control={control}
                      name={"editor"}
                      url={"editor-name"}
                      label={"Editor"}
                    />
                  </FormGroup>
                </FormGroup>
              </FormControl>
            </div>
            <div>
              <FormGroup>
                <div>
                  <FormControl margin="dense">
                    <MultilineText
                      rows={10}
                      control={control}
                      name={"details"}
                      label={"Description"}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl margin="dense">
                    <FormGroup row>
                      <StatusSelect control={control} name={"status"} label={"Status"} />
                      <AutocompleteSelect
                        control={control}
                        name={"addToReport"}
                        url={"unreleased-reports"}
                        label={"Add to Report"}
                      />
                    </FormGroup>
                  </FormControl>
                </div>
              </FormGroup>
            </div>

            <div>
              <FormControl margin="dense">
                <FormGroup row>
                  <MaterialSelect control={control} name={"currentMaterial"} label={"Material"} />

                  <fieldset
                    style={{
                      display: "inline",
                      borderColor: "rgba(255, 255, 255, 0.12)",
                      borderWidth: "1.5px",
                      borderRadius: "2px",
                    }}
                  >
                    <legend style={{ color: "#676767" }}>Confidential</legend>
                    <SwitchConfidential
                      control={control}
                      name={"confidential"}
                      label={"Confidential"}
                    />
                  </fieldset>
                </FormGroup>
              </FormControl>
            </div>
            <div>
              <FormControl margin="dense">
                <MultilineText control={control} name={"internalNotes"} label={"Internal notes"} />
              </FormControl>
            </div>
            <div>
              <FormControl margin="dense">
                <Button type="submit" size="large" variant="outlined">
                  Add
                </Button>
              </FormControl>
            </div>
          </form>

          {open === true ? (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                This is a success message!
              </Alert>
            </Snackbar>
          ) : (
            ""
          )}
        </Box>
      </div>
    </div>
  );
}

//#todo add imprint
//#todo make rights sold field able to accept publisher names and save them in correct territories, auto search each time after comma?
