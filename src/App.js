import { useState, useEffect } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const[monsters, setMonsters] = useState([]);
  const[value, setValue] = useState("");
  const[newMonsters, setNewMonsters] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setMonsters(data))
    .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const filterMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(value));
    setNewMonsters(filterMonsters);
  }, [monsters, value])


  return(
     <div className="App">
        <h1 className="app-title">monsters rolodex</h1>  
        <SearchBox
          className="search-box"
          placeholder="search monsters"
          onSearch={(e) => setValue(e.target.value)}
        />
        <CardList monsters={newMonsters} />
      </div>
  )
}

export default App;
