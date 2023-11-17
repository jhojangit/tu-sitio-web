import './App.css'

import { HashRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './components/home/Home';
import Prices from './pages/pricesPage/Prices';

function App() {



  return (

    <HashRouter>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/prices" element={<Prices/>}/>

        <Route path='*' element={<h1>Esta ruta no existe 404</h1>} />


      </Routes>


    </HashRouter>
  );
}

export default App
