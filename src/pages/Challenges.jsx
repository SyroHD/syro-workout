//Import Components
import BackgroundWrapper from "../components/BackgroundWrapper";
import WeightLossChallenge from "../workouts/challenges/WeightLossChallenge";
import GetAthleticChallenge from "../workouts/challenges/GetAhleticChallenge";

//Import Images
import wallXL from "../images/wallXL.png";
import wallMD from "../images/wallMD.png";
import wallSM from "../images/wallSM.png";
import dumbbellOneSM from "../images/dumbbellOneSM.png";
import dumbbellOneMD from "../images/dumbbellOneMD.png";
import dumbbellOneXL from "../images/dumbbellOneXL.png";
import dumbbellTwoSM from "../images/dumbbellTwoSM.png";
import dumbbellTwoMD from "../images/dumbbellTwoMD.png";
import dumbbellTwoXL from "../images/dumbbellTwoXL.png";
import rollSM from "../images/rollSM.png";
import rollMD from "../images/rollMD.png";
import rollXL from "../images/rollXL.png";

import MondayFD from "../workouts/female-dumbbells/MondayFD";

//Import CSS
import styles from "../css/Challenges.module.css";
import { useState } from "react";

const Challenges = () => {
  const [weightLoss, setWeightLoss] = useState(true);
  const [getAthletic, setGetAthletic] = useState(false);

  const handleSelectChallenge = () => {
    setWeightLoss(!weightLoss);
    setGetAthletic(!getAthletic);
  };

  return (
    <BackgroundWrapper>
      <div className={styles["section-container"]}>
        <div className={styles["section-one"]}>
          <h2 className={styles["challenges-header"]}>Challenges</h2>
          <p className={styles["challenges-information"]}>
            Want a challenge? Then try one of our challenges for 30 to 90 days.
            At the moment, you can try our weight loss or get athletic
            challenge. We encourage you to do the recommended workouts around 3
            to 5 times a week. Regarding the weight loss challenge, we provide
            some different HIIT cardio workouts and you can just choose your
            favourite ones and do around one to three workouts on every workout
            day. The Get Athletic Challenge provides you with a full follow
            along workout plan.
          </p>
          <div className={styles["equipment-container"]}>
            <img
              className={styles["dumbbell-one"]}
              src={dumbbellOneSM}
              alt="Dumbbell"
              srcSet={`${dumbbellOneSM} 500w, ${dumbbellOneMD} 900w, ${dumbbellOneXL}`}
            />
            <img
              className={styles["foam-roll"]}
              src={rollSM}
              alt="Dumbbell"
              srcSet={`${rollSM} 500w, ${rollMD} 900w, ${rollXL}`}
            />
            <img
              className={styles["dumbbell-two"]}
              src={dumbbellTwoSM}
              alt="Dumbbell"
              srcSet={`${dumbbellTwoSM} 500w, ${dumbbellTwoMD} 900w, ${dumbbellTwoXL}`}
            />
          </div>
          <img
            className={styles["wall"]}
            src={wallSM}
            srcSet={`${wallSM} 500w, ${wallMD} 900w, ${wallXL}`}
            alt="stacker with dumbbells"
          />
        </div>
        <div className={styles["section-two"]}>
          <div className={styles["btn-container"]}>
            <div>
              <button
                onClick={handleSelectChallenge}
                className={weightLoss ? styles["btn-clicked"] : styles["btn"]}
              >
                WEIGHT LOSS
              </button>
            </div>
            <div>
              <button
                onClick={handleSelectChallenge}
                className={getAthletic ? styles["btn-clicked"] : styles["btn"]}
              >
                GET ATHLETIC
              </button>
            </div>
          </div>
          <div className={styles["workouts"]}>
            {weightLoss && <WeightLossChallenge />}
            {getAthletic && <GetAthleticChallenge />}
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Challenges;
