const Navbar = () => {
  return (
    <div className='centrage'>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            <img
              src='/Assets/Imagelogo/logo.png'
              alt='Logo Archerire'
              width='80'
              height='80'
              className='LogoNavbar'
              title='Coucou &#128521;'
            />
          </a>
          {/* les icones sont présents sur https://outils-javascript.aliasdmc.fr/encodage-icone-symbole/encode-caractere-26A0-html-css-js-autre.html */}
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
                <a className='nav-link active' aria-current='page' href='/'>
                  Accueil
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/pageActualites'>
                  Notre Actualité
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='PageInformations'>
                  Que proposons-nous ?
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  &#9660; Pour plus d'actions sur notre Site Web &#9660;
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='PageInscription'>
                      Inscription
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='PageConnexion'>
                      Connexion
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='PageContact'>
                      &#9888; Nous contacter &#9743; &#9993;
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='PageReservation'>
                      <strong>&#128486;</strong>{' '}
                      <em>... Faisons une réservation ...</em>
                      <strong> &#128487;</strong>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a className='navbar-brand' href='#'>
            <img
              src='/Assets/Imagelogo/logo.png'
              alt='Logo Archerire'
              width='80'
              height='80'
              className='LogoNavbar'
              title='Bienvenue sur notre Site Web'
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
