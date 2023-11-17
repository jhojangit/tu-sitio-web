import './App.css'

import { HashRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './components/home/Home';
import Prices from './components/pricesPage/Prices';

function App() {



  return (

    <HashRouter>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/prices" element={<Prices/>}/>

        <Route path='*' element={<h1>Esta ruta no existe</h1>} />


      </Routes>


    </HashRouter>
  );
}

export default App
