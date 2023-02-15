import Agenda from '../components/Agenda';
import 'react-day-picker/dist/style.css';
import Navbar from '../components/Navbar';

const PageInscription = () => {
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

export default PageInscription;
