import { useEffect, useState } from 'react'
import './styles/App.css';
import CardList from './components/CardList.jsx';
import Footer from './components/Footer.jsx';
import MyPage from './components/MyPage.jsx';
import About from './components/About.jsx';
import { Link, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <body className='body'>
        <div className='banner'>
          <h1>The Board Game Library</h1>
        </div>
        <nav className='nav-bar'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mypage">My Page</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<CardList />}>
          </Route>
          <Route path="/MyPage" element={<MyPage />}>
          </Route>
          <Route path="/About" element={<About />}>
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
