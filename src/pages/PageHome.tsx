import BoutonArchery from '../components/BoutonArchery';
import Carousel2 from '../components/Carousel2';

const PageHome = () => {
  return (
    <div>
      <div className='centrage'>
        <div>
          <div>
            <div className='centrage'>
              <p>Bonjour et bienvenue,</p>
              {/* On pourra mettre le bonjour à l'utilisateur de par son nom dès que l'onb aura fait l'identification côté Front-end */}
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
