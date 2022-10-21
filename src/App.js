import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import CharDisplay from './CharDisplay';
import Counter from './Counter';

function App() {
  const [chars, setChars] = useState([])
  const [favorites, setFavorites] = useState([])

  const getAllChars = () => {
    axios.get('https://hp-api.herokuapp.com/api/characters')
      .then(res => setChars(res.data))
  }

  useEffect(() => {
    getAllChars()
  }, [])

  const addToFavs = char => {
      setFavorites(prevState => [...prevState, char])
      setChars(prevState => prevState.filter(elem => elem.name !== char.name))
  }

  // console.log(chars)
  return (
    <div className="App">
      {/* <Counter/> */}
      <div>
        <h1>All Chars</h1>
      {chars.map((char, index) => {
        return <CharDisplay char={char} addToFavs={addToFavs}/>
      })}
      </div>

      <div>
        <h1>Favorites</h1>
        {favorites.map((char, index) => {
        return <CharDisplay char={char} />
      })}
      </div>
    </div>
  );
}

export default App;
