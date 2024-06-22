import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import styles from "../Home/Home.module.scss";
import axios from "axios";
import HeaderContact from "../../Components/Header/HeaderContact";
import ProductWishlist from "../../Components/ProductCards/ProductWishlist";

const Wishlist = () => {
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
          <h1>FAVORITES</h1>
          <p>YOUR FAVORITE PRODUCTS</p>
        </div>
        <div className={styles.homeCards}>
          {product && product.map((item) => <ProductWishlist item={item} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
