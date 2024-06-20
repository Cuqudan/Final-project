import React from "react";
import styles from "./Register.module.scss";
import { useFormik } from "formik";
const Login = () => {
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          password: "",
        },
        onSubmit: (values) => {
          formik.handleReset()
        },
      });
  return (
    <div className={styles.register}>
        <h1>REGISTER</h1>
       <form onSubmit={formik.handleSubmit}>
            <label htmlFor="Name">YOUR NAME</label>
            <input
              id="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <label htmlFor="email">YOUR EMAIL</label>
            <input
              id="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label htmlFor="password">YOUR PASSWORD</label>
            <input
              id="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <button type="submit">REGISTER</button>
          </form>
    </div>
  );
};

export default Login;
