import { useRef } from 'react';
import 'react-day-picker/dist/style.css';
import Navbar from '../components/Navbar';

const PageInscription = () => {
  const nameElement = useRef<HTMLInputElement>(null);
  const firstnameElement = useRef<HTMLInputElement>(null);
  const adressElement = useRef<HTMLInputElement>(null);
  const postal_codeElement = useRef<HTMLInputElement>(null);
  const cityElement = useRef<HTMLInputElement>(null);
  const phoneElement = useRef<HTMLInputElement>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);

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
          <div></div>
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
