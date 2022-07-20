/** @format */
import striptags from "striptags";
export default function Diksha(data) {
  const questions = data.data["questions"];
  console.log(questions);
  const questionsArray = Object.entries(questions);
  questionsArray.pop(questionsArray.length);
  console.log(questionsArray[0][1]["params"]["question"]);
  //   console.log(questions[0].params.question);
  return (
    <div>
      <h1>Diksha</h1>
      {questionsArray.map((question, index) => {
        return (
          <div key={index}>
            <h2>{striptags(question[1]["params"]["question"])}</h2>
            {/* <p>{question[1]["params"]["answer"]}</p> */}
          </div>
        );
      })}
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
