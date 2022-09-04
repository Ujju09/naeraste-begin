/** @format */
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <h2>{props.subject}</h2>
      <p>{props.description}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Link href={props.url}>
          <button className={styles.button}>Start Learning</button>
        </Link>
      </div>
    </div>
  );
}
