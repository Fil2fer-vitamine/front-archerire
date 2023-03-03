// UTILISATION DES IMPORTS 
import axios from 'axios';

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
      <h1>PageHome</h1>
    </div>
  );
};

// Utilisation de export default pour premettre l'exportation de ce composant pour un autre.
export default PageHome;
