/** @format */

import styles from "../styles/Home.module.css";
import Link from "next/link";
import Card from "./card";
import Script from "next/script";

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
      </div>
      <Image src="/ltoday.svg" width={140} height={140} alt="Smiling Sun" />
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

      <footer className={styles.footer}>
        <div className={styles.footerdiv}>
          <ul>
            <li>
              <a href="https://twitter.com/naeraste">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 512 417"
                  className="handle"
                >
                  <path d="M459.37 104.22c.32 4.54.32 9.1.32 13.64 0 138.72-105.58 298.56-298.55 298.56-59.45 0-114.68-17.22-161.14-47.1 8.45.97 16.57 1.3 25.34 1.3 49.05 0 94.21-16.58 130.27-44.84A105.12 105.12 0 0 1 57.51 253a132.7 132.7 0 0 0 19.81 1.62c9.42 0 18.84-1.3 27.61-3.57A104.95 104.95 0 0 1 20.8 148.07v-1.3a105.68 105.68 0 0 0 47.43 13.32A104.86 104.86 0 0 1 21.44 72.7c0-19.49 5.2-37.36 14.3-52.95a298.27 298.27 0 0 0 216.36 109.8c-1.62-7.8-2.6-15.91-2.6-24.03C249.5 47.69 296.28.58 354.44.58c30.2 0 57.5 12.67 76.67 33.14a206.6 206.6 0 0 0 66.6-25.34 104.65 104.65 0 0 1-46.14 57.83c21.12-2.28 41.59-8.13 60.43-16.25a225.57 225.57 0 0 1-52.63 54.26z"></path>
                </svg>
              </a>
            </li>
            <li>© nae raste {new Date().getFullYear()}</li>
            <li>
              <a href="https://m.youtube.com/channel/UCGypumUZB0u4Q7Rno87DpZw/featured">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="13"
                  className="handle"
                >
                  <path d="M15.6 2c.4 1.4.4 4.4.4 4.4s0 3-.4 4.4c-.2.8-.8 1.4-1.5 1.6-1.4.4-6.1.4-6.1.4s-4.7 0-6-.4c-.8-.2-1.4-.8-1.6-1.6C0 9.4 0 6.4 0 6.4S0 3.4.4 2C.6 1.2 1.2.6 1.9.4 3.3 0 8 0 8 0s4.7 0 6 .4c.8.2 1.4.8 1.6 1.6zM6.4 9.2l4.8-2.8-4.8-2.8v5.6z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <Script
          async
          data-uid="b3ea752d78"
          src="https://artisanal-producer-6695.ck.page/b3ea752d78/index.js"
        ></Script>
      </footer>
    </div>
  );
}
