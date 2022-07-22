/** @format */

import styles from "../styles/Home.module.css";
import Script from "next/script";
import Image from "next/image";
import { useState } from "react";
import MCQ from "../components/questions";
export default function Diksha(data) {
  const questions = data.data["questions"];
  console.log(questions);
  const questionsArray = Object.entries(questions);
  questionsArray.pop(questionsArray.length); // remove last element as it contains different object.

  const [selected, setSelected] = useState([]);

  const [isSelected, setIsSelected] = useState(false);

  console.log(selected);

  return (
    <div className={styles.mainDiksha}>
      <Script
        id="MathJax-script"
        async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
      ></Script>
      <h1>Diksha</h1>
      <div className={styles.questionCard}>
        {questionsArray.map((question, index) => {
          // console.log(question[1]["params"]["media"]["params"]);
          return (
            <MCQ
              key={index}
              question={
                index + 1 + "." + " " + question[1]["params"]["question"]
              }
              answer={question[1]["params"]["answers"]}
            />
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://diksha.gov.in/assets/public/content/h5p/do_3129024747106304001535-latest/content/content/content.json"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
