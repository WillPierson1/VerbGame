import { useEffect } from "react";

export default function fetchVerbInfo(verb, setVerbInfo){

    const requestOptions = {
        method: "GET"
    };

    // API Call

    async function getVerbInfo(){
        try{
            //await
            const getData = await fetch("https://api.willpierson.com/german-verbs-api?verb=" + verb.toLowerCase(), requestOptions)
            const result = await getData.text();

            return(result);
        }catch (error){
            console.log("Error whilst calling fetVerbInfo API: ", error);
        }
    }

    return getVerbInfo();

}