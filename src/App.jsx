import { useEffect, useState } from 'react'
import './styles/App.css';
import CardList from './components/CardList';


function App() {
  // const [data, setData] = useState([]) // Declare data and setData here
  const [games, setGames] = useState([
    { name: 'Chess', description: 'A strategic board game for two players.' },
    { name: 'Monopoly', description: 'A game of buying and trading properties.', quantity: 5 },
  ]);
  const [count, setCount] = useState(0) // Declare count and setCount here


  // useEffect(() => {
  //   fetch('https://localhost:7114/Product')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error('Errror', error))
  // }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {

  //       const response = await fetch('https://localhost:7114/Product', { method: 'GET' });
  //       const result = await response.json();
  //       console.log(result[0].name);
  //       setData(result)
  //     } catch (error) {
  //       console.log('Errorrr: ', error)
  //     }
  //   };
  //   fetchData();

  // }, []);
  // console.log(data);


  return (
    <>
      <div className='banner'>
        <h1>Board Game Library</h1>
      </div>

      {games.map((game, index) => (
        <div key={index} className='game-box'>
          <h2>{game.name}</h2>
          <p>{game.description}</p>
          <p>Quantity: {game.quantity}</p>
          <button onClick={() => setCount(count + 1)}>Click me!</button>
          <p>Count: {count}</p> {/* Display the count */}
        </div>

      ))}



      <CardList />
    </>
  )
}

export default App
