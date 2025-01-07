import styles from "./Plan.module.css";

import playIcon from "../../assets/icon-music.svg";

function Plan() {
  return (
    <div className={styles.plan}>
      <img src={playIcon} alt="" className={styles.icon} />
      <div>
        <h2 className={styles.subHead}>Annual Plan</h2>
        <p className={styles.price}>$59.99/year</p>
      </div>
      <a href="#" className={styles.link}>
        <p className={styles.change}>Change</p>
      </a>
    </div>
  );
}

export default Plan;
