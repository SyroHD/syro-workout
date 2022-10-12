import "./App.css";

import React, { useRef, useState } from "react";

//Component Import
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import MouseEffect from "./components/MouseEffect";

//Page Import
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Challenges from "./pages/Challenges";
import AboutUs from "./pages/AboutUs";

//Import CSS Styles
import styles from "./css/App.module.css";

function App() {
  //Scroll Effect
  const progressBar = useRef();
  const [progress, setProgress] = useState();
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function () {
    setProgress((window.scrollY / totalHeight) * 100);
  };

  return (
    <div>
      <MouseEffect />
      <div>
        <div
          id={styles["progress-bar"]}
          ref={progressBar}
          style={{ height: `${progress}%` }}
        ></div>
        <div id={styles["scroll-path"]}></div>
        <div id={styles.percent}></div>
        <Navbar />
        <div className={styles["scroll-area"]} id="home">
          <Home />
        </div>
        <div className={styles["scroll-area"]} id="workout">
          <Workouts />
        </div>
        <div className={styles["scroll-area"]} id="challenges">
          <Challenges />
        </div>
        <div className={styles["scroll-area"]} id="about-us">
          <AboutUs />
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default App;
