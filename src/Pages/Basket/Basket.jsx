import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import styles from "../Home/Home.module.scss";
import axios from "axios";
import HeaderContact from "../../Components/Header/HeaderContact";
import ProductBasket from "../../Components/ProductCards/ProductBasket";
const Basket = () => {
  const [product, setproduct] = useState([]);
  const getdata = () => {
    axios
      .get("https://dummyjson.com/products/?limit=9")
      .then((res) => setproduct(res.data.products));
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className={styles.home}>
      <HeaderContact />
      <div className={styles.homeContainer}>
        <div className={styles.homeText}>
          <h1>
            BASKET
          </h1>
          <p>YOUR ORDERS</p>
        </div>
        <div className={styles.homeCards}>
          {product && product.map((item) => <ProductBasket item={item} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
