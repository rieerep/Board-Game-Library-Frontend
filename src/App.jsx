import { useEffect, useState } from 'react'
import './styles/App.css';


function App() {
  const [data, setData] = useState([]) // Declare data and setData here
  const [games, setGames] = useState([
    { name: 'Chess', description: 'A strategic board game for two players.' },
    { name: 'Monopoly', description: 'A game of buying and trading properties.', quantity: 5 },
  ]);


  useEffect(() => {
    fetch('http://localhost:5000/api/get-all-games')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Errror', error))
  }, [])

  return (
    <>
    <div className='banner'>
      <h1>Board Game Library</h1>
      </div>
      <div>

      </div>
      {games.map((game, index) => (
        <div key={index} className='game-box'>
          <h2>{game.name}</h2>
          <p>{game.description}</p>
          <p>Quantity: {game.quantity}</p>
        </div>
      ))}


      <div>
        {data.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

    </>
  )
}

export default App
