import Agenda from '../components/agenda';
import Carousel2 from '../components/Carousel2';
import Navbar from '../components/Navbar';
import "./PageHome.css";

const PageHome = () => {
  return (
    <div>
      <div>
        <img
          className='logo'
          src='/Assets/Imagelogo/logo.png'
          alt='Logo Archerire'
        />
      </div>
      <div className='centrage'>
        <div>
          <div>
            <Navbar />
            <Carousel2 />
            {/* <Agenda /> */}
          </div>
        </div>
      </div>
      <div>
        <img
          className='logo1'
          src='/Assets/Imagelogo/logo.png'
          alt='Logo Archerire'
        />
      </div>
    </div>
  );
};

export default PageHome;
