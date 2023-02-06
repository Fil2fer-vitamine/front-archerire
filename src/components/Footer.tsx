import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div>
      <footer
        id='sticky-footer'
        className='flex-shrink-0 py-4 bg-white text-black-50'
      >
        <div className='container text-center'>
          <small>Copyright &copy; Your Website</small>
          <a className='navbar-brand' href='#'>
            <img
              src='/Assets/Imagelogo/logo.png'
              alt='Logo Archerire'
              width='150'
              height='150'
              className='LogoNavbar'
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
