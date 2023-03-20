// UTILISATION DES IMPORTS 
import BoutonArchery from '../components/BoutonArchery';
import CarouselHome from '../components/CarouselHome';

// Déclaration des INTERFACES

export interface Customer {
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

export interface Animationsrequested {
  id: string;
  date: string;
  kind_of_animation: string;
  number_of_participants: number;
  for_who: string;
  question: string;
  decision_admin: boolean;
  comments_admin: string;
  negociation: string;
  location: Location;
}

export interface Location {
  id: number;
  village_name: string;
  distance_in_kilometers: string;
}

// COMPOSANT PRINCIPAL : Gestion de la page PageHome
const PageHome = () => {

  // UTILISATION DU RETURN pour l'Affichage
  return (
    <div>
      <div className='centrage'>
        <div>
          <div>
            <div className='centrage'>
              {/* <p>Bonjour et bienvenue {customer.firstname},</p> */}
              <p>Bonjour et bienvenue,</p>
              {/* Essai 28/02/2022 23H40 - On pourra mettre le bonjour à l'utilisateur de par son nom dès que l'on aura fait l'identification côté Front-end */}
            </div>
            <CarouselHome />
            <BoutonArchery />
          </div>
        </div>
      </div>
    </div>
  );
};

// Utilisation de export default pour premettre l'exportation de ce composant pour un autre.
export default PageHome;
