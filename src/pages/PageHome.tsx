import BoutonArchery from '../components/BoutonArchery';
import Carousel2 from '../components/Carousel2';
import Meteo from '../components/Meteo';

const PageHome = () => {
  return (
    <div>
      <div className='centrage'>
        <div>
          <div>
            <div className='centrage'>
            </div>
            <Carousel2 />
            <BoutonArchery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHome;
