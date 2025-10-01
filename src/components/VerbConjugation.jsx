export default function VerbConjugation({ personalPronoun }){

    const inputId = "input-" + personalPronoun

    return(
        <>
            <p 
                className="justify-self-center self-center"
                > { personalPronoun } </p>
                <input 
                className="bg-gray-500 opacity-70 text-gray-400 dark:text-gray-200 p-2 rounded col-span-2"
                type="text" name="input-ich" id={inputId} 
                placeholder="Enter the correct conjugation"
            />
        </>
    )

}