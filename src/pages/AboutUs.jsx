//Import Components
import BackgroundWrapper from "../components/BackgroundWrapper";

//Import Images
import nadineSM from "../images/nadineSM.jpg";
import nadineMD from "../images/nadineMD.jpg";
import nadineXL from "../images/nadineXL.jpg";
import pascalSM from "../images/pascalSM.jpg";
import pascalMD from "../images/pascalMD.jpg";
import pascalXL from "../images/pascalXL.jpg";

//Import CSS
import styles from "../css/AboutUs.module.css";

const AboutUs = () => {
  return (
    <BackgroundWrapper>
      <div className={styles["about-us"]}>
        <div className={styles["section-one"]}>
          <h2 className={styles["about-us-header"]}>About Us</h2>
          <p className={styles["about-us-information"]}>
            Welcome to our at home workout page. We love doing sports. Therefore
            we both also do our Master of Science in Sports. We provide some
            free full body workout plans that include exercises and difficulties
            for everyone. We try to include as much scientific data when
            creating our workouts and would love to help you achieve your goals
            as fast as possible!
          </p>
        </div>
        <div className={styles["section-two"]}>
          <div className={styles["gradient-background"]}>
            <div className={styles["profile-picture-nadine"]}>
              <img
                className={styles["profile-picture"]}
                src={nadineSM}
                srcSet={`${nadineSM} 500w, ${nadineMD} 900w, ${nadineXL}`}
                alt="profile of Nadine from the workout channel Syro Workout"
              />
            </div>
          </div>
        </div>
        <div className={styles["section-three"]}>
          <div className={styles["gradient-background"]}>
            <div className={styles["profile-picture-pascal"]}>
              <img
                className={styles["profile-picture"]}
                src={pascalSM}
                srcSet={`${pascalSM} 500w, ${pascalMD} 900w, ${pascalXL}`}
                alt="profile of Pascal from the workout channel Syro Workout"
              />
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default AboutUs;
