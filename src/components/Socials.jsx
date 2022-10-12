import React from "react";

//Importieren der FontAwesomeIcons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

//Importieren der CSS Files
import styles from "../css/Socials.module.css";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <a
        href="https://www.youtube.com/c/SyroWorkout"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faYoutube}
          className={styles.icon}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Join Us On Youtube!"
        />
      </a>
      <a href="https://discord.gg/YRBFkUKGqr" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faDiscord}
          className={styles.icon}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Join Us On Discord!"
        />
      </a>
      <a
        href="https://www.instagram.com/nadine_syw/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className={styles.icon}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Nadine On Instagram!"
        />
      </a>
      <a
        href="https://www.instagram.com/pascal_ghanimi/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className={styles.icon}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Pascal On Instagram!"
        />
      </a>
    </div>
  );
};

export default Socials;
