/** @format */

import styles from "../styles/Home.module.css";
import Link from "next/link";
import Card from "./card";

import Image from "next/image";
export default function Newsletter() {
  const subjects = ["Science", "Social Science", "Maths"];
  const paths = ["science", "social", "maths"];
  const descriptions = [
    "Science lets you explore the world around you. It helps you understand the world and how it works.",
    "Social science is concerned with society and the relationships among individuals within a society.",
    "Doing maths is like finding patterns and solving puzzles. The best way to learn maths is to do lots of maths.",
  ];

  return (
    <div className={styles.main}>
      <div className={styles.community}>
        <h1 className={styles.textGradient}>What are you learning today?</h1>
        <Image src="/ltoday.svg" width={140} height={140} alt="Smiling Sun" />
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
        <div className={styles.grid}>
          {subjects.map((_, index) => (
            <Card
              key={index}
              subject={subjects[index]}
              description={descriptions[index]}
              url={`https://${paths[index]}.naeraste.com/`}
              cta="Start Learning"
            />
          ))}
          <Card
            subject={`Participate`}
            description={`Could you participate in our research? It will help you become better learners and help us improve the learning platform.`}
            url={`https://research.naeraste.com/`}
            cta={`Know More`}
          />
        </div>
      </div>
      <div className={styles.community}>
        <h1 className={styles.textGradient}>
          {" "}
          nae raste <br />
          नए रास्ते
        </h1>
        <h4 className={styles.title}>We are making every student lucky.</h4>
      </div>
    </div>
  );
}
