import React from "react";
import styles from "../cssFiles/Header.module.css"; // Import CSS module
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import { useGlobalcontext } from "../context/globalContext";

function Header() {
  const { donor,needy,setLogout } = useGlobalcontext();
  // const handleLoginClick = () => {
  //   window.open("/login", "_blank");
  // };

  return (
    <div>
      <div className={styles.topNavbar}>
        <div className={styles.left}>
          <div className={styles.call}>
            <i className="fa fa-phone-alt"></i>
            <span>010129127959</span>
          </div>
          <div className={styles.email}>
            <i className="fa fa-envelope"></i>
            <span> givingcircle@gmail.com</span>
          </div>
        </div>
        <div className={styles.right}>
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>

      <div className={styles.bottomNav}>
        <h1>GivingCircle</h1>

        <ul className={styles.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
        <li>
            <Link to="/Shop"> Shop</Link>
          </li>
          <li className={styles.Dropdown}>
            <a className={styles.dropptn}>categories</a>
            <div className={styles.drobdowncont}>
              <a>Food</a>
              <a>Clothes</a>
              <a>Books</a>
              <a>Home </a>
              <a>Devices</a>
              <a>Toys</a>
            </div>
          </li>
            <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <a className={styles.cta}>
          <Link to="/profile"  className={styles.button1}>Donate</Link>
        </a>
        <div className={styles.ls}>
         {donor||needy ?  <a onClick={()=>setLogout()} > Sign out</a>:<><Link to={"/login"}>LOGIN</Link>   <a>SING UP</a></>} 
        
        </div>
      </div>
    </div>
  );
}

export default Header;
