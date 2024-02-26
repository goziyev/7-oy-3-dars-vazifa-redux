import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.square} ${styles.twitch}`}>
          <span className={styles.one}></span>
          <span className={styles.two}></span>
          <span className={styles.three}></span>
          <div className={styles.circle}>
            <h2 className={styles.DrugRadar}>Welcome Home page</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
