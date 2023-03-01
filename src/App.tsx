import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHome from './pages/PageHome';
import LogoHaut from './pages/LogoHaut';
import LogoBas from './pages/LogoBas';
import Navbar from './components/Navbar';
import PageInscription from './pages/PageInscription';
import PageConnexion from './pages/PageConnexion';
import PageInformations from './pages/PageInformations';
import PagePhoto from './pages/PagePhoto';
import PageListeReservations from './pages/PageListeReservations';
import PageReservation from './pages/PageReservation';
import Meteo from './components/Meteo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <LogoHaut />
        <Navbar />
        <Routes>
          {/* Où qu'on aille, ... on aura le composant navbar */}
          {/* Essai 28/02/2023 23H45 - Les propriétés du costumer semblent obligatoires si on lui passe l'interface */}
          <Route
            path='/'
            element={
              <PageHome
                id={''}
                name={''}
                firstname={''}
                adress={''}
                postal_code={''}
                city={''}
                phone={''}
                email={''}
                password={''}
              />
            }
          />
          <Route path='/PageInscription' element={<PageInscription />} />
          <Route path='/PageConnexion' element={<PageConnexion />} />
          <Route path='/PageInformations' element={<PageInformations />} />
          <Route path='/PagePhotos' element={<PagePhoto />} />
          {/* <Route
            path='/PageListeReservations'
            element={<PageListeReservations />}
          /> */}
          <Route path='/Reservation' element={<PageReservation />} />
        </Routes>
        <LogoBas />
      </BrowserRouter>
    </div>
  );
}

export default App;
