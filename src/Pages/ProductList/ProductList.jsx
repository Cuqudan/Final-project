import React, { useEffect, useState } from "react";
import HeaderContact from "../../Components/Header/HeaderContact";
import Footer from "../../Components/Footer/Footer";
import styles from "./ProductList.module.scss";
import ProductCart from "../../Components/ProductCards/ProductCart";
import axios from "axios";

const ProductList = () => {
  const [product, setproduct] = useState([]);
  const [search, setsearch] = useState("");
  const [sorttype, setsorttype] = useState("");
  useEffect(() => {
    if (sorttype) {
      setproduct((prevdata) =>
        [...prevdata].sort((a, b) => {
          if (sorttype === "abc") {
            return a.title.localeCompare(b.title);
          } else {
            return b.title.localeCompare(a.title);
          }
        })
      );
    }
  }, [sorttype]);
  const handleSearch = (event) => {
    setsearch(event.target.value);
  };

  const filteredproduct = product.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const getdata = () => {
    axios
      .get("https://dummyjson.com/products/?limit=15")
      .then((res) => setproduct(res.data.products));
  };
  useEffect(() => {
    getdata();
  }, []);
  const handlesort = (type) => {
    setsorttype(type);
  };
  return (
    <div className={styles.productlist}>
      <HeaderContact />
      <div className={styles.productlistContainer}>
        <div className={styles.productlistText}>
          <h1>PRODUCTS</h1>

          <div className={styles.productlistItems}>
            <div className={styles.filterbtns}>
              <button onClick={() => handlesort("abc")}>CLOTHES</button>
              <button onClick={() => handlesort("cba")}>SPARE PARTS</button>
            </div>
            <div className={styles.search}>
              <input
                type="text"
                onChange={handleSearch}
                value={search}
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className={styles.productlistCards}>
          {filteredproduct &&
            filteredproduct.map((item) => <ProductCart item={item} />)}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductList;
