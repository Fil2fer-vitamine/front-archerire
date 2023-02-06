// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PageInscription from '../pages/PageInscription';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          {/* Placement du logo de Archerire faisant partie intégrante de la navbar */}
          <a className='navbar-brand' href='#'>
            <img
              src='/Assets/Imagelogo/logo.png'
              alt='Logo Archerire'
              width='100'
              height='100'
              className='LogoNavbar'
            />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink to='/' end className='nav-link'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/pageInscription' end className='nav-link'>
                  Inscription
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/pageConnexion' end className='nav-link'>
                  Connexion
                </NavLink>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  😄
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <NavLink to='/pageInformations' end className='nav-link'>
                      What else ?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/pageInformations' end className='nav-link'>
                      What do we offer you ?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/pageInformations' end className='nav-link'>
                      What is archery battle ?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/pageInformations' end className='nav-link'>
                      Our news ...
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
