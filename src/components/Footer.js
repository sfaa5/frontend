import React from "react";
import styles from "../cssFiles/Footer.module.css"; // Import CSS module

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.upper}>
            <div className={styles.leftSide}>
              <div className={styles.leftSideUp}>
                <div className={styles.logo}>
                  <div className={styles.logoText}>GivingCircle</div>
                  <div className={styles.logoImg}>
                    <div className={styles.logoImg2}></div>
                  </div>
                </div>
                <p className={styles.para}>
                  Care about people to transforming their lives and exudes a
                  positives Impressiono believe. fundraising <br />
                  NGO organizations.
                </p>
              </div>
              <div className={styles.social}>
                <div className={styles.element}>
                  <img
                    className={styles.img}
                    src="../img/footer/twitter-2.png"
                    alt="Twitter"
                  />
                </div>
                <div className={styles.element}>
                  <img
                    className={styles.img}
                    src="/img/footer-icon/facebook.png"
                    alt="Facebook"
                  />
                </div>
                <div className={styles.element}>
                  <img
                    className={styles.img}
                    src="/img/footer-icon/instagram-2.png"
                    alt="Instagram"
                  />
                </div>
              </div>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.rightSideAll}>
                <div className={styles.rightSide1}>
                  <div className={styles.title1}>Get Involved</div>
                  <p className={styles.list}>
                    <span className={styles.span}>
                      About Us <br />
                      Volunteer
                      <br />
                    </span>
                    <span className={styles.listRed}>Causes</span>
                    <span className={styles.span}>
                      <br />
                      Events
                      <br />
                      <a>Financial Donations</a>
                    </span>
                  </p>
                </div>
                <div className={styles.rightSide2}>
                  <div className={styles.title1}>Contact</div>
                  <p className={styles.list2}>
                    660 down town , 88 cairo
                    <br />
                    <br />
                    help Need@walfare.com
                    <br />
                    22 88 000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.lower}>
            <img className={styles.line} src="" alt="Line" />
            <p className={styles.p}>
              Copyright © Walfare | Designed by sfsf - Powered by me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
