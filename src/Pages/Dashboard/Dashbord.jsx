import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import HeaderContact from "../../Components/Header/HeaderContact";
import SectionDashboard from "../../Components/DashboardSections/SectionDashboard";
import axios from "axios";
import styles from "../Home/Home.module.scss";
import UserCard from "../../Components/UsersCard/UserCard";
import { useSelector } from "react-redux";
const Dashbord = () => {
  const [users, setUsers] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);

  const getUser = () => {
    axios
      .get("http://localhost:8000/api/users/")
      .then((res) => setUsers(res.data.allUsers));
  };

  useEffect(() => {
    getUser();
  }, []);

  const removeuser = (_id) => {
    axios.delete(`http://localhost:8000/api/users/${_id}`);
    setTimeout(() => {
      getUser()
  }, 500);
  };
  return (
    <div className={styles.home}>
      <HeaderContact />
      <SectionDashboard />
      <div className={styles.homeContainer}>
        <div className={styles.homeCards}>
          {users &&
            users.map((userInfo) => (
              <UserCard
                userInfo={userInfo}
                removeUser={() => removeuser(userInfo._id)}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashbord;
