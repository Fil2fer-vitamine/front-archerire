import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHome from './pages/PageHome';
import Navbar from './components/Navbar';
import PageConnexion from './pages/PageConnexion';
import PageInformations from './pages/PageInformations';
import PageInscription from './pages/PageInscription';
import PageListeReservations from './pages/PageListeReservations';
import PagePhoto from './pages/PagePhoto';
import PageReservation from './pages/PageReservation';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<PageHome />} />
          <Route path='/pageConnexion' element={<PageConnexion />} />
          <Route path='/pageInformations' element={<PageInformations />} />
          <Route path='/pageInscription' element={<PageInscription />} />
          <Route
            path='/pageListeReservations'
            element={<PageListeReservations />}
          />
          <Route path='/pagePhoto' element={<PagePhoto />} />
          <Route path='/pageReservation' element={<PageReservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
