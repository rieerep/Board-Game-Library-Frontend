import { useEffect, useState } from 'react'
import './styles/App.css';
import CardList from './components/CardList.jsx';
import Footer from './components/Footer.jsx';
import MyPage from './components/MyPage.jsx';
import { Link, Routes, Route } from 'react-router-dom';


function App() {

  const [data, setData] = useState([]) // Declare data and setData here
  const [games, setGames] = useState([
    { name: 'Chess', description: 'A strategic board game for two players.' },
    { name: 'Monopoly', description: 'A game of buying and trading properties.', quantity: 5 },
  ]);
  const [count, setCount] = useState(0)


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
      <body className='body'>
        <div className='banner'>
          <h1>Board Game Library</h1>
        </div>
        <nav className='nav-bar'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mypage">My Page</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<CardList />}>
          </Route>
          <Route path="/MyPage" element={<MyPage />}>
          </Route>
        </Routes>


        <footer>
          <Footer />
        </footer>
      </body>
    </>
  )
}

export default App
