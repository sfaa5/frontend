import React, { useState } from "react";
import styled from "styled-components";
import backgroundImage from "./image_195.png";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Work+Sans:wght@500&display=swap");

  body {
    margin: 0;
    padding: 0;
  }

  li,
  a,
  button {
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    color: black;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .top-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #77d7d3;
    height: 57px;
    width: 100%;
  }

  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 35.98px;
  }

  .left .call {
    margin-left: 287px;
  }

  .call:hover {
    color: rgb(49, 49, 242);
    cursor: pointer;
  }

  .email:hover {
    color: rgb(49, 49, 242);
    cursor: pointer;
  }

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20.5px 28.5px;
    background-color: #4bc9c4;
    gap: 12.75px;
    margin-right: 287px;
    height: 57px;
  }

  .right a:hover {
    color: rgb(49, 49, 242);
  }

  .bottom-nav {
    display: flex;
    align-items: center;
    height: 90px;
    width: 100%;
    background-color: white;
    position: relative;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bottom-nav h1 {
    position: absolute;
    cursor: pointer;
    left: 15.26%;
  }

  .nav_links {
    list-style: none;
    position: absolute;
    left: 36.61%;
  }

  .nav_links ul {
    color: antiquewhite;
    display: flex;
    justify-content: space-between;
  }

  .nav_links li {
    display: inline-block;
    padding: 0px 12px;
  }

  .nav_links li a {
    transition: all 0.3s ease 0s;
  }

  .nav_links li a:hover {
    color: aqua;
  }

  .Dropdown {
    position: relative;
  }

  .drobdowncont {
    display: none;
    position: absolute;
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    background-color: white;
    z-index: 5;
  }

  .drobdowncont a {
    padding-top: 5px;
    padding-bottom: 5px;
    display: block;
    text-align: center;
  }

  .drobdowncont a:hover {
    background-color: #f1f1f1;
  }

  .Dropdown:hover .drobdowncont {
    display: block;
  }

  .button1 {
    padding: 17.5px 28.6px;
    background-color: rgba(255, 109, 109, 1);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    font-size: 14.32px;
  }

  .cta {
    position: absolute;
    right: 19.55%;
  }

  button:hover {
    background-color: rgb(42, 132, 154);
  }

  .ls {
    right: 5.73%;
    gap: 34.25px;
    position: absolute;
  }

  .ls a {
    padding-right: 15px;
    font-size: 14.32;

    text-transform: uppercase;

    justify-content: space-around;
    transition: all 0.3s ease 0s;
  }

  .ls a:hover {
    color: rgba(255, 109, 109, 1);
    transition: all 0.3s ease 0s;
  }

  .content {
    text-align: left;
    position: relative;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: local;
    width: 100%;
    height: 800px;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }

  .text_content {
    position: absolute;
    left: 15%;
    top: 25%;
  }

  .text_content h1 {
    color: #fff;
    font-family: "Sue Ellen Francisco";
    font-size: 45px;
    font-style: normal;
    font-weight: 400;
    line-height: 108.3%;
  }

  .text_content p {
    color: #fff;
    margin: 50px 0;
    font-family: "Shippori Mincho";
    font-size: 80px;
    font-style: normal;
    font-weight: 800;
    line-height: 108.3%;
  }

  .container {
    display: flex;
    flex-flow: row nowrap;
    margin: 50px auto;
    width: 75%;
    justify-content: space-evenly;
  }

  .p1 {
    text-align: center;
    margin: 0 0 50px 0;
    color: #ff6d6d;
    font-family: "Sue Ellen Francisco";
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 108.3%;
  }

  .p2 {
    text-align: center;
    color: var(--Heading, #213430);
    text-align: center;
    font-family: "Shippori Mincho";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 46px;
  }

  .left_cont {
    flex-flow: column;
    width: 40%;
  }

  .l1 {
    color: var(--Heading, #213430);

    /* H3 - left */
    font-family: "Poppins";
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 37px;
    /* 123.333% */
  }

  .tit {
    margin-top: 10px;
    color: var(--Text, #6f7775);

    /* Text 2 */
    font-family: "Poppins";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    /* 137.5% */
  }

  .mark1_p {
    color: var(--Heading, #213430);
    margin-top: 10px;
    /* Text 18 Semibold */
    font-family: "Poppins";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    /* 144.444% */
    display: inline-block;
  }

  .mark2_p {
    color: var(--Heading, #213430);
    display: inline-block;
    /* Text 18 Semibold */
    font-family: "Poppins";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    /* 144.444% */
  }

  .mark3_p {
    color: var(--Heading, #213430);
    display: inline-block;
    /* Text 18 Semibold */
    font-family: "Poppins";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    /* 144.444% */
  }

  .right_cont {
    flex-flow: column;
    width: 40%;
  }

  .sup {
    color: var(--Heading, #213430);
    margin-top: 10px;
    margin-bottom: 10px;
    /* H3 - left */
    font-family: "Poppins";
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 37px;
    /* 123.333% */
  }

  .sup_tex {
    color: var(--Text, #6f7775);

    /* Text 2 */
    font-family: "Poppins";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    /* 137.5% */
  }

  .icons {
    position: relative;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: space-between;
    margin: 10px 0;
  }

  .icon_text_left {
    left: 70px;
    top: 10px;
    position: absolute;
    display: inline-block;
  }

  .text_one {
    color: var(--Heading, #213430);

    /* Text 18 Semibold */
    font-family: "Poppins";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    /* 144.444% */
  }

  .text_two {
    color: var(--Text, #6f7775);

    /* Text 16 Medium */
    font-family: "Poppins";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    /* 137.5% */
  }

  .icon_left {
    flex-flow: row nowrap;
    width: 45%;
  }

  .icon_right {
    display: inline-block;
    position: absolute;
    top: 4px;
    right: 35px;
    display: flex;
  }

  .div_one {
    position: relative;
    border-radius: 10px;
    background: #2e4049;
    margin-top: 10px;
  }

  .div_one_text {
    color: var(--White, #fff);
    padding: 20px;
    /* H6 - left */
    font-family: "Poppins";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    /* 130% */
  }

  .div_one svg {
    position: absolute;
    right: 20px;
    top: 40%;
  }

  .div_two {
    position: relative;
    border-radius: 5px;
    background: var(--Light-Grey, #f5f5f5);
    margin-top: 10px;
  }

  .div_two_text {
    color: var(--Heading, #213430);
    padding: 20px;
    font-family: "Poppins";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
  }

  .div_two svg {
    position: absolute;
    right: 20px;
    top: 40%;
  }

  .div_three {
    position: relative;
    border-radius: 5px;
    background: var(--Light-Grey, #f5f5f5);
    margin-top: 10px;
  }

  .div_three_text {
    color: var(--Heading, #213430);
    padding: 20px;
    font-family: "Poppins";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
  }

  .div_three svg {
    position: absolute;
    right: 20px;
    top: 40%;
  }

  .div_four {
    position: relative;
    border-radius: 5px;
    background: var(--Light-Grey, #f5f5f5);
    margin-top: 10px;
  }

  .div_four_text {
    color: var(--Heading, #213430);
    padding: 20px;
    font-family: "Poppins";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
  }

  .div_four svg {
    position: absolute;
    right: 20px;
    top: 40%;
  }

  .div_five {
    position: relative;
    border-radius: 5px;
    background: var(--Light-Grey, #f5f5f5);
    margin-top: 10px;
  }

  .div_five_text {
    color: var(--Heading, #213430);
    padding: 20px;
    font-family: "Poppins";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
  }

  .div_five svg {
    position: absolute;
    right: 20px;
    top: 40%;
  }

  * {
    box-sizing: border-box;
  }

  .line {
    display: flex;
    width: 100%;
    height: 15px;
    margin: 75px 0;
  }

  .line div {
    width: 25%;
  }

  .line1 {
    background-color: #ff6d6d;
  }

  .line2 {
    background-color: #f5f5f5;
  }

  .table_two {
    display: flex;
    width: 72%;
    justify-content: space-evenly;
    margin: 20px auto;
  }

  .left_table {
    flex-flow: column nowrap;
    width: 40%;
  }

  .right_table {
    flex-flow: column nowrap;
    width: 40%;
  }

  .title_of_table_two {
    margin-top: 10px;
    color: #ff6d6d;
    font-family: "Sue Ellen Francisco";
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 108.3%;
    /* 59.565px */
    margin-bottom: 45px;
  }

  .title_of_part_one {
    color: #2e4049;
    font-family: Shippori Mincho;
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    line-height: 120%;
    /* 48px */
    margin-bottom: 20px;
  }

  .text_of_part_one {
    color: #727272;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    /* 26px */
    margin-bottom: 35px;
  }

  .title_of_part_two {
    color: #2e4049;
    font-family: Shippori Mincho;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 120%;
    /* 30px */
    margin-bottom: 10px;
  }

  .text_of_part_two {
    color: #727272;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    /* 26px */
  }

  .icons_table_two {
    margin-top: 20px;
  }

  .icons_table_two svg {
    margin-right: 15px;
  }

  .inp1 {
    color: #909090;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    /* 23.4px */
    width: 198.148px;
    height: 28.844px;
    flex-shrink: 0;
    padding: 20px;
    background: #f5f5f5;
    width: 100%;
    height: 76.516px;
    flex-shrink: 0;
  }

  .inp2 {
    color: #909090;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    /* 23.4px */
    width: 198.148px;
    height: 28.844px;
    flex-shrink: 0;
    padding: 20px;
    background: #f5f5f5;
    width: 100%;
    height: 76.516px;
    flex-shrink: 0;
  }

  .inp3 {
    color: #909090;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    /* 23.4px */
    width: 198.148px;
    height: 28.844px;
    flex-shrink: 0;
    padding: 20px;
    background: #f5f5f5;
    width: 100%;
    height: 76.516px;
    flex-shrink: 0;
  }

  .inp4 {
    font-size: 16px;

    padding: 20px;
    width: 100%;
    height: 218.279px;
    flex-shrink: 0;
    background: #f5f5f5;
  }

  .right_table input,
  textarea {
    margin-bottom: 10px;
    border-width: 0;
  }

  .up_footer {
    position: relative;
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 380px;
    flex-shrink: 0;
    opacity: 0.7;
    background: #f1eeec;
  }

  .up_footer p {
    text-align: center;
    color: #000;
    text-align: center;

    /* H2 - left */
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 46px;
    /* 115% */
    align-items: center;
  }

  .smail_line {
    width: 3.221px;
    height: 60px;
    transform: rotate(90deg);
    flex-shrink: 0;
    border-radius: 50px;
    background: #2e4049;
    text-align: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 30%;
    flex-flow: wrap-reverse;
  }

  .btn_up_footer {
    width: 193px;
    height: 58px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #ff6d6d;
    margin: 20px auto;
    border-radius: 5px;
  }

  .bord {
    top: 65%;
    right: 43.7%;
    position: absolute;
    width: 193px;
    height: 5.273px;
    flex-shrink: 0;
    border-radius: 5px;
    background: var(--Orange, #eca30c);
  }
  .answer {
    background: #ffffff;
  }
`;
//animation
const contentVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};
const textContentVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.5, duration: 1 },
};

const Contact = () => {
  const [showAnswer, setShowAnswer] = useState({});

  const toggleAnswer = (index) => {
    setShowAnswer((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <Wrapper>
      <motion.div
        className="content"
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <motion.div className="text_content" variants={textContentVariants}>
          <h1>Contact</h1>
          <p>Get in Touch</p>
        </motion.div>
      </motion.div>
      <br />
      <p className="p1">NEED HELP</p>
      <p className="p2">The Answers to All Your Questions</p>
      <div className="container">
        <div className="left_cont">
          <div className="l1">
            <u>Most</u> Common Questions
          </div>
          <div className="tit">
            Welcome to the Frequently Asked Questions (FAQ) section. We have
            compiled a list of the most commonly asked questions to provide you
            with quick and helpful answers.
          </div>
          <div className="mark1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <g clipPath="url(#clip0_83_997)">
                <path
                  d="M0 9.8766C0 4.93672 4.02891 0.933105 9 0.933105C13.9711 0.933105 18 4.93672 18 9.8766C18 14.8165 13.9711 18.8201 9 18.8201C4.02891 18.8201 0 14.8165 0 9.8766ZM13.0711 8.33245C13.4543 7.95165 13.4543 7.3298 13.0711 6.94901C12.6879 6.56821 12.0621 6.56821 11.6789 6.94901L7.875 10.729L6.32109 9.18488C5.93789 8.80408 5.31211 8.80408 4.92891 9.18488C4.5457 9.56568 4.5457 10.1875 4.92891 10.5683L7.17891 12.8042C7.56211 13.185 8.18789 13.185 8.57109 12.8042L13.0711 8.33245Z"
                  fill="#FF6D6D"
                />
              </g>
              <defs>
                <clipPath id="clip0_83_997">
                  <rect
                    width="18"
                    height="17.887"
                    fill="white"
                    transform="translate(0 0.933105)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="mark1_p">
              We will help you with the choice of fund
            </div>
          </div>
          <div className="mark2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <g clipPath="url(#clip0_83_997)">
                <path
                  d="M0 9.8766C0 4.93672 4.02891 0.933105 9 0.933105C13.9711 0.933105 18 4.93672 18 9.8766C18 14.8165 13.9711 18.8201 9 18.8201C4.02891 18.8201 0 14.8165 0 9.8766ZM13.0711 8.33245C13.4543 7.95165 13.4543 7.3298 13.0711 6.94901C12.6879 6.56821 12.0621 6.56821 11.6789 6.94901L7.875 10.729L6.32109 9.18488C5.93789 8.80408 5.31211 8.80408 4.92891 9.18488C4.5457 9.56568 4.5457 10.1875 4.92891 10.5683L7.17891 12.8042C7.56211 13.185 8.18789 13.185 8.57109 12.8042L13.0711 8.33245Z"
                  fill="#FF6D6D"
                />
              </g>
              <defs>
                <clipPath id="clip0_83_997">
                  <rect
                    width="18"
                    height="17.887"
                    fill="white"
                    transform="translate(0 0.933105)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="mark2_p">Donor satisfaction is guaranteed</div>
          </div>
          <div className="mark3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <g clipPath="url(#clip0_83_997)">
                <path
                  d="M0 9.8766C0 4.93672 4.02891 0.933105 9 0.933105C13.9711 0.933105 18 4.93672 18 9.8766C18 14.8165 13.9711 18.8201 9 18.8201C4.02891 18.8201 0 14.8165 0 9.8766ZM13.0711 8.33245C13.4543 7.95165 13.4543 7.3298 13.0711 6.94901C12.6879 6.56821 12.0621 6.56821 11.6789 6.94901L7.875 10.729L6.32109 9.18488C5.93789 8.80408 5.31211 8.80408 4.92891 9.18488C4.5457 9.56568 4.5457 10.1875 4.92891 10.5683L7.17891 12.8042C7.56211 13.185 8.18789 13.185 8.57109 12.8042L13.0711 8.33245Z"
                  fill="#FF6D6D"
                />
              </g>
              <defs>
                <clipPath id="clip0_83_997">
                  <rect
                    width="18"
                    height="17.887"
                    fill="white"
                    transform="translate(0 0.933105)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="mark3_p">We help companies give well</div>
          </div>
          <div className="sup">
            <u>Sup</u>port
          </div>
          <div className="sup_tex">
            Our dedicated support team is here to help address any concerns or
            inquiries you may have.
          </div>
          <div className="icons">
            <div className="icon_left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M25 34.2492C23.3857 34.2492 21.7715 33.723 20.3945 32.6567L0 16.8979V38.9073C0 41.4789 2.09863 43.5654 4.6875 43.5654H45.3125C47.9014 43.5654 50 41.4799 50 38.9073V16.8979L29.6094 32.6674C28.2324 33.7252 26.6113 34.2492 25 34.2492ZM1.59082 14.1904L22.3135 30.2122C23.8945 31.435 26.1094 31.435 27.6904 30.2122L48.4131 14.1904C49.3262 13.414 50 12.2204 50 10.9589C50 8.38624 47.9004 6.30078 45.3125 6.30078H4.6875C2.09863 6.30078 0 8.38624 0 10.9589C0 12.2204 0.586914 13.414 1.59082 14.1904Z"
                  fill="#FF6D6D"
                />
              </svg>
              <div className="icon_text_left">
                <div className="text_one">Email Address</div>
                <div className="text_two">support@help.com</div>
              </div>
            </div>
            <div className="icon_right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <g clipPath="url(#clip0_83_1013)">
                  <path
                    d="M49.9219 37.6456L47.6514 47.4276C47.3324 48.8104 46.1094 49.778 44.6768 49.778C20.0391 49.776 0 29.8628 0 5.37878C0 3.95613 0.973535 2.7392 2.36523 2.42381L12.209 0.167561C13.6426 -0.16258 15.1074 0.576889 15.7031 1.92598L20.2461 12.4552C20.7771 13.6954 20.4189 15.1404 19.3691 15.9924L14.1113 20.1876C17.4297 26.9049 22.9258 32.3665 29.6875 35.666L33.9922 30.445C34.8406 29.3989 36.3057 29.0369 37.5537 29.5741L48.1494 34.0875C49.4238 34.7537 50.2539 36.2288 49.9219 37.6456Z"
                    fill="#FF6D6D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_83_1013">
                    <rect
                      width="50"
                      height="49.6861"
                      fill="white"
                      transform="translate(0 0.0898438)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="icon_text_right">
                <div className="text_one">Phone Number</div>
                <div className="text_two">+1-206-156 2849</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right_cont">
          <div className="div_one">
            <div className="div_one_text">How can I donate my items?</div>
            <svg
              className="color"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              onClick={() => toggleAnswer(1)}
            >
              <path
                d="M20 10.7798C20 11.4251 19.4856 11.9443 18.8462 11.9443H1.15385C0.516827 11.9443 0 11.4231 0 10.7802C0 10.1393 0.516827 9.61523 1.15385 9.61523H18.8462C19.4856 9.61523 20 10.1393 20 10.7798Z"
                fill="white"
              />
            </svg>
            {showAnswer[1] && (
              <div className="answer">
                You can donate by clicking on the create account then follow to
                have an account then donate by filling the form.
              </div>
            )}
          </div>
          <div className="div_one">
            <div className="div_one_text">
              {" "}
              Where can I drop off my donation?
            </div>
            <svg
              className="color"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              onClick={() => toggleAnswer(2)}
            >
              <path
                d="M20 10.7798C20 11.4251 19.4856 11.9443 18.8462 11.9443H1.15385C0.516827 11.9443 0 11.4231 0 10.7802C0 10.1393 0.516827 9.61523 1.15385 9.61523H18.8462C19.4856 9.61523 20 10.1393 20 10.7798Z"
                fill="white"
              />
            </svg>
            {showAnswer[2] && (
              <div className="answer">
                You can donate by clicking on the create account then follow to
                have an account then donate by filling the form.
              </div>
            )}
          </div>

          <div className="div_three">
            <div className="div_three_text">
              What happens to the donated items?
            </div>
            <svg
              className="color"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_423_181)">
                <path
                  d="M20 10C20 10.8505 19.3111 11.5389 18.4615 11.5389H11.5385V18.462C11.5385 19.3125 10.8495 20 10 20C9.15048 20 8.46154 19.3125 8.46154 18.462V11.5389H1.53846C0.688942 11.5389 0 10.8505 0 10C0 9.14952 0.688942 8.46202 1.53846 8.46202H8.46154V1.53894C8.46154 0.688462 9.15048 0 10 0C10.8495 0 11.5385 0.688462 11.5385 1.53894V8.46202H18.4615C19.3125 8.46154 20 9.14904 20 10Z"
                  fill="#126360"
                />
              </g>
              <defs>
                <clipPath id="clip0_423_181">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="div_four">
            <div className="div_four_text">
              Can I donate items that are not listed on your
              <br />
              website?
            </div>
            <svg
              className="color"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_423_181)">
                <path
                  d="M20 10C20 10.8505 19.3111 11.5389 18.4615 11.5389H11.5385V18.462C11.5385 19.3125 10.8495 20 10 20C9.15048 20 8.46154 19.3125 8.46154 18.462V11.5389H1.53846C0.688942 11.5389 0 10.8505 0 10C0 9.14952 0.688942 8.46202 1.53846 8.46202H8.46154V1.53894C8.46154 0.688462 9.15048 0 10 0C10.8495 0 11.5385 0.688462 11.5385 1.53894V8.46202H18.4615C19.3125 8.46154 20 9.14904 20 10Z"
                  fill="#126360"
                />
              </g>
              <defs>
                <clipPath id="clip0_423_181">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="div_five">
            <div className="div_five_text">
              Are there any specific guidelines for donations
            </div>
            <svg
              className="color"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_423_181)">
                <path
                  d="M20 10C20 10.8505 19.3111 11.5389 18.4615 11.5389H11.5385V18.462C11.5385 19.3125 10.8495 20 10 20C9.15048 20 8.46154 19.3125 8.46154 18.462V11.5389H1.53846C0.688942 11.5389 0 10.8505 0 10C0 9.14952 0.688942 8.46202 1.53846 8.46202H8.46154V1.53894C8.46154 0.688462 9.15048 0 10 0C10.8495 0 11.5385 0.688462 11.5385 1.53894V8.46202H18.4615C19.3125 8.46154 20 9.14904 20 10Z"
                  fill="#126360"
                />
              </g>
              <defs>
                <clipPath id="clip0_423_181">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="line">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line1"></div>
      </div>
      <div className="table_two">
        <div className="left_table">
          <p className="title_of_table_two">Contact</p>
          <div className="title_of_part_one">Get in Touch With Us</div>
          <div className="text_of_part_one">
            Feel free to contact us for any inquiries, feedback, or
            collaboration opportunities. You can reach us at givingcircle.com,
            We look forward to hearing from you!
          </div>
          <div className="title_of_part_two">Follow us on social media</div>
          <div className="text_of_part_two">
            Stay connected with us on social media for updates,
            behind-the-scenes content, and more. Follow us on GivingCircle on
            facebook to join the conversation and be a part of our community!
          </div>
          <div className="icons_table_two">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M18.2682 2.75181C19.692 2.75591 21.0563 3.30238 22.0631 4.27189C23.0699 5.2414 23.6374 6.55515 23.6416 7.92624V18.274C23.6374 19.6451 23.0699 20.9588 22.0631 21.9283C21.0563 22.8978 19.692 23.4443 18.2682 23.4484H7.52247C6.09866 23.4443 4.73437 22.8978 3.72757 21.9283C2.72078 20.9588 2.15328 19.6451 2.14903 18.274V7.92624C2.15328 6.55515 2.72078 5.2414 3.72757 4.27189C4.73437 3.30238 6.09866 2.75591 7.52247 2.75181H18.2682ZM18.2682 0.682373H7.52247C3.38503 0.682373 0 3.94203 0 7.92624V18.274C0 22.2582 3.38503 25.5178 7.52247 25.5178H18.2682C22.4057 25.5178 25.7907 22.2582 25.7907 18.274V7.92624C25.7907 3.94203 22.4057 0.682373 18.2682 0.682373Z"
                  fill="#2E4049"
                />
                <path
                  d="M19.8817 7.92646C19.5629 7.92646 19.2512 7.83542 18.9861 7.66486C18.7211 7.4943 18.5145 7.25188 18.3925 6.96825C18.2705 6.68462 18.2385 6.37252 18.3007 6.07142C18.3629 5.77032 18.5164 5.49374 18.7419 5.27666C18.9673 5.05957 19.2545 4.91174 19.5672 4.85185C19.8799 4.79195 20.204 4.82269 20.4985 4.94018C20.7931 5.05766 21.0448 5.25661 21.2219 5.51187C21.3991 5.76713 21.4936 6.06724 21.4936 6.37424C21.494 6.5782 21.4527 6.78024 21.3718 6.96877C21.291 7.15729 21.1723 7.32858 21.0225 7.4728C20.8727 7.61702 20.6948 7.73134 20.4991 7.80919C20.3033 7.88704 20.0935 7.92689 19.8817 7.92646ZM12.8969 8.9609C13.7471 8.9609 14.5782 9.20367 15.2851 9.65852C15.992 10.1134 16.543 10.7599 16.8683 11.5162C17.1937 12.2726 17.2788 13.1049 17.1129 13.9079C16.9471 14.7109 16.5377 15.4484 15.9365 16.0273C15.3353 16.6063 14.5694 17.0005 13.7355 17.1602C12.9017 17.3199 12.0373 17.238 11.2519 16.9247C10.4664 16.6114 9.79504 16.0808 9.3227 15.4001C8.85036 14.7193 8.59825 13.919 8.59825 13.1003C8.59947 12.0028 9.05275 10.9506 9.85864 10.1746C10.6645 9.39857 11.7572 8.96207 12.8969 8.9609ZM12.8969 6.89146C11.6217 6.89146 10.3751 7.2556 9.31476 7.93784C8.25444 8.62008 7.42803 9.58977 6.94002 10.7243C6.45201 11.8588 6.32433 13.1072 6.57311 14.3116C6.8219 15.516 7.43598 16.6223 8.3377 17.4907C9.23942 18.359 10.3883 18.9503 11.639 19.1899C12.8897 19.4295 14.1861 19.3065 15.3643 18.8366C16.5425 18.3666 17.5495 17.5708 18.2579 16.5498C18.9664 15.5287 19.3446 14.3283 19.3446 13.1003C19.3446 11.4536 18.6653 9.87438 17.4561 8.71C16.2469 7.54561 14.6069 6.89146 12.8969 6.89146Z"
                  fill="#2E4049"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.5812 13.1746C26.5812 6.3171 20.8071 0.756836 13.6859 0.756836C6.56465 0.756836 0.790527 6.3171 0.790527 13.1746C0.790527 19.3724 5.50539 24.5096 11.671 25.4421V16.7652H8.3959V13.1746H11.671V10.4388C11.671 7.32715 13.5966 5.60696 16.5418 5.60696C17.9528 5.60696 19.4289 5.84977 19.4289 5.84977V8.90598H17.802C16.201 8.90598 15.7002 9.86281 15.7002 10.8462V13.1746H19.2763L18.7053 16.7652H15.7008V25.4432C21.8663 24.5113 26.5812 19.374 26.5812 13.1746Z"
                  fill="#2E4049"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="23"
                viewBox="0 0 29 23"
                fill="none"
              >
                <path
                  d="M28.2144 2.66625C27.1779 3.11664 26.0811 3.41336 24.9589 3.54705C26.1383 2.85644 27.0252 1.7593 27.4534 0.461378C26.3383 1.11339 25.1204 1.57088 23.8519 1.81424C23.3177 1.2544 22.6752 0.809036 21.9636 0.505213C21.2519 0.20139 20.4859 0.0454546 19.7121 0.0468847C16.5792 0.0468847 14.0439 2.54536 14.0439 5.62527C14.0417 6.05367 14.0908 6.4808 14.1902 6.89753C11.9437 6.79222 9.74387 6.21914 7.73154 5.21495C5.71921 4.21077 3.93864 2.7976 2.50375 1.06585C2.00036 1.91448 1.73414 2.88273 1.73291 3.86943C1.73291 5.80373 2.74209 7.51352 4.26593 8.51521C3.3631 8.49378 2.47876 8.25483 1.68801 7.81863V7.88771C1.68801 10.5934 3.64534 12.8444 6.23592 13.3567C5.74876 13.4866 5.24676 13.5524 4.74259 13.5524C4.38485 13.5531 4.02792 13.5184 3.677 13.4488C4.39718 15.6652 6.49325 17.2771 8.97618 17.3232C6.95862 18.8781 4.48159 19.7185 1.9344 19.7123C1.48227 19.7116 1.03056 19.6847 0.581543 19.6317C3.1728 21.2863 6.18494 22.1615 9.25942 22.1532C19.7 22.1532 25.4039 13.6503 25.4039 6.27579C25.4039 6.03401 25.3976 5.79222 25.3861 5.55619C26.4932 4.76868 27.4509 3.79005 28.2144 2.66625Z"
                  fill="#2E4049"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M13.3173 0C6.08144 0 0.214355 5.86446 0.214355 13.0971C0.214355 18.4587 3.4433 23.0661 8.05858 25.095C8.02348 24.1829 8.05273 23.0836 8.28671 22.0897C8.53824 21.0255 9.97138 14.9506 9.97138 14.9506C9.97138 14.9506 9.55021 14.1145 9.55021 12.8808C9.55021 10.9396 10.6733 9.48955 12.0772 9.48955C13.2705 9.48955 13.8438 10.3841 13.8438 11.4541C13.8438 12.6527 13.0775 14.4419 12.6856 16.1024C12.358 17.494 13.3817 18.6224 14.7563 18.6224C17.2365 18.6224 18.9095 15.4359 18.9095 11.6588C18.9095 8.78792 16.9733 6.6421 13.4577 6.6421C9.48587 6.6421 7.00566 9.60649 7.00566 12.9159C7.00566 14.056 7.34494 14.8629 7.87139 15.4826C8.11122 15.7691 8.14632 15.8861 8.05858 16.2135C7.99423 16.4532 7.85385 17.0321 7.7895 17.266C7.70176 17.5992 7.43268 17.7162 7.13435 17.5934C5.30345 16.845 4.44942 14.8453 4.44942 12.5884C4.44942 8.86978 7.59062 4.40858 13.8145 4.40858C18.8159 4.40858 22.1092 8.02782 22.1092 11.9102C22.1092 17.0496 19.2487 20.8852 15.0371 20.8852C13.6215 20.8852 12.2936 20.1193 11.8374 19.2539C11.8374 19.2539 11.0769 22.2709 10.9132 22.8556C10.6382 23.8671 10.0942 24.8728 9.59701 25.6621C10.8031 26.0178 12.054 26.1989 13.3115 26.2001C20.5473 26.2001 26.4144 20.3356 26.4144 13.103C26.4144 5.87031 20.5532 0 13.3173 0Z"
                  fill="#2E4049"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="right_table">
          <input className="inp1" placeholder="Enter Your Name*" type="text" />
          <input className="inp2" placeholder="Phone Number*" type="text" />
          <input className="inp3" placeholder="Email Address*" type="text" />
          <textarea className="inp4" placeholder="Your Message*"></textarea>
        </div>
      </div>
      <div className="up_footer">
        <p>
          Let’s Stand for the People Who <br />
          in Needs
        </p>
        <button className="btn_up_footer">
          donate now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M0 5.9655V5.78425C0 3.59988 1.57875 1.73675 3.73125 1.378C5.12813 1.14082 6.60625 1.60519 7.625 2.6255L8 2.99988L8.34688 2.6255C9.39375 1.60519 10.8438 1.14082 12.2688 1.378C14.4219 1.73675 16 3.59988 16 5.78425V5.9655C16 7.26238 15.4625 8.503 14.5125 9.38738L8.86563 14.6593C8.63125 14.878 8.32187 14.9999 8 14.9999C7.67812 14.9999 7.36875 14.878 7.13438 14.6593L1.48719 9.38738C0.538437 8.503 9.375e-06 7.26238 9.375e-06 5.9655H0Z"
              fill="blue"
            />
          </svg>
        </button>
        <div className="bord"></div>
      </div>
    </Wrapper>
  );
};

export default Contact;
