import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home_with_css.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; //animation to 10%
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import photo1 from "./img/19.png";
import photo2 from "./img/20.png";
import photo3 from "./img/21.png";
import photo4 from "./img/24.png";
import photo5 from "./img/06.png";
import photo6 from "./img/07.png";
import photo7 from "./img/08.png";
import photo8 from "./img/09.png";
import photo9 from "./img/25.png";
import photo10 from "./img/26.png";
import photo11 from "./img/10.png";
import photo12 from "./img/11.png";
import photo13 from "./img/22.png";
import photo14 from "./img/13.png";
import photo15 from "./img/14.png";
import photo16 from "./img/01.png";
import photo17 from "./img/02.png";
import photo18 from "./img/03.png";
import photo19 from "./img/04.png";
import photo20 from "./img/05.png";
import photo21 from "./img/15.png";
import photo22 from "./img/16.png";
import photo23 from "./img/17.png";
import photo24 from "./img/18.png";

const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num;
};

const Counter = ({ end, duration }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const step = () => {
            start += increment;
            if (start < end) {
              ref.current.textContent = formatNumber(Math.ceil(start));
              requestAnimationFrame(step);
            } else {
              ref.current.textContent = formatNumber(end);
            }
          };
          step();
          observer.unobserve(ref.current);
        }
      },
      { threshold: 1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="num font1">
      0
    </div>
  );
};

