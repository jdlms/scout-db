import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";

export function Fields({ onSubmit }) {
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
  
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <br />
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
        <br />
        <Button variant="contained" type="submit" sx={{ margin: "15px" }}>
          Send
        </Button>
      </form>
    </div>
  );
}
