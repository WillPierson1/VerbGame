import VerbConjugation from "./VerbConjugation";
import { motion } from "motion/react";
import { use, useState } from "react";

export default function VerbCard({ verb, verbInfo }) {
  const [grid, setGrid] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  const verbGridInputs = document.querySelectorAll("input"); // Node list
  const verbCard = document.querySelector("#verbCard");

  const userAnswers = [];

  const handleSubmit = (props) => {
    if (grid === false) {
      setGrid(!grid);

      const apiKeys = ["S1", "S2", "S3", "P1", "P2", "P3"];

      for (let i = 0; i < verbGridInputs.length; i++) {
        const userInputValue = verbGridInputs[i].value;
        // console.log(verbGridInputs);
        // console.log(verbInfo);
        const apiResult = verbInfo["data"]["PRASENS"][apiKeys[i]];

        const elementId = verbGridInputs[i].getAttribute("id");

        userAnswers.push({
          personalPronoun: elementId.slice(6),
          Conjugation: apiResult,
          Answer: userInputValue,
        });
      }

      // Remove buttons here!
      props.target.parentElement.remove();

      console.log("Answers", userAnswers);

      verbCard.classList.remove("mx-auto");
      verbCard.classList.add("ml-auto", "mr-4");

      setAnswers(userAnswers);
      return answers;
    }
  };

  function handleReset() {
    for (let i = 0; i < verbGridInputs.length; i++) {
      const userInput = verbGridInputs[i];
      userInput.value = "";
    }
    verbCard.classList.add("mx-auto");
    verbCard.classList.remove("ml-auto", "mr-4");
    setGrid(false);
  }

  return (
    <>
      <div className="grid grid-cols-2">
        {(!grid || width >= 1025) && (
          <motion.div
            layout
            transition={{ duration: 0.4, ease: "easeIn" }}
            className={`${grid ? "col-span-1" : "col-span-2"}`}
          >
            <div
              id="verbCard"
              className={`verb-card-not-submitted col-span-2 ${
                grid ? "md:ml-auto" : "md:mx-auto"
              } mx-4 md:w-fit w-fill p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700`}
            >
              <h5 className="mb-5 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                {verb}
              </h5>
              <div
                id="verb-grid"
                className="font-normal text-gray-700 dark:text-gray-400 grid grid-cols-3 gap-4"
              >
                {/* Grid System For Each Personal Pronoun */}

                <VerbConjugation
                  personalPronoun={"ich"}
                  submit={handleSubmit}
                  width={width}
                />
                <VerbConjugation personalPronoun={"du"} />
                <VerbConjugation personalPronoun={"er / sie / es / man"} />
                <VerbConjugation personalPronoun={"wir"} />
                <VerbConjugation personalPronoun={"ihr"} />
                <VerbConjugation personalPronoun={"Sie"} />
              </div>

              <div className="flex justify-evenly mt-5">
                <button
                  id="reset"
                  onClick={handleReset}
                  className="col-span-3 justify-self-center bg-red-500 p-2 m-2 w-50 rounded text-white font-bold"
                >
                  Reset
                </button>

                <button
                  id="submit"
                  onClick={handleSubmit}
                  className="col-span-3 justify-self-center bg-green-600 p-2 m-2 w-50 rounded text-white font-bold"
                >
                  Submit
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {grid && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`col-span-2 lg:col-span-1 ${
              grid ? "lg:mr-auto" : "mx-auto"
            }`}
          >
            <div
              id="verbCard"
              className={`verb-card-not-submitted h-full  mx-auto w-fit p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700`}
            >
              <h5 className="mb-5 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                Scorecard
              </h5>
              <div
                id="verb-grid"
                className="font-normal text-gray-700 dark:text-gray-400 grid grid-cols-3 gap-4"
              >
                {/* Grid System For Each Personal Pronoun */}
                <VerbConjugation personalPronoun={"ich"} answer={{ answers }} />
                <VerbConjugation personalPronoun={"du"} answer={{ answers }} />
                <VerbConjugation
                  personalPronoun={"er / sie / es / man"}
                  answer={{ answers }}
                />
                <VerbConjugation personalPronoun={"wir"} answer={{ answers }} />
                <VerbConjugation personalPronoun={"ihr"} answer={{ answers }} />
                <VerbConjugation personalPronoun={"Sie"} answer={{ answers }} />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
