import React, { useEffect, useState } from "react";
import styles from "./Register.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../store/Reducers/userApiSlice";
import { setCredentials } from "../../store/Reducers/authSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);
  // const [register, isLoading] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  // useEffect(() => {
  //   if (userInfo) {
  //     navigation("/");
  //   }
  // }, []);

  const handleRegister = async (e) => {
    // e.preventDefault();
    // const res = await register({ name, email, password }).unwrap();
    // dispatch(setCredentials({ ...res }));
    // navigation("/myaccount");
  };

  return (
    <div className={styles.register}>
      <h1>REGISTER</h1>
      <form onSubmit={handleRegister}>
      <label htmlFor="name">YOUR NAME</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">YOUR EMAIL</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">YOUR PASSWORD</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.registerBtns}>
        <button>
        REGISTER
        </button>
        <button onClick={() => navigation("/login")}>LOGIN</button>
        </div>
        {/* <button type="submit" disabled={isLoading}>
          {isLoading ? "User creating" : "Register"}
        </button> */}
      </form>
    </div>
  );
};

export default Login;
