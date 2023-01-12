import axios from "axios";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import { BASE_URL } from "../../utils/consts";

export function Login() {
  const { user, addUserToContext } = useContext(UserContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    // confirmPassword: Yup.string()
    //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //     .required('Confirm Password is required'),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
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
        navigate("/client/landing");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <h4>Login</h4>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        {/* <input {...register("email", { required: true, minLength: 1 })} placeholder="email" />
        <div className="invalid-feedback">{errors.email?.message}</div> */}
        <Controller
          name={"email"}
          control={control}
          // render={({ field: { onChange, value } }) => (
          render={({ field: { onChange, value, ref }, fieldState }) => (
            <TextField
              onChange={onChange}
              value={value}
              ref={ref}
              error={errors.email ? true : false}
              helperText={errors.email ? errors.email.message : undefined}
              label={"Email"}
              sx={{ width: 300 }}
            />
          )}
        />
        <Controller
          name={"password"}
          control={control}
          // render={({ field: { onChange, value } }) => (
          render={({ field: { onChange, value, ref }, fieldState }) => (
            <TextField
              onChange={onChange}
              value={value}
              ref={ref}
              type={"password"}
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password.message : undefined}
              label={"Password"}
              sx={{ width: 300 }}
            />
          )}
        />

        <Button variant="contained" type="submit">Send</Button>
      </form>
    </div>
  );
}
