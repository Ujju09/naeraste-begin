/** @format */

import styles from "../styles/Home.module.css";
import { useState } from "react";
import striptags from "striptags";

export default function MCQ(props) {
  const [isSelected, setIsSelected] = useState(false);
  const alphabet = ["A", "B", "C", "D"];

  return (
    <div className={styles.question}>
      <p>{striptags(props.question)}</p>

      <div>
        {props.answer.map((answer, index) => {
          return (
            <div key={index} className={styles.answer}>
              {alphabet[index] + ". " + striptags(answer["text"])}
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "10px",
        }}
      >
        {
          <button
            className={
              isSelected ? styles.submitButton : styles.submitButtonDisabled
            }
          >
            Submit
          </button>
        }
      </div>
    </div>
  );
}
