import { useState, useEffect } from 'react';
import http from './Récupération';

/**
 * 1 - Nous allons récupérer ce type de données dans l'optique de les manipuler
 */

export interface Location {
  id: number;
  village_name: string;
  distance_in_kilometers: string;
}

/**
 * 2 - Pour afficher nos données provenant de la base de données - table 'Locations' : utilisation d'un useState()
 */

const ListeVilles = () => {
  const [listLocation, setListLocation] = useState<Location[] | null>(null);

  /**
   * 3 - Pour déclencher une logique de récupération de données une seule fois au chargement de notre composant : utilisation d'un useEffect()
   */

  useEffect(() => {
    http.get<Location[]>('/Locations').then((res) => {
      setListLocation([...res.data]);
    });
  }, []);

  return (
    <div className='container p-2'>
      <div className='d-flex align-items-start flex-wrap justify-content-around'>
        {listLocation ? (
          listLocation.map((location: Location) => (
            <div key={location.id}>
              <div className='card-body'>
                <h5 className='card-title'>
                  {location.village_name} ({location.distance_in_kilometers})
                </h5>
              </div>
            </div>
          ))
        ) : (
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListeVilles;
