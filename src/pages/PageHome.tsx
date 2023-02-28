import { useState } from 'react';
import BoutonArchery from '../components/BoutonArchery';
import CarouselHome from '../components/CarouselHome';

interface Customer {
  id: string;
  name: string;
  firstname: string;
  adress: string;
  postal_code: string;
  city: string;
  phone: string;
  email: string;
  password: string;
}

// let customer: Customer[] = [];

// const Bienvenue = () => {
//   const [nomBienvenue, setBienvenue] = useState<Location[]>([]);
//   const [lesAnimations, setLesAnimations] = useState<Animationsrequested[]>([]);

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
