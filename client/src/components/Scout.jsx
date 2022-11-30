import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { MuiAutocomplete } from "./MuiAutocomplete";

export function Scout() {
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: "",
      firstName: "",
      lastName: "",
      submissionStatus: "",
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
      await axios.post("http://localhost:5000/post", data);
      //for demo purposes only, change this reset call!
      // reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
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
        <input {...register("agency", { required: false })} placeholder="Agency" />
        <br />
        <input {...register("publisher", { required: false })} placeholder="Publisher" />
        <br />
        <input {...register("editor", { required: false })} placeholder="Editor" />
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
