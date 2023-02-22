import { useState, useEffect } from 'react';
import http from './NON OP Récupération';

/**
 * 1 - Nous allons récupérer ce type de données dans l'optique de les manipuler
 */

interface Location {
  id: number;
  village_name: string;
  distance_in_kilometers: string;
}

/**
 * 2 - Pour afficher nos données provenant de la base de données - table 'Locations' : utilisation d'un useState()
 */

const ListLocation = () => {
  const [listLocation, setListLocation] = useState<Location[] | null>(null);

  /**
   * 3 - Pour déclencher une logique de récupération de données une seule fois au chargement de notre composant : utilisation d'un useEffect()
   */

  useEffect(() => {
    http.get<Location[]>('/Locations').then((res) => {
      setListLocation([...res.data]);
    });
  }, []);

  //   return (
  // //     <div className='container p-2'>
  // //         <div className="d-flex align-items-start flex-wrap justify-content-around">
  // //       {listLocation.map((location: Location) => (
  // //         <div key={location.id}>

  // //       )

  // //     </div>
  // //   );
};

export default Location;
