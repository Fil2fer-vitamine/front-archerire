import BoutonArchery from '../components/BoutonArchery';
import CarouselHome from '../components/CarouselHome';

const PageHome = () => {
  return (
    <div>
      <div className='centrage'>
        <div>
          <div>
            <div className='centrage'>
              <p>Bonjour et bienvenue,</p>
              {/* On pourra mettre le bonjour à l'utilisateur de par son nom dès que l'on aura fait l'identification côté Front-end */}
            </div>
            <CarouselHome />
            <BoutonArchery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHome;
