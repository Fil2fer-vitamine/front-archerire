import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogoHaut from './pages/LogoHaut';
import LogoBas from './pages/LogoBas';
import Navbar from './components/Navbar';
import PageInscription from './pages/PageInscription';
import PageConnexion from './pages/PageConnexion';
import PageInformations from './pages/PageInformations';
import PagePhoto from './pages/PagePhoto';
import PageReservation from './pages/PageReservation';
import PageHome from './pages/PageHome';
import PageActualites from './pages/PageActualites';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <LogoHaut /> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<PageHome />} />
          <Route path='/PageInscription' element={<PageInscription />} />
          <Route path='/PageConnexion' element={<PageConnexion />} />
          <Route path='/PageInformations' element={<PageInformations />} />
          <Route path='/PagePhotos' element={<PagePhoto />} />
          <Route path='/Reservation' element={<PageReservation />} />
          <Route path='/PageActualites' element={<PageActualites />} />
        </Routes>
        <LogoBas />
      </BrowserRouter>
    </div>
  );
}

export default App;
