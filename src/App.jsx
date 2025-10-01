import { useState, useEffect } from 'react'

// Components
import Header from './components/Header'
import VerbCard from './components/VerbCard'
import ScoreIndicator from './components/ScoreIndicator'

// Helpers
import verbList from './helpers/verbList'
import fetchVerbInfo from './helpers/fetchVerbInfo'

// Functions 

function getRandomVerb(){
  // Decide which verb will be used

  const randomIndex = Math.floor(Math.random() * verbList.length);
  // setVerb(verbList[randomIndex])

  return verbList[randomIndex];
}

async function getVerbInfo(verb){
  // Pull API data for the given verb
  try{
    const verbInfo = await fetchVerbInfo(verb);
    return JSON.parse(verbInfo);

  } catch (error) {
    console.log(error);
  }
}

function App() {

  const [verb, setVerb] = useState(getRandomVerb()); // To be used when the submit button is pressed 
  const [verbInfo, setVerbInfo] = useState(null); // Grab data from the API based on the verb

  // Set the verbInfo whenever the verb state changes

  useEffect(() => {
    async function callAPI() {
      try{
        const verbInfo = await getVerbInfo(verb);
        setVerbInfo(verbInfo);
      } catch (error) {
        console.log(error);
      }
    }
    
    callAPI();
  }, [verb])


  return (
    <>

      <Header />

      <ScoreIndicator />

      <VerbCard verb={verb} verbInfo={verbInfo}/>
      
    </>
  )
}

export default App
