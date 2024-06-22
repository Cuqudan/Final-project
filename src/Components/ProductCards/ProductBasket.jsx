import React from "react";
import styles from "./ProductCart.module.scss";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const ProductBasket = ({item}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={item.thumbnail} alt="photo" />
        <button>
          REMOVE <HiOutlineArrowLongRight size={20} />
        </button>
      </div>
      <div className={styles.cardText}>
        <p>{item.description}</p>
        <p>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </p>
      </div>
      <div className={styles.cardText}>
        <h6>{item.title}</h6>
        <h6>€{item.price}</h6>
      </div>
    </div>
  );
};

export default ProductBasket;
