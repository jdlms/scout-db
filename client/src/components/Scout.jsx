import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { MuiAutocomplete } from "./MuiAutocomplete";

export function Scout() {
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: "",
      author: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/post", data);
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

        <MuiAutocomplete control={control} />

        <input {...register("title", { required: true, minLength: 1 })} placeholder="Last name" />
        <input
          {...register("title", { required: true, minLength: 1 })}
          placeholder="Submission status"
        />
        <input {...register("title", { required: true, minLength: 1 })} placeholder="Agency" />
        <input {...register("title", { required: true, minLength: 1 })} placeholder="Publisher" />
        <input {...register("title", { required: true, minLength: 1 })} placeholder="Editor" />
        <input {...register("title", { required: true, minLength: 1 })} placeholder="Rights sold" />
        <input {...register("title", { required: true, minLength: 1 })} placeholder="Details" />
        <input
          {...register("title", { required: true, minLength: 1 })}
          placeholder="Current material"
        />
        <input
          {...register("title", { required: true, minLength: 1 })}
          placeholder="Internal notes"
        />
        <br />
        <input type="submit" onClick={reset()} />
      </form>
    </div>
  );
}

//confidential radio option needed
