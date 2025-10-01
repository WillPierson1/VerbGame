import VerbConjugation from "./VerbConjugation";

export default function VerbCard({ verb , verbInfo }) {

    const verbGridInputs = document.querySelectorAll('input'); // Node list

    function handleSubmit(props){

        // Loop through each input                                ----
        // Compare value of text input to value of API call       ----
        // Put correct inputs in green text
        // Put correct conjugation from API next to incorrect items in input box, red text
        // Replace submit and and reset with NEXT button
        // Save to LocalStorage

        console.log(verbInfo['data']['PRASENS']);
        const apiKeys = ["S1", "S2", "S3", "P1", "P2", "P3", "P3"]

        for(let i=0; i < verbGridInputs.length; i++){
            const userInput = verbGridInputs[i];
            const userInputValue = verbGridInputs[i].value;

            console.log(verbGridInputs[i])
            const apiResult = (verbInfo['data']['PRASENS'][apiKeys[i]][0])


            console.log(userInputValue);

            if(userInputValue == ""){
                console.log('1')
            } else if (userInputValue == null){
                console.log('2')
            }


            if ((userInputValue != "") && (userInputValue.toUpperCase().trim() == apiResult.toUpperCase())){
                // User answered correctly
                userInput.style.color = '#00ff5e';
            } else if ((userInputValue != "") && (userInputValue.toUpperCase().trim() != apiResult.toUpperCase())){
                // User answered incorrectly
                userInput.style.color = '#fb1115';
            }
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