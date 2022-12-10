import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { AutocompleteField } from "../components/forms/AutocompleteField";
import { Text } from "../components/forms/Text";

export function AddTitle() {
  const { user, addUserToContext } = useContext(UserContext);

  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: "",
      authorFirstName: "",
      authorLastName: "",
      submissionStatus: "",
      confidential: "",
      agency: "",
      publisher: "",
      editor: "",
      rightsSold: "",
      details: "",
      currentMaterial: "",
      internalNotes: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/add-title", data);
      //for demo purposes only, change this reset call!
      // reset();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {console.log(user)}
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />

        <AutocompleteField control={control} name={"title"} url={"title"} label={"Title"} />
        <br />
        <AutocompleteField
          control={control}
          name={"authorFirstName"}
          url={"author-first-name"}
          label={"First name"}
        />
        <AutocompleteField
          control={control}
          name={"authorLastName"}
          url={"author-last-name"}
          label={"Last name"}
        />
        <br />
        <AutocompleteField control={control} name={"agency"} url={"agency-name"} label={"Agency"} />
        <br />
        <AutocompleteField
          control={control}
          name={"publisher"}
          url={"publisher-name"}
          label={"Publisher"}
        />
        <AutocompleteField control={control} name={"editor"} url={"editor-name"} label={"Editor"} />
        <br />
        <Text control={control} name={"details"} label={"Details"} />
        <br />
        <Text control={control} name={"rightsSold"} label={"Rights sold"} />
        <br />

        <input
          {...register("currentMaterial", { required: true, minLength: 1 })}
          placeholder="Current material"
        />
        <br />
        <input {...register("internalNotes", { required: false })} placeholder="Internal notes" />
        <br />
        <input
          {...register("submissionStatus", { required: true, minLength: 1 })}
          placeholder="Submission status"
        />
        <br />
        <input
          {...register("confidential", { required: true, minLength: 1 })}
          placeholder="Confidential?"
        />
        <button type="submit">Add title</button>
      </form>
    </div>
  );
}

//#todo add imprint
//@todo make rights sold field able to accept publisher names and save them in correct territories, auto search each time after comma?
