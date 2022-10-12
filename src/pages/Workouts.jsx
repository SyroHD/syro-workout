import React, { useState } from "react";

//Import Components
import BackgroundWrapper from "../components/BackgroundWrapper";
import SelectEquipment from "../components/SelectEquipment";
import SelectGender from "../components/SelectGender";
import SelectWeekday from "../components/SelectWeekday";
import MaleNoEquipment from "../workouts/male-no-equipment/MaleNoEquipment";
import MaleDumbbell from "../workouts/male-dumbbells/MaleDumbbells";
import FemaleNE from "../workouts/female-no-equipment/FemaleNE";
import FemaleDB from "../workouts/female-dumbbells/FemaleDB";

//Import CSS
import styles from "../css/Workouts.module.css";

const Workouts = () => {
  const [weightsSelected, setWeightsSelected] = useState(false);
  const [noWeightSelected, setNoWeightSelected] = useState(true);
  const [maleSelected, setMaleSelected] = useState(true);
  const [femaleSelected, setFemaleSelected] = useState(false);
  const [selectedDay, setSelectedDay] = useState(1);

  let handleSelectWeights = () => {
    setWeightsSelected(!weightsSelected);
    setNoWeightSelected(!noWeightSelected);
  };

  let handleSelectGender = () => {
    setMaleSelected(!maleSelected);
    setFemaleSelected(!femaleSelected);
  };

  let handleSelectDay = (day) => {
    setSelectedDay(day);
  };

  return (
    <BackgroundWrapper>
      <div className={styles["wrapper"]}>
        <div className={styles["btn-container"]}>
          <div className={styles["select-equipment"]}>
            <SelectEquipment
              weightsSelected={weightsSelected}
              noWeightSelected={noWeightSelected}
              onSelectWeights={handleSelectWeights}
            />
            <p className={styles["informational-text"]}>
              Dumbbells Or Bodyweight?
            </p>
          </div>
          <div className={styles["select-gender"]}>
            <SelectGender
              maleSelected={maleSelected}
              femaleSelected={femaleSelected}
              onSelectGender={handleSelectGender}
            />
            <p className={styles["informational-text"]}>
              Are You Male Or Female?
            </p>
          </div>
        </div>
        <div className={styles["select-weekday-container"]}>
          <SelectWeekday
            selectedDay={selectedDay}
            onDaySelect={handleSelectDay}
          />
        </div>

        <div className={styles["workouts"]}>
          {maleSelected && noWeightSelected && (
            <MaleNoEquipment selectedDay={selectedDay} />
          )}
          {maleSelected && weightsSelected && (
            <MaleDumbbell selectedDay={selectedDay} />
          )}
          {femaleSelected && noWeightSelected && (
            <FemaleNE selectedDay={selectedDay} />
          )}
          {femaleSelected && weightsSelected && (
            <FemaleDB selectedDay={selectedDay} />
          )}
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Workouts;
