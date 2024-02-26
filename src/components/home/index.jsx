import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
const Navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.getItem('user')){
      Navigate('/login')
    }
  })
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
