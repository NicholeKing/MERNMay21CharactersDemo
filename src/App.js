import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Form from './components/Form';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [listOfChars, setListOfChars] = useState([]);
  console.log(listOfChars);
  const addNew = myChar => {
    setListOfChars([...listOfChars, myChar]);
  }
  const updateIsAlive = idx => {
    // console.log("Coming to you from App.js!")
    // console.log(listOfChars[idx]);
    const charToUpdate = listOfChars[idx];
    charToUpdate.isAlive = !charToUpdate.isAlive;
    setListOfChars([...listOfChars]);
  }
  return (
    <div className="App container-fluid">
      <h1>List of characters</h1>
      <div className="row">
        <Form newChar={addNew}/>
        <Results myList={listOfChars} updateIsAlive={updateIsAlive}/>
      </div>
    </div>
  );
}

export default App;
