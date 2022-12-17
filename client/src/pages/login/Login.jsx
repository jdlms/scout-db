import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export function Login() {
  const { user, addUserToContext } = useContext(UserContext);
  const navigate = useNavigate();

  const { register: register2, handleSubmit: handleSubmit2 } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitLogin = async (data) => {
    try {
      const sendLoginDetails = await axios.post(BASE_URL + "login", data, {
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
