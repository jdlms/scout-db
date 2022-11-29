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
        <input {...register("title", { required: true, minLength: 1 })} placeholder="Title" />
        <label>Author</label>
        <MuiAutocomplete control={control} />
        <input type="submit" onClick={reset()} />
      </form>
    </div>
  );
}
