import React from 'react'
import styles from "./Login.module.scss";
import { useFormik } from "formik";

const Login = () => {
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        onSubmit: (values) => {
          formik.handleReset()
        },
      });
  return (
    <div className={styles.login}>
        <h1>LOGIN</h1>
       <form onSubmit={formik.handleSubmit}>
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
            <button type="submit">LOGIN</button>
          </form>
    </div>
  )
}

export default Login