import './App.css'

import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Price from './components/price/Price';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {



  return (

    <HashRouter>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/price" element={<Price/>} />

      </Routes>


    </HashRouter>
  );
}

export default App
