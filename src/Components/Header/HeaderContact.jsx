import React from "react";
import styles from "./HeaderContact.module.scss";
import { PiDotsNine } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
const HeaderContact = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div className={styles.headerContact}>
        <div className={styles.container}>
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/borko-logo-black.png"
            alt="logo"
          />
          <div className={styles.headerContactItems}>
            <nav>
              <ul>
                <li>
                  <a href="">HOME</a>
                  <div className={styles.homeDropdown}>
                    <a href="" onClick={() => navigation("/")}>
                      MAIN HOME
                    </a>
                    <a href="" onClick={() => navigation("/myaccount")}>
                      MY ACCOUNT
                    </a>
                    <a href="" onClick={() => navigation("/cart")}>
                      CART
                    </a>
                  </div>
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
                <li>
                  <a href="">PORTFOLIO</a>
                </li>
                <li>
                  <a href="">BLOG</a>
                </li>
                <li>
                  <a href="">SHOP</a>
                  <div className={styles.shopDropdown}>
                    <a href="" onClick={() => navigation("/productlist")}>
                      PRODUCT LIST
                    </a>
                    <a href="" onClick={() => navigation("/productsingle")}>
                      PRODUCT SINGLE
                    </a>
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
        <div className={styles.headerContactMobileNavbar}>
          <nav>
            <ul>
              <li>
                <a href="">HOME</a>
                <div className={styles.homeDropdown}>
                  <a href="" onClick={() => navigation("/")}>
                    MAIN HOME
                  </a>
                  <a href="" onClick={() => navigation("/myaccount")}>
                    MY ACCOUNT
                  </a>
                  <a href="" onClick={() => navigation("/cart")}>
                    CART
                  </a>
                </div>
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
              <li>
                <a href="">PORTFOLIO</a>
              </li>
              <li>
                <a href="">BLOG</a>
              </li>
              <li>
                <a href="">SHOP</a>
                <div className={styles.shopDropdown}>
                  <a href="" onClick={() => navigation("/productlist")}>
                    PRODUCT LIST
                  </a>
                  <a href="" onClick={() => navigation("/productsingle")}>
                    PRODUCT SINGLE
                  </a>
                </div>
              </li>
              <li>
                <a href="">LANDING</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderContact;
