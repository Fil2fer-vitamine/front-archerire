import ReseauxSociaux from '../components/ReseauxSociaux';
import './LogoBas.css';

const LogoDroit = () => {
  return (
    <div>
      <ReseauxSociaux />
      <div>
        <img
          className='logoBas'
          src='/Assets/Imagelogo/logo.png'
          alt='Logo Archerire'
        />
      </div>
    </div>
  );
};

export default LogoDroit;
