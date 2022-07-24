/** @format */

import styles from "../styles/Home.module.css";
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
          color: "black",
          display: "flex",
          flex: "1",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          width: "100vw",
          height: "100%",
          backgroundColor: "transparent",
        }}
      >
        <h1 className={styles.title}>
          Let&apos;s begin your journey at nae raste
        </h1>
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
          nae raste <br />
          नए रास्ते <br />
        </h1>
      </div>
    </div>
  );
}
