import React, { useState } from "react";
import styles from "../cssFiles/Volunteer.module.css";
import { motion } from "framer-motion";

const Volunteer = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    // Name validation
    if (!/^[A-Z][a-z]+\s[A-Z][a-z]+$/.test(name)) {
      setError(
        'Please enter your first and last name with capital letters, like "John Doe".'
      );
      return false;
    }

    // Phone number validation
    if (!/^01[012]\d{8}$/.test(phoneNumber)) {
      setError(
        "Please enter a valid Egyptian phone number starting with 011, 012, or 010 and containing 11 digits."
      );
      return false;
    }

    // Email validation
    if (!email.endsWith("@gmail.com")) {
      setError("Please enter a valid Gmail address.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Send email
      const formData = {
        name,
        phoneNumber,
        email,
        address,
        message,
      };

      // Here you can implement code to send email with formData
      // For simplicity, let's just log the data for now
      console.log(formData);

      // Clear form fields
      setName("");
      setPhoneNumber("");
      setEmail("");
      setAddress("");
      setMessage("");
      // Clear error message
      setError("");

      // Display success message or navigate to another page
      alert("Form submitted successfully!");
    }
  };

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

  const tableVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
  };

  const formVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay: 1.5, duration: 1 },
  };

  return (
    <div>
      <motion.div
        className={styles.content}
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={styles.text_content}
          variants={textContentVariants}
        >
          <h1>Need Your Heartful Help...</h1>
          <p>Become a Volunteer</p>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.table_one}
        variants={tableVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.5, duration: 0.75 }}
      >
        <motion.div className={styles.left_table}>
          <motion.div className={styles.title_left}>Help First</motion.div>
          <motion.div className={styles.title2_left}>
            Let’s help together
          </motion.div>
          <motion.div className={styles.text_left}>
            Join our community of changemakers! Whether you're passionate about
            [cause], [cause], or [cause], your time and skills can make a
            difference. Explore volunteer opportunities with us and be a part of
            creating positive change. Together, we can make the word better.
          </motion.div>
          <a href="#">
            <button className={styles.btn_left}>Call : +000 365 698</button>{" "}
          </a>
        </motion.div>
        <motion.div className={styles.right_table}></motion.div>
      </motion.div>
      <motion.div
        className={styles.table_two}
        variants={tableVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.75, duration: 0.75 }}
      >
        <motion.div className={styles.table_two_left}></motion.div>
        <motion.div className={styles.table_two_right}>
          <motion.div className={styles.title_right_table_two}>
            More People More <br />
            impact
          </motion.div>
          <motion.div className={styles.text_right_table_two}>
            Spread the word and amplify our impact! Share our mission with
            friends and family, and together, let's create a ripple effect of
            positive change. Every voice matters, and your support helps us
            reach new heights in making a difference. Thank you for being a
            catalyst for change!
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.form}
        variants={formVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div className={styles.left_form}>
          <p className={styles.title_form}>Help The People With us</p>
          <p className={styles.title2_form}>Need Your Heartful Help</p>
          <motion.div className={styles.text_left_form}>
            We're on a mission, and your heartfelt support can make all the
            difference. Whether it's a small donation, volunteering your time,
            or spreading awareness, your contribution matters. <br />
            <br />
            Join us in making a positive impact, one act of kindness at a time.
            Together, we can create meaningful change. Thank you for sharing
            your heart with our cause!
          </motion.div>
          <motion.div className={styles.partion1_left}>
            <motion.div className={styles.partion1_le}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle cx="30" cy="30" r="30" fill="#FF6D6D" />
                <text
                  x="20"
                  y="40"
                  fontFamily="Arial"
                  fontSize="28"
                  fill="white"
                >
                  01
                </text>
              </svg>
            </motion.div>
            <motion.div className={styles.partion1_ri}>
              <motion.div className={styles.partion1_title}>
                complete the applicaton form
              </motion.div>
              <motion.div className={styles.partion1_text}>
                Complete the following form and submit it to us .
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className={styles.partion2_left}>
            <motion.div className={styles.partion2_le}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle cx="30" cy="30" r="30" fill="#FF6D6D" />
                <text
                  x="20"
                  y="40"
                  fontFamily="Arial"
                  fontSize="28"
                  fill="white"
                >
                  02
                </text>
              </svg>
            </motion.div>
            <motion.div className={styles.partion2_ri}>
              <motion.div className={styles.partion2_title}>
                wait the acceptance email
              </motion.div>
              <motion.div className={styles.partion2_text}>
                We will review your information and will send on your email soon
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className={styles.partion3_left}>
            <motion.div className={styles.partion3_le}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle cx="30" cy="30" r="30" fill="#FF6D6D" />
                <text
                  x="20"
                  y="40"
                  fontFamily="Arial"
                  fontSize="28"
                  fill="white"
                >
                  03
                </text>
              </svg>
            </motion.div>
            <motion.div className={styles.partion3_ri}>
              <motion.div className={styles.partion3_title}>
                prepare for interview
              </motion.div>
              <motion.div className={styles.partion3_text}>
                be ready to the acceptance and dont miss the date .
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className={styles.partion4_left}>
            <motion.div className={styles.partion4_le}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle cx="30" cy="30" r="30" fill="#FF6D6D" />
                <text
                  x="20"
                  y="40"
                  fontFamily="Arial"
                  fontSize="28"
                  fill="white"
                >
                  04
                </text>
              </svg>
            </motion.div>
            <motion.div className={styles.partion4_ri}>
              <motion.div className={styles.partion4_title}>
                prepare for interview
              </motion.div>
              <motion.div className={styles.partion4_text}>
                be ready to the acceptance and dont miss the date .
              </motion.div>
            </motion.div>
          </motion.div>
          <a href="#">
            {" "}
            <button className={styles.btn_form}>Get Started</button>{" "}
          </a>
        </motion.div>
        <motion.div className={styles.right_form}>
          <motion.div className={styles.title_right}>
            Complete the Form
          </motion.div>
          <motion.div className={styles.text_right}>
            Fill Form and Beacame Volonteer
          </motion.div>
          {error && <motion.div className={styles.error}>{error}</motion.div>}
          <form onSubmit={handleSubmit}>
            <input
              className={styles.inp1}
              placeholder="Enter Your Name*"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.inp2}
              placeholder="Phone Number*"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              className={styles.inp3}
              placeholder="Email Address*"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles.inp5}
              placeholder=" Address*"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <textarea
              className={styles.inp4}
              placeholder="Your Message*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className={styles.btn_right} type="submit">
              Get Started
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Volunteer;
