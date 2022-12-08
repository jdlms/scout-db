import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export function Login() {
  const { user, addUserToContext } = useContext(UserContext);

  const navigate = useNavigate();

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

  const onSubmitSignup = async (data) => {
    try {
      const request = await axios.post("http://localhost:5000/signup", data, {
        withCredentials: true,
      });
      const response = await request.data;
      const userObjFromSession = response.user;
      console.log(userObjFromSession);
      //do something with the response
      addUserToContext(userObjFromSession);

      navigate("/role");
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const onSubmitLogin = async (data) => {
    try {
      const sendLoginDetails = await axios.post("http://localhost:5000/login", data, {
        withCredentials: true,
      });
      const user = sendLoginDetails.data.user;

      console.log(user);

      addUserToContext(user);

      if (user.role === "Scout") {
        navigate("/scout-landing");
      }
      if (user.role === "Client") {
        navigate("/client-landing");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <h1>Scout DB</h1>
      <h4>Signup</h4>
      <form key={1} onSubmit={handleSubmit(onSubmitSignup)}>
        <input {...register("email", { required: true, minLength: 1 })} placeholder="email" />
        <input
          type="password"
          {...register("password", { required: true, minLength: 1 })}
          placeholder="password"
        />
        <button type="submit">Send</button>
      </form>
      <h4>Login</h4>
      <form key={2} onSubmit={handleSubmit2(onSubmitLogin)}>
        <input {...register2("email", { required: true, minLength: 1 })} placeholder="email" />
        <input
          type="password"
          {...register2("password", { required: true, minLength: 1 })}
          placeholder="password"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
