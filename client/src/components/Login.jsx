import axios from "axios";
import { useForm } from "react-hook-form";

//what is formState,

export function Login() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register: register2, handleSubmit: handleSubmit2 } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await axios.post("http://localhost:5000/signup", data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <h1>Scout DB</h1>
      <h4>Signup</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register2("email", { required: true, minLength: 1 })} placeholder="email" />
        <input
          type="password"
          {...register2("password", { required: true, minLength: 1 })}
          placeholder="password"
        />
        <button type="submit">Send</button>
      </form>
      <h4>Login</h4>
      <form onSubmit={handleSubmit2(onSubmit)}>
        <input {...register("email", { required: true, minLength: 1 })} placeholder="email" />
        <input
          type="password"
          {...register("password", { required: true, minLength: 1 })}
          placeholder="password"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
