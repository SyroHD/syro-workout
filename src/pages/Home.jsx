import { NavHashLink as HashLink, NavHashLink } from "react-router-hash-link";

import BackgroundWrapper from "../components/BackgroundWrapper";

//Import Images
import smMainImage from "../images/HeaderSM.png";
import mdMainImage from "../images/HeaderMD.png";
import xlMainImage from "../images/HeaderXL.png";

//Import CSS
import styles from "../css/Home.module.css";

const Home = () => {
  return (
    <BackgroundWrapper>
      <div className={styles["wrapper"]}>
        <div className={styles["profile-wrapper"]}>
          <img
            className={styles["profile"]}
            src={xlMainImage}
            srcSet={`${smMainImage} 500w, ${mdMainImage} 900w, ${xlMainImage}`}
            alt="Syro Workout Profile"
          />
        </div>
        <div className={styles.information}>
          <h1>Syro Workout</h1>
          <p>
            Welcome to the official Syro Workout page! We provide the <br></br>
            best dumbbell workouts as well as bodyweight workouts at home.
            Choose your full body workout plan now and get started!
          </p>
          <HashLink to="#workout">
            <button className={styles.btn}>Start Workout</button>
          </HashLink>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Home;
