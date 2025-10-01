import VerbConjugation from "./VerbConjugation";

export default function VerbCard({ verb }) {

    return(
        <>
            <div 
                className="mx-auto block w-fit p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                >
                    <h5 className="mb-5 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{verb}</h5>
                    <div
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
                    className="col-span-3 justify-self-center bg-green-600 p-2 m-2 w-50 rounded text-white font-bold"
                    >Submit</button>
                </div>

            </div>


        </>


    );
}