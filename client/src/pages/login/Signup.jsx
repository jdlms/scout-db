import axios from "axios";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../utils/consts";
import { Role } from "../Role";
import { Button, TextField } from "@mui/material";

export function Signup({ setSignupState, setLoginState }) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    role: Yup.string().required("Please refresh the page and choose a role"),
    // confirmPassword: Yup.string()
    //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //     .required('Confirm Password is required'),
  });

  // state for role-choosing button
  const [roleState, setRoleState] = useState(false);

  const { addUserToContext } = useContext(UserContext);
  const navigate = useNavigate();

  const spanClick = () => {
    setSignupState(false);
    setLoginState(true);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      role: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const request = await axios.post(BASE_URL + "signup", data, {
        withCredentials: true,
      });
      const response = await request.data;
      const userObjFromSession = response.user;
      addUserToContext(userObjFromSession);
      if (data.role === "Scout") {
        navigate("/scout-landing");
      }
      if (data.role === "Client") {
        navigate("/client/landing");
      }
    } catch (error) {
      // #todo snackbar error box
      console.error("There was an error!", error);
    }
  };

  return (
    <>
      <div
        style={{
          height: "25px",
        }}
      ></div>
      <form
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {roleState === true ? (
          <>
            <Controller
              name={"email"}
              control={control}
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
            <br />
            <Controller
              name={"password"}
              control={control}
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
          </>
        ) : (
          <div></div>
        )}
        {errors.role ? (
          <span style={{ color: "#d32f2f", fontSize: "0.75rem" }}>{errors.role.message}</span>
        ) : (
          <div></div>
        )}
        {!roleState ? (
          <Role control={control} setRoleState={setRoleState} errors={errors} />
        ) : (
          <div></div>
        )}
        <br />
        {roleState ? (
          <Button variant="contained" type="submit" sx={{ margin: "2px" }}>
            Sign up
          </Button>
        ) : (
          <div></div>
        )}
      </form>

      <p>
        Already have an account?{" "}
        <span style={{ color: "#1976d2", cursor: "pointer" }} onClick={spanClick}>
          Login
        </span>
      </p>
    </>
  );
}
