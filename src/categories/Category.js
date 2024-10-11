import React, { useState, useEffect } from "react";
import styles from "../cssFiles/category.module.css"; // Import your CSS file for styling

const categories = [
  {
    title: "Electronic Devices",
    titletwo: "Donate a Device",
    icon: "/img/categories/icon/deviceicon.png",
    description:
      "Make a positive impact by donating your unused or unwanted electronic devices.Help us reduce electronic waste and bridge the digital divide. Your old devices can find new life in the hands of those in need.",
    ready: "Ready to give? Click below to donate",
    imageSrc: "/img/categories/img/device.png",
  },
  {
    title: "BOOKS",
    titletwo: "Donate a Book",
    icon: "/img/categories/icon/bookicon.png",
    description:
      "Your generous contributions can spark imagination, nurture curiosity,and empower individuals of all ages.Join us in promoting literacy,expanding knowledge, and fostering a lifelong love for books.",
    ready: "Give your books a new chapter in someone else's life",
    imageSrc: "/img/categories/img/book.png",
  },
  {
    title: "TOYS",
    titletwo: "Donate a toy",
    icon: "/img/categories/icon/toyicon.png",
    description:
      "Spread joy and make a child's day by donating your gently used toysYour donations can bring smiles, laughter, and endless hours of play to children in need.Help us create magical moments and inspire imagination through the power of play.",
    ready: "Pass on the joy of play.",
    imageSrc: "/img/categories/img/toy.png",
  },
  {
    title: "HOME ESSENTIAL",
    titletwo: "Donate home-essential",
    icon: "/img/categories/icon/homeicon.png",
    description:
      "Help create safe and comfortable homes by donating essential items.Your contributions can provide warmth, nourishment, and a sense of security to individuals and families facing challenging circumstances.",
    ready: "Make a house feel like a home.",
    imageSrc: "/img/categories/img/home.png",
  },
  {
    title: "FOOD",
    titletwo: "Donate a food",
    icon: "/img/categories/icon/foodicon.png",
    description:
      "Your contributions can provide nourishment, support food security, and make a direct impact on individuals and families in need.together, we can ensure that no one goes to bed hungry.",
    ready: "Share the abundance and support those in need.",
    imageSrc: "/img/categories/img/food.png",
  },
  {
    title: "CLOTHES",
    titletwo: "Donate a clothe",
    icon: "/img/categories/icon/clothesicon.png",
    description:
      "Give the gift of warmth and dignity by donating your gently used clothing.Help us clothe those who are less fortunate and make a positive impact on their lives.",
    ready: "Pass on the gift of style",
    imageSrc: "/img/categories/img/book.png",
  },
];

const Category = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const updateCategory = () => {
      const currentCategory = categories[currentCategoryIndex];
      // Update DOM elements with category data
      // ... (similar to your original JavaScript logic) ...
    };
    updateCategory();
  }, [currentCategoryIndex]); // Update on index change

  const showNextCategory = () => {
    if (isTransitioning) return;

    const nextCategoryIndex = (currentCategoryIndex + 1) % categories.length;

    setIsTransitioning(true);
    // Handle image transition animation using CSS classes (optional)
    setTimeout(() => {
      setCurrentCategoryIndex(nextCategoryIndex);
      setIsTransitioning(false);
    }, 500);
  };

  const showPreviousCategory = () => {
    if (isTransitioning) return;

    const previousCategoryIndex =
      currentCategoryIndex === 0
        ? categories.length - 1
        : currentCategoryIndex - 1;

    setIsTransitioning(true);
    // Handle image transition animation using CSS classes (optional)
    setTimeout(() => {
      setCurrentCategoryIndex(previousCategoryIndex);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className={styles.container}>
      <div id="image-section" className={styles.box}>
        <img
          id="image-section"
          className={styles.box}
          src={
            process.env.PUBLIC_URL + categories[currentCategoryIndex].imageSrc
          }
          alt="toot"
        />
      </div>

      <div className={styles.info}>
        <div className={styles.header}>
          <h1 className={styles.headerone}>Donate Your</h1>
          {/* Handle category title and button clicks */}
          <a href="#" onClick={showPreviousCategory}>
            <img
              id="back-button"
              className={styles.arrowleft}
              src="./img/categories/arrow/leftarrow.png"
              alt="Previous Category"
            />
          </a>
          <a href="#" onClick={showNextCategory}>
            <img
              id="forward-button"
              className={styles.arrowright}
              src="./img/categories/arrow/rightarrow.png"
              alt="Next Category"
            />
          </a>
        </div>

        <div className={styles.label}>
          <p className={styles.title}>
            <span className={styles.first}>Donate Your</span>
            <span className={styles.span}></span>
            <span className={styles.second} id="category-title">
              {categories[currentCategoryIndex].title}
            </span>
          </p>
        </div>

        <div className={styles.icon}>
          <img
            id="category-icon"
            src={process.env.PUBLIC_URL + categories[currentCategoryIndex].icon}
            alt="Category Icon"
          />
        </div>

        <div className={styles.para}>
          <p id="category-description">
            {categories[currentCategoryIndex].description}
          </p>
        </div>

        <div className={styles.ready}>
          <p id="category-ready">{categories[currentCategoryIndex].ready}</p>
        </div>

        <div className={styles.donatb}>
          <a href="#">
            <button className={styles.button2}>Donate Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category;