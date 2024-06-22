import React, { useState } from "react";
import styles from "./Header.module.scss";
import { PiDotsNine } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
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
              <li onClick={() => navigation("/")}>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">PAGES</a>
                <div className={styles.pagesDropdown}>
                  <a href="" onClick={() => navigation("/aboutme")}>
                    ABOUT ME
                  </a>
                  <a href="" onClick={() => navigation("/aboutus")}>
                    ABOUT US
                  </a>
                  <a href="" onClick={() => navigation("/contact")}>
                    CONTACT
                  </a>
                </div>
              </li>
              <li onClick={() => navigation("/wishlist")}>
                <a href="">FAVORITES</a>
              </li>
              <li onClick={() => navigation("/basket")}>
                <a href="">CART</a>
              </li>
              <li onClick={() => navigation("/productlist")}>
                <a href="">SHOP</a>
              </li>
              <li onClick={() => navigation("/myaccount")}>
                <a href="">PROFILE</a>
              </li>
            </ul>
          </nav>
          <input type="text" placeholder="SEARCH" />
        </div>
        <button onClick={toggleDropdown}>
          <PiDotsNine />
        </button>
      </div>
      {isOpen && (
        <div className={styles.headerMobileNavbar}>
          <nav>
            <ul>
              <li onClick={() => navigation("/")}>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">PAGES</a>
                <div className={styles.pagesDropdown}>
                  <a href="" onClick={() => navigation("/aboutme")}>
                    ABOUT ME
                  </a>
                  <a href="" onClick={() => navigation("/aboutus")}>
                    ABOUT US
                  </a>
                  <a href="" onClick={() => navigation("/contact")}>
                    CONTACT
                  </a>
                </div>
              </li>
              <li onClick={() => navigation("/wishlist")}>
                <a href="">FAVORITES</a>
              </li>
              <li onClick={() => navigation("/basket")}>
                <a href="">CART</a>
              </li>
              <li onClick={() => navigation("/productlist")}>
                <a href="">SHOP</a>
              </li>
              <li onClick={() => navigation("/myaccount")}>
                <a href="">PROFILE</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