const Home = () => {
  const causesRef = useRef(null);
  const belliRef = useRef(null);
  const saraRef = useRef(null);
  const statsRef = useRef(null);
  const navigate = useNavigate();
  //icon
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };
  const handleLinkClick = (url) => {
    window.location.href = url;
  };
  // start when a view
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // start when 10% of the section is in view like chicken :)
  });

  const handleHover = (event) => {
    const img = event.target.querySelector(".icon-wwd");
    const text = event.target.querySelector(".wwdf3");
    //check
    if (img && text) {
      img.style.transform = "scale(1.3)";
      text.style.transform = "scale(1.1)";
    }
  };

  const handleLeave = (event) => {
    const img = event.target.querySelector(".icon-wwd");
    const text = event.target.querySelector(".wwdf3");
    //checkkkkk
    if (img && text) {
      img.style.transform = "scale(1)";
      text.style.transform = "scale(1)";
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const topPosition = causesRef.current.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (topPosition < screenPosition) {
        const causeElements =
          causesRef.current.querySelectorAll(".ourcauses-f");
        causeElements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add("visible");
          }, index * 200);
        });
        window.removeEventListener("scroll", handleScroll);
      }
    };
    const createStarEffect = (element) => {
      const star = document.createElement("div");
      star.classList.add("star");
      element.appendChild(star);

      element.addEventListener("mouseenter", () => {
        star.style.animation = "starMove 1s forwards";
      });

      element.addEventListener("mouseleave", () => {
        star.style.animation = "none";
      });
    };

    createStarEffect(belliRef.current);
    createStarEffect(saraRef.current);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* intro*/}
      <motion.div
        className="intro"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div class="intro_content">
          <h1>need help</h1>
          <p>Being live saver</p>
          <p>for someone</p>

          <div class="btn-cont">
            <button
              className="button1"
              onClick={() => handleNavigation("/profile")}
            >
              DONATE
            </button>
            {/*machine*/}
            <button
              className="button2"
              onClick={() => handleNavigation("/request-donation")}
            >
              REQUEST DONATION
            </button>
          </div>
        </div>

        <div class="bannar-for-intro">
          <motion.div
            className="b-part1"
            initial={{ opacity: 0, y: -50 }} // Instate
            animate={{ opacity: 1, y: 0 }} // Animation
            transition={{ duration: 1 }} // duration
          >
            <div class="top-b-part1">
              <h1 class="h1-bannar">rasing hope</h1>
              <h3 class="h3-bannar">to the people in need</h3>
            </div>
            <div class="bottom-b-part2">
              <button
                className="button2"
                onClick={() => handleNavigation("/profile")}
              >
                DISCOVER
              </button>
            </div>
          </motion.div>
          <motion.div
            className="b-part2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div class="top-b-part2">
              <h1>become a volunter</h1>
              <h3>below poverty line is enchmark used by government</h3>
            </div>
            <button
              className="bottomstot-b-part2"
              onClick={() => handleNavigation("/volunteer")}
            >
              JOIN ORGANIZATION
            </button>
          </motion.div>
          <div class="b-part3">
            <video></video>
          </div>
        </div>
      </motion.div>
      {/* about us*/}
      <motion.div
        className="about-us"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div class="right-about-us">
          <h2>about us</h2>
          <h1>help people, our main goals</h1>
          <h3>
            Our goal is to help those in need in all respects and create better
            opportunities. We accept food, clothes, appliances, books , home ,
            furniture and toys
          </h3>
          <button
            className="button1"
            onClick={() => handleNavigation("/profile")}
          >
            more about
          </button>
        </div>

        <div class="left-aboit-us">
          <div class="target">
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <ellipse
                    cx="11.526"
                    cy="11.5566"
                    rx="10.8281"
                    ry="10.8281"
                    fill="#77D7D3"
                  />
                  <path
                    d="M15.9375 7.94775L9.76146 15.1665L7.11459 12.279"
                    fill="#77D7D3"
                  />
                  <path
                    d="M15.9375 7.94775L9.76146 15.1665L7.11459 12.279"
                    stroke="#2E4049"
                    stroke-width="1.60417"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>food donatio</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <ellipse
                    cx="11.526"
                    cy="11.5566"
                    rx="10.8281"
                    ry="10.8281"
                    fill="#77D7D3"
                  />
                  <path
                    d="M15.9375 7.94775L9.76146 15.1665L7.11459 12.279"
                    fill="#77D7D3"
                  />
                  <path
                    d="M15.9375 7.94775L9.76146 15.1665L7.11459 12.279"
                    stroke="#2E4049"
                    stroke-width="1.60417"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>devices donation</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <ellipse
                    cx="11.526"
                    cy="11.5566"
                    rx="10.8281"
                    ry="10.8281"
                    fill="#77D7D3"
                  />
                  <path
                    d="M15.9375 7.94775L9.76146 15.1665L7.11459 12.279"
                    fill="#77D7D3"
                  />
                  <path
                    d="M15.9375 7.94775L9.76146 15.1665L7.11459 12.279"
                    stroke="#2E4049"
                    stroke-width="1.60417"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>clothes donatio</span>
              </li>
            </ul>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <ellipse
                    cx="11.526"
                    cy="11.5566"
                    rx="10.8281"
                    ry="10.8281"
                    fill="#77D7D3"
                  />
                  <path
                    d="M15.9375 7.94775L9.76146 15.1665L7.11459 12.279"
                    fill="#77D7D3"
                  />
                  <path
                    d="M15.9375 7.94775L9.76146 15.1665L7.11459 12.279"
                    stroke="#2E4049"
                    stroke-width="1.60417"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>education donatio</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <ellipse
                    cx="11.526"
                    cy="11.5566"
                    rx="10.8281"
                    ry="10.8281"
                    fill="#77D7D3"
                  />
                  <path
                    d="M15.9375 7.94775L9.76146 15.1665L7.11459 12.279"
                    fill="#77D7D3"
                  />
                  <path
                    d="M15.9375 7.94775L9.76146 15.1665L7.11459 12.279"
                    stroke="#2E4049"
                    stroke-width="1.60417"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>home essentials</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <ellipse
                    cx="11.526"
                    cy="11.5566"
                    rx="10.8281"
                    ry="10.8281"
                    fill="#77D7D3"
                  />
                  <path
                    d="M15.9375 7.94775L9.76146 15.1665L7.11459 12.279"
                    fill="#77D7D3"
                  />
                  <path
                    d="M15.9375 7.94775L9.76146 15.1665L7.11459 12.279"
                    stroke="#2E4049"
                    stroke-width="1.60417"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>toys donatio</span>
              </li>
            </ul>
          </div>
          <b>our donations</b>
          <button
            className="button2"
            onClick={() => handleNavigation("/profile")}
          >
            donate now
          </button>
        </div>
      </motion.div>
      {/*our causes*/}
      <div class="ourcauses" ref={causesRef}>
        <span class="f1 font2">our causes</span>

        <div class="ourcauses-content">
          <div class="ourcauses-f">
            <img src={photo1} alt="no img" />

            <div class="ourcauses-bottom">
              <span class="font1">reducing waste</span>

              <div class="barred"></div>

              <span class="font3">
                facilitating the donation of items that would otherwise go
                unused or end up in landfills
              </span>
            </div>
          </div>
          <div class="ourcauses-f">
            <img src={photo2} alt="no img" />

            <div class="ourcauses-bottom">
              <span class="font1">helping those in need</span>
              <div class="barred"></div>
              <div class="bar"></div>
              <span class="font3">
                By providing non-monetary donations, you can directly support
                those who may struggle to afford essential items.
              </span>
            </div>
          </div>
          <div class="ourcauses-f">
            <img src={photo4} alt="no img" />
            <div class="ourcauses-bottom">
              <span class="font1">encouraging community engagement</span>
              <div class="barred"></div>
              <div class="bar"></div>
              <span class="font3">
                serve as a platform that brings people together
              </span>
            </div>
          </div>
          <div class="ourcauses-f">
            <img src={photo3} alt="no img" />
            <div class="ourcauses-bottom">
              <span class="font1">supporting local charities</span>
              <div class="barred"></div>
              <div class="bar"></div>
              <span class="font3">
                facilitating the donation of items that would otherwise go
                unused or end up in landfills
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*what we do*/}
      <div className="what-we-do">
        <span className="wedf1 font2">what we do </span>
        <span className="wwdf2 font1">we do it for people in need</span>
        <div className="wwd-categories1">
          <div
            className="wwd-item"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <img className="icon-wwd" src={photo8} alt="no img" />
            <span className="font1">clothes</span>
            <span className="wwdf3 font3">
              Extend a helping hand through your wardrobe. By donating your
              clothes, you can provide comfort, warmth
            </span>
          </div>

          <div
            className="wwd-item"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <img className="icon-wwd" src={photo6} alt="no img" />
            <span className="font1">home essentials</span>
            <span className="wwdf3 font3">
              you can provide stability, comfort, and a sense of belonging to
              individuals and families seeking a fresh start.
            </span>
          </div>

          <div
            className="wwd-item"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <img className="icon-wwd" src={photo10} alt="no img" />
            <span className="font1">devices</span>
            <span className="wwdf3 font3">
              bridge the digital divide, enabling education, communication, and
              new opportunities
            </span>
          </div>
        </div>

        <div className="wwd-categories2">
          <div
            className="wwd-item"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <img className="icon-wwd" src={photo7} alt="no img" />
            <span className="font1">food</span>
            <span className="wwdf3 font3">
              provide sustenance, nourishment for individuals and families
              facing food insecurity.
            </span>
          </div>

          <div
            className="wwd-item"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <img className="icon-wwd" src={photo9} alt="no img" />
            <span className="font1">toys</span>
            <span className="wwdf3 font3">
              our donated toys can bring laughter, imagination, and a sense of
              childhood wonder to children who deserve it most.
            </span>
          </div>

          <div
            className="wwd-item"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <img className="icon-wwd" src={photo5} alt="no img" />
            <span className="font1">books</span>
            <span className="wwdf3 font3">
              ignite curiosity, foster learning, and empower individuals to
              explore new worlds and ideas.
            </span>
          </div>
        </div>
      </div>
      <div class="what_will_we_do">
        <div class="wwwd_top">
          <div class="wwwdt_ledt">
            <span class="font2">what will we do </span>
            <span
              style={{ fontSize: "32px", color: "white" }}
              className="font1"
            >
              Featured Projects
            </span>
            <span style={{ width: "606px" }} className="font3">
              Here is what we are planning for in the future which are
              charitable projects to help the needy
            </span>
            <a>
              <button
                style={{ marginTop: "13px" }}
                className="button1"
                onClick={() => handleNavigation("/profile")}
              >
                MORE PROJECT
              </button>
            </a>
          </div>
          <div class="wwwdt_right">
            <img src={photo11} alt="no img" />
            <img src={photo12} alt="no img" />
          </div>
        </div>
        <div class="wwwd_bottom">
          <div class="wwwdb_ledt">
            <img src={photo13} alt="img" />
          </div>
          <div class="wwwdb_right">
            <div class="wwwdbr_lift">
              <div class="llll">
                <div class="edu">
                  <button
                    className="edu"
                    onClick={() => handleNavigation("/profile")}
                  >
                    Education
                  </button>
                </div>
                <div class="hel">
                  <button
                    className="hel"
                    onClick={() => handleNavigation("/profile")}
                  >
                    Health
                  </button>
                </div>
              </div>
              <span class="mto  font1">More than One Life Changed</span>
            </div>
            <div class="wwwdbr_right"></div>
          </div>
        </div>
      </div>
      <div class="wps">
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
            fontSize: "28px",
          }}
          className="font2"
        >
          Testimonial
        </span>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
            fontSize: "32px",
          }}
          className="font1"
        >
          What People Say About Us
        </span>
        <div class="wps_p">
          <div class="wps_p1" ref={belliRef}>
            <img src={photo14} alt="Belli Smith" />
            <div class="between">
              <span class="font1">Belli Smith</span>
              <span style={{ marginBottom: "8.02px" }} className="font3">
                Designer
              </span>
              <div style={{ width: "275px" }} className="font3">
                Grateful to see the incredible impact of{" "}
                <strong>GivingCircle</strong>. Their commitment to making a
                difference in the world is truly inspiring.
              </div>
            </div>
          </div>
          <div class="wps_p1" ref={saraRef}>
            <img src={photo15} alt="Sara Taylor" />
            <div class="between">
              <span class="font1">Sara Taylor</span>
              <span class="font3">Donator</span>
              <div style={{ width: "275px" }} className="font3">
                Sending a big thank you to <strong>GivingCircle</strong> for
                their dedication to creating positive change.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="company">
        <div class="com_top" ref={statsRef}>
          <div class="ctt">
            <Counter end={200000} duration={2000} />
            <span class="dd font3">Received Donations From Our People</span>
          </div>

          <div class="ctt">
            <Counter end={99000} duration={2000} />
            <span class="dd font3">
              {" "}
              Projects Done With The Help Of Donators
            </span>
          </div>

          <div class="ctt">
            <Counter end={200000} duration={2000} />
            <span class="dd font3">People We Helped on 2020</span>
          </div>

          <div class=" ctt">
            <Counter end={10700} duration={2000} />
            <span class="dd font3">
              With Our Volunteers We’ve Solved Many Causes
            </span>
          </div>
        </div>

        <div
          style={{
            width: "962.5px",
            height: "0.802px",
            background: "#D0D0D0",
          }}
        ></div>
        {/*animation*/}
        <div class="com_botom">
          <div className="img-container">
            <img src={photo16} alt="no img" />
            <div className="overlay">
              <a
                href="#"
                onClick={() => handleLinkClick("https://modernhome-egypt.com/")}
              >
                Visit
              </a>
            </div>
          </div>{" "}
          <div className="img-container">
            <img src={photo17} alt="no img" />
            <div className="overlay">
              <a
                href="#"
                onClick={() => handleLinkClick("https://www.vsandcompany.com/")}
              >
                Visit
              </a>
            </div>
          </div>
          <div className="img-container">
            <img src={photo18} alt="no img" />
            <div className="overlay">
              <a
                href="#"
                onClick={() => handleLinkClick("https://thebrandcompany.co/")}
              >
                Visit
              </a>
            </div>
          </div>
          <div className="img-container">
            <img src={photo19} alt="no img" />
            <div className="overlay">
              <a
                href="#"
                onClick={() => handleLinkClick("https://www.naturehome.com/en")}
              >
                Visit
              </a>
            </div>
          </div>
          <div className="img-container">
            <img src={photo20} alt="no img" />
            <div className="overlay">
              <a
                href="#"
                onClick={() => handleLinkClick("https://www.design.studio/")}
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="vounteer">
        <span style={{ fontSize: "28.073px" }} className="t font2">
          team
        </span>
        <span style={{ fontSize: "32.083px" }} className="mov font1">
          Meet Our Volunteers
        </span>
        <div class="all_voul">
          <div class="o_v">
            <div>
              <img src={photo21} alt="" />
            </div>

            <span style={{ fontSize: "17px" }} className="font1">
              Martin Luther
            </span>

            <div className="icons">
              <FontAwesomeIcon
                icon={faTwitter}
                className={`fab fa-twitter ${
                  isTwitterHovered ? "glow-twitter" : ""
                }`}
                onMouseEnter={() => setIsTwitterHovered(true)}
                onMouseLeave={() => setIsTwitterHovered(false)}
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className={`fab fa-facebook ${
                  isFacebookHovered ? "glow-facebook" : ""
                }`}
                onMouseEnter={() => setIsFacebookHovered(true)}
                onMouseLeave={() => setIsFacebookHovered(false)}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className={`fab fa-instagram ${
                  isInstagramHovered ? "glow-instagram" : ""
                }`}
                onMouseEnter={() => setIsInstagramHovered(true)}
                onMouseLeave={() => setIsInstagramHovered(false)}
              />
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className={`fa fa-phone-alt ${
                  isPhoneHovered ? "glow-phone" : ""
                }`}
                onMouseEnter={() => setIsPhoneHovered(true)}
                onMouseLeave={() => setIsPhoneHovered(false)}
              />
            </div>
          </div>

          <div class="o_v">
            <div>
              <img src={photo22} alt />
            </div>

            <span style={{ fontSize: "17px" }} className="font1">
              Keira Knightley
            </span>

            <div className="icons">
              <FontAwesomeIcon
                icon={faTwitter}
                className={`fab fa-twitter ${
                  isTwitterHovered ? "glow-twitter" : ""
                }`}
                onMouseEnter={() => setIsTwitterHovered(true)}
                onMouseLeave={() => setIsTwitterHovered(false)}
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className={`fab fa-facebook ${
                  isFacebookHovered ? "glow-facebook" : ""
                }`}
                onMouseEnter={() => setIsFacebookHovered(true)}
                onMouseLeave={() => setIsFacebookHovered(false)}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className={`fab fa-instagram ${
                  isInstagramHovered ? "glow-instagram" : ""
                }`}
                onMouseEnter={() => setIsInstagramHovered(true)}
                onMouseLeave={() => setIsInstagramHovered(false)}
              />
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className={`fa fa-phone-alt ${
                  isPhoneHovered ? "glow-phone" : ""
                }`}
                onMouseEnter={() => setIsPhoneHovered(true)}
                onMouseLeave={() => setIsPhoneHovered(false)}
              />
            </div>
          </div>

          <div class="o_v">
            <div>
              <img src={photo23} alt />
            </div>

            <span style={{ fontSize: "17px" }} className="font1">
              Jack Sparrow
            </span>

            <div className="icons">
              <FontAwesomeIcon
                icon={faTwitter}
                className={`fab fa-twitter ${
                  isTwitterHovered ? "glow-twitter" : ""
                }`}
                onMouseEnter={() => setIsTwitterHovered(true)}
                onMouseLeave={() => setIsTwitterHovered(false)}
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className={`fab fa-facebook ${
                  isFacebookHovered ? "glow-facebook" : ""
                }`}
                onMouseEnter={() => setIsFacebookHovered(true)}
                onMouseLeave={() => setIsFacebookHovered(false)}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className={`fab fa-instagram ${
                  isInstagramHovered ? "glow-instagram" : ""
                }`}
                onMouseEnter={() => setIsInstagramHovered(true)}
                onMouseLeave={() => setIsInstagramHovered(false)}
              />
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className={`fa fa-phone-alt ${
                  isPhoneHovered ? "glow-phone" : ""
                }`}
                onMouseEnter={() => setIsPhoneHovered(true)}
                onMouseLeave={() => setIsPhoneHovered(false)}
              />
            </div>
          </div>

          <div class="joinvouln">
            <svg
              class="hand"
              xmlns="http://www.w3.org/2000/svg"
              width="66"
              height="67"
              viewBox="0 0 66 67"
              fill="none"
            >
              <circle cx="32.9636" cy="33.2846" r="32.8854" fill="#2E4049" />
            </svg>
            <span
              style={{
                fontSize: "20.052px",
                width: "123px",
                textAlign: "center",
              }}
              className="font1"
            >
              {" "}
              Become a Volunteer
            </span>

            <span
              style={{
                fontSize: "16.042px",
                width: "192px",
                textAlign: "center",
              }}
              className="font3"
            >
              be part of our institute and do the best
            </span>
            <button
              className="bttn"
              onClick={() => handleNavigation("/volunteer")}
            >
              Join Us Today
            </button>
          </div>
        </div>

        <div class="event">
          <div class="event_top">
            <div class="evnttr">
              <span style={{ fontSize: "28.073px" }} className="font2">
                our events
              </span>
              <span
                style={{ width: "379px", fontSize: "32.083px" }}
                className="font1"
              >
                Join Upcoming Events Replays & Webinars
              </span>
            </div>
            <button
              className="button1"
              onClick={() => handleNavigation("/volunteer")}
            >
              More events
            </button>
          </div>

          <div class="bottom">
            <div class="eventl">
              <img style={{ marginBottom: "16px" }} src={photo24} alt="" />

              <div>
                <span>Organized By : Nattasha </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M9.48958 0.812233C5.06141 0.812233 1.46875 4.4049 1.46875 8.83307C1.46875 13.2612 5.06141 16.8539 9.48958 16.8539C13.9178 16.8539 17.5104 13.2612 17.5104 8.83307C17.5104 4.4049 13.9178 0.812233 9.48958 0.812233Z"
                    stroke="#FF6D6D"
                    stroke-width="1.60417"
                    stroke-miterlimit="10"
                  />
                </svg>
                <span> 10:00 AM - 18:00 PM, Everyday</span>
              </div>

              <div class="barevent"></div>

              <span style={{ marginBottom: "5.36px" }} className="font1">
                Education for Poor Children
              </span>

              <span style={{ marginBottom: "16px" }} className="font3">
                There are many variations of passages of injected Lorem Ipsum
                available, but the majority have.
              </span>

              <div class="xc">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="24"
                  viewBox="0 0 17 24"
                  fill="none"
                >
                  <path
                    d="M8.04163 1.0206C12.027 1.0206 15.2604 4.21662 15.2604 8.15294C15.2604 12.6822 10.4479 19.8599 8.68079 22.339C8.60744 22.4437 8.5113 22.5288 8.40022 22.5875C8.28914 22.6462 8.16627 22.6769 8.04163 22.6769C7.91699 22.6769 7.79411 22.6462 7.68303 22.5875C7.57195 22.5288 7.47582 22.4437 7.40247 22.339C5.63538 19.8609 0.822875 12.6859 0.822875 8.15294C0.822875 4.21662 4.05627 1.0206 8.04163 1.0206Z"
                    stroke="#FF6D6D"
                    stroke-width="1.60417"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.04163 10.6456C6.71269 10.6456 5.63538 9.56827 5.63538 8.23933C5.63538 6.9104 6.71269 5.83308 8.04163 5.83308C9.37056 5.83308 10.4479 6.9104 10.4479 8.23933C10.4479 9.56827 9.37056 10.6456 8.04163 10.6456Z"
                    stroke="#FF6D6D"
                    stroke-width="1.60417"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                <span
                  style={{ fontSize: "14.438px", fontWeight: "500" }}
                  className="font3"
                >
                  down towin, Cairo, CA 94528
                </span>{" "}
              </div>
            </div>
            <div class="eventr">
              <div class="ggg">
                <div class="date">
                  <span
                    style={{ color: "white", fontSize: "48.125px" }}
                    className="font1"
                  >
                    21
                  </span>
                  <span style={{ color: "white", fontSize: "20.052px" }}>
                    August
                  </span>
                </div>
                <div class="dettt">
                  <span
                    style={{ marginBottom: "9px", fontSize: "16.042px" }}
                    className="font3"
                  >
                    Organized By :{" "}
                    <span style={{ fontSize: "16.042px" }} className="font2">
                      Nattasha
                    </span>
                  </span>

                  <span
                    style={{ marginBottom: "19px", fontSize: "20.052px" }}
                    className="font1"
                  >
                    Healthy Food for Growing
                  </span>
                  <span style={{ fontSize: "16.042px" }} className="font3">
                    There are many variations of passages of injected Lorem
                    Ipsum available.
                  </span>
                </div>
              </div>

              <div class="barevent"></div>

              <div class="ggg">
                <div class="date">
                  <span
                    style={{ color: "white", fontSize: "48.125px" }}
                    className="font3"
                  >
                    18
                  </span>
                  <span style={{ color: "white", fontSize: "20.052px" }}>
                    June
                  </span>
                </div>
                <div class="dettt">
                  <span
                    style={{ marginBottom: "9px", fontSize: "16.042px" }}
                    className="font1"
                  >
                    Organized By :{" "}
                    <span style={{ fontSize: "16.042px" }} className="font2">
                      Michel Sudan
                    </span>{" "}
                  </span>

                  <span
                    style={{ marginBottom: "19px", fontSize: "20.052px" }}
                    className="font1"
                  >
                    Cloth Comming
                  </span>
                  <span style={{ fontSize: "16.042px" }} className="font3">
                    There are many variations of passages of injected Lorem
                    Ipsum available.
                  </span>
                </div>
              </div>

              <div class="barevent"></div>
              <div class="ggg">
                <div class="date">
                  <span
                    style={{ color: "white", fontSize: "48.125px" }}
                    className="font3"
                  >
                    18
                  </span>
                  <span style={{ color: "white", fontSize: "20.052px" }}>
                    June
                  </span>
                </div>
                <div class="dettt">
                  <span
                    style={{ marginBottom: "9px", fontSize: "16.042px" }}
                    className="font1"
                  >
                    Organized By :{" "}
                    <span style={{ fontSize: "16.042px" }} className="font2">
                      Jogn Doue
                    </span>
                  </span>

                  <span
                    style={{ marginBottom: "19px", fontSize: "20.052px" }}
                    className="font1"
                  >
                    Teachers Presentation
                  </span>
                  <span style={{ fontSize: "16.042px" }} className="font3">
                    There are many variations of passages of injected Lorem
                    Ipsum available.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dv">
          <div style={{ background: "#FF6D6D" }} class="v">
            <span
              style={{ color: "white", fontSize: "28.073px" }}
              className="font2"
            >
              Beacame Volunteer
            </span>
            <span
              style={{ color: "white", fontSize: "32.083px" }}
              className="font1"
            >
              Join Our Organization
            </span>

            <span
              style={{ color: "white", width: "618px", fontSize: "16.042px" }}
              className="font3"
            >
              {" "}
              Save the Children believes every child deserves a future. In the
              U.S. and around the world, we give children a healthy start in
              life.{" "}
            </span>

            <a>
              <button
                style={{ padding: "17.646px 28.875px" }}
                className="button2"
                onClick={() => handleNavigation("/volunteer")}
              >
                Join Us Now
              </button>
            </a>
          </div>

          <div class="v">
            <span style={{ fontSize: "28.073px" }} className="font2">
              become donor
            </span>

            <span
              style={{
                marginTop: "15px",
                width: "350px",
                fontSize: "32.083px",
              }}
              className="font1"
            >
              Donate And Help Someone
            </span>
            <a>
              <button
                className="button2"
                onClick={() => handleNavigation("/profile")}
              >
                Donate
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
