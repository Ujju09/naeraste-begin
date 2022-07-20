/** @format */

import styles from "../styles/Home.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Newsletter() {
  const subjects = ["Science", "Social Science", "Maths"];
  const paths = ["science", "social", "maths"];


  return (
    <div className={styles.main}>
      <div className={styles.community}>
        <h1 className={styles.textGradient}>Making every student lucky.</h1>
      </div>
      <div
        style={{
          color: "#D05E70",
          display: "flex",
          flex: "1",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          width: "100vw",
          height: "100%",
          backgroundColor: "#1B3EA8",
        }}
      >
        <Image src="/logoSVG.svg" alt="logo" width={300} height={300} />
        <h1 className={styles.title}>
          Let&apos;s begin your journey at naeRaste
        </h1>
        <p
          style={{
            color: "white",
            fontSize: "1rem",
            padding: "10px",
            textAlign: "center",
          }}
        >
          Currently, we are offering resources for class 9th students. One step
          at a time.
        </p>
        <div className={styles.grid}>
          {subjects.map((subject, index) => (
            <Link href={`https://${paths[index]}.naeraste.com/`} key={index}>
              <div className={styles.card}>
                <h3>{subject} →</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.community}>
        <h1 className={styles.textGradient}>
          {" "}
          naeRaste <br />
          नए रास्ते <br />
        </h1>
      </div>
    </div>
  );
}
