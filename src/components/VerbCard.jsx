import VerbConjugation from "./VerbConjugation";

export default function VerbCard({ verb , verbInfo }) {

    const verbGridInputs = document.querySelectorAll('input'); // Node list

    function handleSubmit(props){

        // Loop through each input                                ----
        // Compare value of text input to value of API call       ----
        // Put correct inputs in green text                       ----
        // Put correct conjugation from API next to incorrect items in input box, red text
        // Replace submit and and reset with NEXT button
        // Save to LocalStorage

        console.log(verbInfo)
        console.log(verbInfo['data']['PRASENS']);
        const apiKeys = ["S1", "S2", "S3", "P1", "P2", "P3", "P3"]

        for(let i=0; i < verbGridInputs.length; i++){
            const userInput = verbGridInputs[i];
            const userInputValue = verbGridInputs[i].value;

            // console.log(verbGridInputs[i])
            const apiResult = (verbInfo['data']['PRASENS'][apiKeys[i]][0])

            if ((userInputValue != "") && (userInputValue.toUpperCase().trim() == apiResult.toUpperCase())){
                // User answered correctly
                userInput.style.color = '#00ff5e';
            } else if ((userInputValue != "") && (userInputValue.toUpperCase().trim() != apiResult.toUpperCase())){
                // User answered incorrectly
                userInput.style.color = '#ff491c';

                // Add correct answer to screen
                console.log('Incorrect', userInput)
                userInput.value = userInputValue + "    Incorrect! Correct: " + apiResult;

            }

            // Maybe this should just be a render of the verb card
            // Then I can pass in the values given and the correct answer 
            // To a renderVerbCheck component which would handle the checks
            // And handle score logging ?
            // [{Conjugation: "Gehe", Answer: Geht}, {Conjugation: "Geht", Answer: "geht"}]
            //                Incorrect                               Correct

        }


    }

    function handleReset(){
        for(let i=0; i < verbGridInputs.length; i++){
            const userInput = verbGridInputs[i];
            userInput.value = "";
        }
    }

    return(
        <>
            <div 
                className="mx-auto block w-fit p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                >
                    <h5 className="mb-5 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{verb}</h5>
                    <div
                    id="verb-grid"
                    className="font-normal text-gray-700 dark:text-gray-400 grid grid-cols-3 gap-4">

                    {/* Grid System For Each Personal Pronoun */}

                    <VerbConjugation personalPronoun={"ich"} />
                    <VerbConjugation personalPronoun={"du"}/>
                    <VerbConjugation personalPronoun={"er / sie / es / man"}/>
                    <VerbConjugation personalPronoun={"wir"} />
                    <VerbConjugation personalPronoun={"ihr"} />
                    <VerbConjugation personalPronoun={"Sie"} />
                    <VerbConjugation personalPronoun={"Sie"} />
                </div>

                <div 
                className="flex mt-5">
                    <button
                    onClick={handleReset}
                    className="col-span-3 justify-self-center bg-red-500 p-2 m-2 w-50 rounded text-white font-bold"
                    >Reset</button>

                    <button
                    onClick={handleSubmit}
                    className="col-span-3 justify-self-center bg-green-600 p-2 m-2 w-50 rounded text-white font-bold"
                    >Submit</button>
                </div>

            </div>


        </>


    );
}