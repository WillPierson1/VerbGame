export default function VerbConjugation({
  personalPronoun,
  answer,
  submit,
  width,
}) {
  // console.log("Submit prop:", submit);
  // console.log("Type of submit:", typeof submit);
  const inputId = "input-" + personalPronoun;

  // isScoreCard ?
  if (answer) {
    // console.log(answer["answers"]);
    // console.log(personalPronoun);
  }

  function getAnswer(props) {
    // Handle Answer

    for (const [key, value] of Object.entries(answer["answers"])) {
      // console.log(`Key: ${key}, Value: ${JSON.stringify(value)}`);

      // console.log(value["personalPronoun"]);
      if (value["personalPronoun"] == personalPronoun && width > 500) {
        // Handle with here!
        if (personalPronoun == "ich") {
          // Remove buttons

          const resetButton = document.getElementById("reset");
          const submitButton = document.getElementById("submit");
          resetButton.remove();
          submitButton.remove();
        }

        console.log("THIS", personalPronoun);

        if (value["Answer"] == value["Conjugation"]) {
          return (
            <>
              <p className="text-green-400 font-bold">{value["Answer"]}</p>
            </>
          );
        } else if (value["Answer"] == "") {
          return (
            <>
              <p className="text-red-800 font-bold">You entered nothing.</p>
            </>
          );
        } else {
          return (
            <>
              <p>
                <span className="text-red-800 font-bold">
                  {value["Answer"]}
                </span>

                <span className="text-green-300 font-bold pl-4">
                  {value["Conjugation"]}
                </span>
              </p>
            </>
          );
        }
      }
    }
  }

  return (
    <>
      {answer && (
        <>
          <p className="justify-self-center self-center pronoun">
            {" "}
            {personalPronoun}{" "}
          </p>

          <div className="bg-gray-500 opacity-70 text-gray-400 dark:text-gray-200 p-2 rounded col-span-2">
            {getAnswer()}
          </div>
        </>
      )}

      {!answer && (
        <>
          <p
            className="justify-self-center self-center pronoun"
            // onKeyDown={}
          >
            {" "}
            {personalPronoun}{" "}
          </p>

          <input
            className="bg-gray-500 opacity-70 text-gray-400 dark:text-gray-200 p-2 rounded col-span-2"
            type="text"
            name="input"
            id={inputId}
            placeholder="Enter the correct conjugation"
          />
        </>
      )}
    </>
  );
}
