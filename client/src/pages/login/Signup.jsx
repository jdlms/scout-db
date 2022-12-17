import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export function Signup() {
  const { user, addUserToContext } = useContext(UserContext);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitSignup = async (data) => {
    try {
      const request = await axios.post(BASE_URL + "signup", data, {
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

  return (
    <div>
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
    </div>
  );
}
