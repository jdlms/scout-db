import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../utils/consts";
import { Fields } from "./Fields";

export function Signup({ setSignupState, setLoginState }) {
  const { user, addUserToContext } = useContext(UserContext);
  const navigate = useNavigate();

  const spanClick = () => {
    setSignupState(false);
    setLoginState(true);
  };

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
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const request = await axios.post(BASE_URL + "signup", data, {
        withCredentials: true,
      });
      const response = await request.data;
      const userObjFromSession = response.user;
      //do something with the response
      addUserToContext(userObjFromSession);

      navigate("/role");
    } catch (error) {
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
      <Fields onSubmit={onSubmit} btnText={"Sign up"} />
      <p>
        Already have an account?{" "}
        <span style={{ color: "#1976d2", cursor: "pointer" }} onClick={spanClick}>
          Login
        </span>
      </p>
    </>
  );
}
