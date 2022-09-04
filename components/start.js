/** @format */

import styles from "../styles/Home.module.css";
import Link from "next/link";
import Card from "./card";

import Image from "next/image";
export default function Newsletter() {
  const subjects = ["Science", "Social Science", "Maths", "Participate"];
  const paths = ["science", "social", "maths", "research"];
  const descriptions = [
    "Science lets you explore the world around you. It helps you understand the world and how it works.",
    "Social science is concerned with society and the relationships among individuals within a society.",
    "Doing maths is like finding patterns and solving puzzles. The best way to learn maths is to do lots of maths.",
    "Participate in our research. This will help you become better leaners and help us improve our learning platform.",
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
          {subjects.map((subject, index) => (
            <Card
              key={index}
              subject={subjects[index]}
              description={descriptions[index]}
              url={`https://${paths[index]}.naeraste.com/`}
            />
          ))}
        </div>
      </div>
      <div className={styles.community}>
        <h1 className={styles.textGradient}>
          {" "}
          nae raste <br />
          नए रास्ते
        </h1>
        <h4 className={styles.title}>Making every student lucky.</h4>
      </div>
    </div>
  );
}
