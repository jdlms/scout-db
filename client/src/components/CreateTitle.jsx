import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { MuiAutocomplete } from "./MuiAutocomplete";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function CreateTitle() {
  const { user, addUserToContext } = useContext(UserContext);

  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: "",
      firstName: "",
      lastName: "",
      submissionStatus: "",
      confidential: "",
      agency: "",
      publisher: "",
      editorFirstName: "",
      editorLastName: "",
      rightsSold: "",
      details: "",
      currentMaterial: "",
      internalNotes: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/create-new-title", data);
      //for demo purposes only, change this reset call!
      // reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {console.log(user)}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title", { required: true, minLength: 1 })}
          placeholder="Book/Proposal title"
        />
        <br />
        {/* <MuiAutocomplete control={control} /> */}
        <input {...register("firstName", { required: false })} placeholder="First Name" />
        <br />
        <input
          {...register("lastName", { required: true, minLength: 1 })}
          placeholder="Last name"
        />
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
        <br />
        <input {...register("agency", { required: false })} placeholder="Agency" />
        <br />
        <input {...register("publisher", { required: false })} placeholder="Publisher" />
        <br />
        <input
          {...register("editorFirstName", { required: false })}
          placeholder="Editor first name"
        />
        <br />
        <input
          {...register("editorLastName", { required: false })}
          placeholder="Editor last name"
        />
        <br />
        <input {...register("rightsSold", { required: false })} placeholder="Rights sold" />
        <br />
        <input {...register("details", { required: true, minLength: 1 })} placeholder="Details" />
        <br />
        <input
          {...register("currentMaterial", { required: true, minLength: 1 })}
          placeholder="Current material"
        />
        <br />
        <input {...register("internalNotes", { required: false })} placeholder="Internal notes" />
        <br />
        <button type="submit">Create title</button>
      </form>
    </div>
  );
}

//confidential radio option needed
//agent needed
//imprint needed
