
import { useState, useEffect } from 'preact/hooks'

import './app.css'
import Card from './components/card/card';
import Search from './components/search/search';

function App() {

  const [catData, setCatData] = useState([]);
  
   const fetchCats = async (name) => {
    const url = `https://api.api-ninjas.com/v1/cats?name=${name}`;
   
    const headers = {
      'Content-Type': 'application/json',
      'X-Api-Key': import.meta.env.VITE_API_TOKEN,
    }
     
    const response = await fetch(url, {headers});
    // waits until the request completes...
    const data = await response.json(); 
    console.log('data', data);
    setCatData(data);
  }

  useEffect(() => {
    console.log('Cat Data', catData);
  }, [catData])


  return (
    <div>
      <h1>Cat Searching App</h1>
      <Search fetchCats={fetchCats}/>
      <div className="cat-grid">
        {catData && catData.map((cat) => (
          <Card key={cat.name} cat={cat}/>
        ))}
      </div>
    </div>
  )
}

export default App;