import "./LogoHaut.css";      // Le logo n'a pas été retenu - il y a un incident en responsive.

const LogoHaut = () => {
  return (
    <div>
      <div>
        <img
          className='logoHaut'
          src='/Assets/Imagelogo/logo.png'
          alt='Logo Archerire'
        />
      </div>
    </div>
  );
};

export default LogoHaut;
