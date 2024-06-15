import React, { useState } from "react";
import styles from "./Header.module.scss";
import { PiDotsNine } from "react-icons/pi";

const Header = () => {

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img
          src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/borko-logo-shop-home.png"
          alt="logo"
        />
        <div className={styles.headerItems}>
          <nav>
            <ul>
              <li>
                <a href="">HOME</a>
                <div className={styles.homeDropdown}>
                  <a href="">MAIN HOME</a>
                  <a href="">MY ACCOUNT</a>
                  <a href="">CART</a>
                </div>
              </li>
              <li>
                <a href="">PAGES</a>
                <div className={styles.pagesDropdown}>
                  <a href="">ABOUT ME</a>
                  <a href="">ABOUT US</a>
                  <a href="">CONTACT</a>
                </div>
              </li>
              <li>
                <a href="">PORTFOLIO</a>
              </li>
              <li>
                <a href="">BLOG</a>
              </li>
              <li>
                <a href="">SHOP</a>
                <div className={styles.shopDropdown}>
                  <a href="">PRODUCT LIST</a>
                  <a href="">PRODUCT SINGLE</a>
                </div>
              </li>
              <li>
                <a href="">LANDING</a>
              </li>
            </ul>
          </nav>
          <input type="text" placeholder="SEARCH" />
        </div>
        <button>
            <PiDotsNine />
          </button>
      </div>
      <div className={styles.headerMobileNavbar}>
        <nav>
          <ul>
            <li>
              <a href="">HOME</a>
              <div className={styles.homeDropdown}>
                <a href="">MAIN HOME</a>
                <a href="">MY ACCOUNT</a>
                <a href="">CART</a>
              </div>
            </li>
            <li>
              <a href="">PAGES</a>
              <div className={styles.pagesDropdown}>
                <a href="">ABOUT ME</a>
                <a href="">ABOUT US</a>
                <a href="">CONTACT</a>
              </div>
            </li>
            <li>
              <a href="">PORTFOLIO</a>
            </li>
            <li>
              <a href="">BLOG</a>
            </li>
            <li>
              <a href="">SHOP</a>
              <div className={styles.shopDropdown}>
                <a href="">PRODUCT LIST</a>
                <a href="">PRODUCT SINGLE</a>
              </div>
            </li>
            <li>
              <a href="">LANDING</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
