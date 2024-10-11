import React from "react";
import styled from "styled-components";
import photo1 from "./img/about.png";
import photo2 from "./img/aboutus.png";
import photo3 from "./img/01.png";
import photo4 from "./img/02.png";
import photo5 from "./img/03.png";
import photo6 from "./img/04.png";
import photo7 from "./img/05.png";
import photo8 from "./img/mission.png";
import photo9 from "./img/team1.png";
import photo10 from "./img/team2.png";
import photo11 from "./img/team3.png";
import photo12 from "./img/Image.png";

const Wrapper = styled.div`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .image-container {
    position: relative;
  }

  .img-text {
    position: absolute;
    left: 30%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
  }

  #imgtext {
    color: #fff;
    font-family: "Sue Ellen Francisco", sans-serif;
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.2;
  }

  #imgtext2 {
    color: #fff;
    font-family: "Shippori Mincho", sans-serif;
    font-size: 4.5rem;
    font-weight: 800;
    line-height: 1.2;
  }

  img {
    width: 100%;
    height: auto;
  }

  .aboutus {
    width: 100%;
    height: auto;
    border-radius: 10px;
    background: var(--White, #ffffff);
    box-shadow: 0px 10px 25px 0px rgba(33, 52, 48, 0.08);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 45% 50%;
    gap: 50px;
    margin-top: 50px;
    justify-content: end;
  }

  .grid-item {
    background-color: #ffffff;
    margin-bottom: 20px;
  }

  #img {
    margin-left: 70px;
    width: 400px;
    height: 350px;
  }

  .Quotes {
    right: -15px;
    top: -47px;
    position: relative;
    width: 350px;
    background-color: #213430;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #aboutusicon {
    display: inline-block;
    color: rgb(255, 255, 255);
    font-size: 50px;
  }

  #Qtext {
    color: #fff;
    font-family: Shippori Mincho;
    font-size: 20px;
    font-weight: 800;
    line-height: 120%;
    margin-left: 5px;
  }

  #abouttext1 {
    color: #ff6d6d;
    font-family: Sue Ellen Francisco;
    font-size: 35px;
    font-weight: 400;
    line-height: 108.3%;
    /* 37.905px */
    margin-left: 40px;
  }

  #abouttext2 {
    color: #2e4049;
    font-family: Shippori Mincho;
    font-size: 30px;
    font-weight: 800;
    line-height: 120%;
    margin-left: 40px;
  }

  #abouttext3 {
    color: #727272;
    font-family: Work Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 130%;
    /* 26px */
    margin-left: 40px;
  }

  #abouttext4 {
    color: #538582;
    text-align: left;
    font-family: Work Sans;
    font-size: 20px;
    font-style: normal;
    line-height: 100%;
    /* 26px */
  }

  .text4 {
    padding: 20px;
    background-color: #def1f0;
    margin-left: 40px;
    display: inline-table;
  }

  .btnabout {
    width: 200px;

    position: relative;
    left: 46%;
    transform: translateX(-50%);
    margin-top: 20px;
    display: block;
  }

  .buttonabout {
    border-radius: 34px;
    background-color: #2e4049;
    padding: 17.5px 28.6px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    font-size: 14.32px;
    color: #fff;
  }

  .buttonabout:hover {
    background-color: rgb(42, 132, 154);
  }

  hr {
    width: 100%;
    margin: auto;
  }

  .clients {
    width: 1490px;
    height: auto;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--White, #ffffff);
    margin-top: 80px;
    /* Shadow */
    box-shadow: 0px 10px 25px 0px rgba(33, 52, 48, 0.08);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
  }

  .clients img {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 5px 10px;
    margin-left: 130px;
  }

  .mission {
    width: 1490px;
    height: auto;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--White, #ffffff);
    margin-top: 80px;
    /* Shadow */
    box-shadow: 0px 10px 25px 0px rgba(33, 52, 48, 0.08);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 80px;
  }

  .content {
    margin-right: 80px;
    margin-left: 40px;
  }

  #ourgoal {
    color: #2e4049;
    font-family: Shippori Mincho;
    font-size: 35px;
    font-style: normal;
    font-weight: 800;
    line-height: 120%;
    margin-bottom: 20px;
  }

  #goaltext {
    color: #727272;
    font-family: Work Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400px;
    line-height: 130%;
  }

  #tag1icon {
    color: #ff6d6d;
  }

  #tag1 {
    color: #727272;
    font-family: Work Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 10px;
    line-height: 1px;
    padding: 15px;
    border-radius: 45px;
    background: #f2f2f2;
    display: inline-block;
    align-items: center;
    margin-top: 0px;
    margin-left: 10px;
    margin-bottom: 0px;
  }

  #tag2 {
    color: #727272;
    font-family: Work Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 10px;
    line-height: 10px;
    padding: 15px;
    border-radius: 45px;
    background: #f2f2f2;
    display: inline-block;
    align-items: center;
    margin-top: 0px;
    margin-left: 30px;
  }

  #tag3 {
    color: #727272;
    font-family: Work Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 1px;
    line-height: 0px;
    padding: 15px;
    border-radius: 45px;
    background: #f2f2f2;
    display: flex;
    align-items: center;
    margin-top: 0px;
    margin-left: 3px;
    display: inline-block;
  }

  #tag4 {
    color: #727272;
    font-family: Work Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 10px;
    line-height: 10px;
    padding: 15px;
    border-radius: 45px;
    background: #f2f2f2;
    display: inline-block;
    align-items: center;
    margin-top: 5px;
    margin-left: 30px;
  }

  #tag5 {
    color: #727272;
    font-family: Work Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 10px;
    line-height: 10px;
    padding: 15px;
    border-radius: 45px;
    background: #f2f2f2;
    display: inline-block;
    align-items: center;
    margin-top: 0px;
    margin-left: 3px;
  }

  #goaltext2 {
    color: #727272;
    font-family: Work Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-top: 20px;
    margin-left: 3px;
  }

  #ourmission {
    color: #2e4049;
    font-family: Shippori Mincho;
    font-size: 2.5rem;
    font-weight: 800;
    margin-left: 2rem;
  }

  #missiontext {
    color: #727272;
    font-family: Work Sans;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    margin-left: 2rem;
  }

  .image-container {
    position: relative;
    display: inline-block;
    margin-left: 2rem;
    text-align: center;
    padding: 50px 0;
    margin: 0;
    padding: 0;
  }

  #missionimg {
    height: auto;
  }

  .caption {
    top: -85px;
    right: 80px;
    position: relative;
    text-align: center;
    padding: 10px 20px 50px 10px;
    background: #77d7d3;
    display: flex;
    width: 300px;
    flex-direction: column;
    align-items: center;
    margin-left: 110px;
  }

  #textimg {
    color: #2e4049;
    font-family: Shippori Mincho;
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 5px;
  }

  #textimg2 {
    color: #2e4049;
    font-family: Work Sans;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.3;
    margin: 0;
  }

  .team {
    width: 100%;
    height: 800px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #f1eeec;
    margin: auto;
    box-shadow: 0px 10px 25px 0px rgba(33, 52, 48, 0.08);
    position: relative;
  }

  #teamtext1,
  #teamtext2 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  #teamtext1 {
    color: #ff6d6d;
    font-size: 35px;
    font-weight: 400;
    line-height: 108.3%;
    bottom: 600px;
    font-family: Sue Ellen Francisco;
  }

  #teamtext2 {
    color: #2e4049;
    font-size: 40px;
    font-weight: 800;
    line-height: 120%;
    bottom: 550px;
  }

  #teamimg1,
  #teamimg2,
  #teamimg3 {
    position: absolute;
  }

  #teamimg1 {
    width: 244px;
    height: 350px;
    bottom: 160px;
    left: 20%;
  }

  #teamimg2 {
    width: 244px;
    height: 350px;
    bottom: 160px;
    left: 40%;
  }

  #teamimg3 {
    width: 244px;
    height: 350px;
    bottom: 160px;
    left: 60%;
  }

  #textimg1,
  #ttextimg2,
  #ttextimg3 {
    position: absolute;
    color: #2e4049;
    font-size: 20px;
    font-weight: 800;
    line-height: 120%;
    text-align: center;
    bottom: 90px;
    left: 25%;
  }

  #ttextimg2 {
    left: 45%;
  }

  #ttextimg3 {
    left: 65%;
  }

  #teamtext {
    width: 230px;
    height: 380px;
    background-color: #77d7d3;
    position: absolute;
    bottom: 120px;
    left: 80%;
  }

  #teamtext3 {
    padding: 20px;
    border-radius: 60px;
    background-color: #2e4049;
    position: absolute;
    bottom: 240px;
    left: 52%;
    transform: translateX(-50%);
  }

  #teamicon {
    font-size: 30px;
    color: #fff;
  }

  #teamtext4 {
    color: #2e4049;
    font-size: 25px;
    font-weight: 800;
    line-height: 120%;
    text-align: center;
    position: absolute;
    bottom: 120px;
    left: 53%;
    transform: translateX(-50%);
  }

  #teamtext5 {
    width: 130px;
    color: #2e4049;
    font-size: 20px;
    font-weight: 400;
    line-height: 130%;
    text-align: center;
    position: absolute;
    bottom: 67px;
    left: 53%;
    transform: translateX(-50%);
    font-family: Work Sans;
    font-size: 20px;
  }

  .btnteam {
    position: absolute;
    bottom: 15px;
    left: 52%;
    transform: translateX(-50%);
  }

  .btnteam:hover button {
    background-color: rgb(42, 132, 154);
  }

  .buttonteam {
    border-radius: 34px;
    background: #2e4049;
    padding: 17.5px 28.6px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    font-size: 14.32px;
    color: #fff;
  }

  .iconteam1,
  .iconteam2,
  .iconteam3 {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 65px;
    font-size: 20px;
    gap: 10px;
  }

  .iconteam1 {
    left: 65%;
  }

  .iconteam2 {
    left: 45%;
  }

  .iconteam3 {
    left: 25%;
  }

  .newslitter {
    width: auto;
    height: 320px;
    flex-shrink: 0;
    border-radius: 10px;
    /* Shadow */
    box-shadow: 0px 10px 25px 0px rgba(33, 52, 48, 0.08);
    position: relative;
    background-color: #ff6d6d;
    margin: auto;
    margin-top: 20px;
  }

  #slitterimg {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    position: relative;
  }

  .slittertext {
    width: 20%;
    position: relative;
    bottom: 425px;
    left: 640px;
  }

  #slittertext1 {
    margin-left: 90px;
    color: #fff;
    font-family: Sue Ellen Francisco;
    font-size: 35px;
    font-style: normal;
  }

  #slittertext2 {
    color: #fff;
    font-family: Shippori Mincho;
    font-size: 40px;
    font-style: normal;
    margin-left: 25px;
    font-weight: 800;
    line-height: 120%;
  }

  #slittertext3 {
    color: #fff;
    text-align: center;
    font-family: Work Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    position: absolute;
    bottom: -60px;
    left: -180px;
    width: 660px;
  }

  .btnslitter {
    position: absolute;
    bottom: -160px;
    left: 90px;
  }

  .btnslitter :hover {
    background-color: rgb(42, 132, 154);
  }

  .buttonslitter {
    border-radius: 34px;
    background: #2e4049;
    padding: 17.5px 28.6px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    font-size: 14.32px;
    color: #fff;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <div className="image-container">
        <img src={photo1} alt="Image source not available" />
        <div className="img-text">
          <p id="imgtext">What We Do...</p>
          <p id="imgtext2">
            About our
            <br />
            Organization
          </p>
        </div>
      </div>
      <div className="aboutus">
        <div className="grid-container">
          <div className="grid-item">
            <img id="img" src={photo2} alt="Image source not available" />
            <div className="Quotes">
              <i className="fa fa-quote-left" id="aboutusicon"></i>
              <p id="Qtext">
                He is truly great who
                <br />
                has a great charity.
              </p>
            </div>
          </div>
          <div className="grid-item">
            <p id="abouttext1">About Us</p>
            <p id="abouttext2">
              Solutions to Help People
              <br />
              in Need and Save
              <br />
              the Planet
            </p>
            <p id="abouttext3">
              Through volunteering we experience our interconnectedness,
              <br />
              making our lives more meaningful. Getting involved in various
              <br />
              ways, we find friendship, develop trust, and link our
              <br />
              relationships. Threading these connections, we come to
              <br />
              belong as we contribute towards the same goals.
            </p>
            <div className="text4">
              <p id="abouttext4">
                Save the Children believes every child deserves a future.
              </p>
            </div>
            <a className="btnabout" href="#">
              <button className="buttonabout">MORE ABOUT</button>
            </a>
          </div>
        </div>
      </div>
      <div className="clients">
        <img id="climg1" src={photo3} alt="Image source not available" />
        <img id="climg2" src={photo4} alt="Image source not available" />
        <img id="climg3" src={photo5} alt="Image source not available" />
        <img id="climg4" src={photo6} alt="Image source not available" />
        <img id="climg5" src={photo7} alt="Image source not available" />
      </div>{" "}
      <div className="mission">
        <div className="content">
          <div className="grid-container">
            <div className="grid-item">
              <h2 id="ourgoal">Our Goal</h2>
              <p id="goaltext">
                Our primary goal is to make a lasting positive impact on the
                lives of individuals and communities in need.
              </p>
              <p id="tag1">
                <i className="far fa-check-circle" id="tag1icon"></i>Make
                Donation
              </p>
              <p id="tag2">
                <i className="far fa-check-circle" id="tag1icon"></i>Donation
                Reached 10M
              </p>
              <p id="tag3">
                <i className="far fa-check-circle" id="tag1icon"></i>Stuffs for
                Everyone
              </p>
              <p id="tag4">
                <i className="far fa-check-circle" id="tag1icon"></i>Become A
                Volunteer
              </p>
              <p id="tag5">
                <i className="far fa-check-circle" id="tag1icon"></i>Food For
                Poor People Daily
              </p>
              <p id="goaltext2">
                With your support, we can transform lives and build a brighter
                future for all.
              </p>
            </div>
            <div className="grid-item">
              <h2 id="ourmission">Our Mission</h2>
              <p id="missiontext">
                Our goal is to help those in need in all respects and create
                better opportunities. We accept food, clothes, appliances,
                books, home furniture, and toys.
              </p>
              <img
                id="missionimg"
                src={photo8}
                alt="Image source not available"
              />
              <div className="caption">
                <p id="textimg">20,000+</p>
                <p id="textimg2">Thousand People Helped</p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="team">
        <p id="teamtext1">Team</p>
        <p id="teamtext2">Meet Our Volunteers</p>
        <img id="teamimg1" src={photo9} alt="Image source not available" />
        <img id="teamimg2" src={photo10} alt="Image source not available" />
        <img id="teamimg3" src={photo11} alt="Image source not available" />
        <p id="teamtext">
          <p id="teamtext3">
            <i className="fas fa-hand-holding-heart	" id="teamicon"></i>
          </p>
          <p id="teamtext4">
            Become
            <br />a Volunteer
          </p>
          <p id="teamtext5">
            be a part of our
            <br />
            institute{" "}
          </p>
          <a className="btnteam" href="#">
            <button className="buttonteam">Join Us Today</button>
          </a>
        </p>
        <p id="textimg1">Martin Luther</p>
        <p id="ttextimg2">Keira Knightley</p>
        <p id="ttextimg3">Jack Sparrow</p>
        <div className="iconteam1">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
        </div>
        <div className="iconteam2">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
        </div>
        <div className="iconteam3">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
        </div>
      </div>{" "}
      <div className="newslitter">
        <img id="slitterimg" src={photo12} alt="Image source not available" />
        <div className="slittertext">
          <p id="slittertext1">join us</p>
          <p id="slittertext2">to better life</p>
          <p id="slittertext3">
            Save the Children believes every child deserves a future. In the
            Egypt. and <br />
            around the world, we give children a healthy start in life.
          </p>
          <a className="btnslitter" href="#">
            <button className="buttonslitter">Donate</button>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
