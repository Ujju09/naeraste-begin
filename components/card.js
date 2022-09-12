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
          justifyContent: "start",
        }}
      >
        <Link href={props.url}>
          <button className={styles.button}>{props.cta}</button>
        </Link>
      </div>
    </div>
  );
}
