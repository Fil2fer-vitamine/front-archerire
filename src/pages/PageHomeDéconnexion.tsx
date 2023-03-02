import { useState } from 'react';
import BoutonArchery from '../components/BoutonArchery';
import CarouselHome from '../components/CarouselHome';

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

export interface Location {
  id: number;
  village_name: string;
  distance_in_kilometers: string;
}

function Pagehome(customer: Customer) {
  return (
    <div>
      <div className='centrage'>
        <div>
          <div>
            <div className='centrage'>
              <p>Bonjour et bienvenue {customer.firstname},</p>
              {/* Essai 28/02/2022 23H40 - On pourra mettre le bonjour à l'utilisateur de par son nom dès que l'on aura fait l'identification côté Front-end */}
            </div>
            <CarouselHome />
            <BoutonArchery />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagehome;
