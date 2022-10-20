import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import CharDisplay from './CharDisplay';
import Counter from './Counter';

function App() {
  const [chars, setChars] = useState([])

  const getAllChars = () => {
    axios.get('https://hp-api.herokuapp.com/api/characters')
      .then(res => setChars(res.data))
  }

  useEffect(() => {
    getAllChars()
  }, [])

  console.log(chars)
  return (
    <div className="App">
      <Counter/>
      {/* {chars.map((char, index) => {
        return <CharDisplay char={char}/>
      })} */}
    </div>
  );
}

export default App;
