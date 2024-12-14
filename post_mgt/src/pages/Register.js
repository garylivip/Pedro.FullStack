import React, {useContext} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

function Register() {
  const initialValues = { username: "", password: "" };
  const validationSchema = Yup.object({
    username: Yup.string().min(3).max(15).required("Required"),
    password: Yup.string().min(3).max(20).required("Required"),
  });
  const { setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:4000/users", values);
      localStorage.setItem("token", response.data);
      setAuthState(true);
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.error("There was an error registering!", error);
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="username">Username</label>
          <Field
            id="username"
            type="text"
            name="username"
            placeholder="(Ex. Username)"
          />
          <ErrorMessage name="username" component="span" />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            type="password"
            name="password"
            placeholder="(Ex. Password)"
          />
          <ErrorMessage name="password" component="span" />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
