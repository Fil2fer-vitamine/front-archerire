import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Meteo from '../components/Meteo';
import { Location } from '../components/ListeVilles';

/**
 * L'import { Location } nous permet de nous brancher à ce qui se fait pour les villes.
 * --> Récupération de l'interface Location du fichier ListeVilles.tsx afin de l'utiliser
 * dans un formulaire
 * Initialisation de la constante 'villes' devant contenir les valeurs à 'vide'.
 */
let villes: Location[] = [];

interface Animationsrequested {
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

let animation: Animationsrequested[] = [];
console.log("visualisation de 'animation' : ", animation);

/**
 * Utilisation de useState() pour afficher les valeurs dès l'apparition de la page.
 * Le useState est initialisé à tableau 'vide'
 */
const PageReservation = () => {
  const [lesVilles, setLesVilles] = useState<Location[]>([]);
  const [lesAnimations, setLesAnimations] = useState<Animationsrequested[]>([]);
  const dateInput = useRef<HTMLInputElement | null>(null);
  const kind_of_animationInput = useRef<HTMLInputElement | null>(null);
  const number_of_participantsInput = useRef<HTMLInputElement | null>(null);
  const for_whoInput = useRef<HTMLInputElement | null>(null);
  const questionInput = useRef<HTMLInputElement | null>(null);
  const locationInput = useRef<HTMLInputElement | null>(null);
  /**
   * Utilisation d'un UseEffect pour n'avoir qu'un get au moment du changement.
   * Utilisation du client HTTP axios() entre le Frontend et le Backend pour lire
   * ce qu'il y a dans la base de données
   */
  useEffect(() => {
    axios.get(`http://localhost:8080/api/locations`).then((res) => {
      villes = res.data;

      // console.log("Les villes que j'ai récupéré : ", villes);
      setLesVilles(villes);
      /**
       * lesVilles : variable actuelle
       * setLesVilles : fonction qui permet de passer les villes une à une dans un autre tableau
       *  et de les afficher.
       */
    });
  }, []);

  useEffect(() => {
    /**
     * Pour l'enregistrement d'une animation :
     * utilisation de useRef
     */
    axios.get(`http://localhost:8080/api/animationsrequested`).then((resp) => {
      animation = resp.data;
      console.log('Les animations que je récupère : ', animation);
      setLesAnimations(animation);
    });
  }, []);

  return (
    <div>
      <Meteo />
      <div className='container'>
        <h2>Page de réservation</h2>

        {/* _____________________Trigger the modal with a button___________________________ */}

        <Button
          type='button'
          className='btn btn-success'
          data-bs-toggle='modal'
          data-bs-target='#exampleModal'
        >
          Cliquez ici pour réserver ...
        </Button>

        {/* _______________________________________Modal__________________________________________ */}
        <div
          className='modal fade'
          id='exampleModal'
          tabIndex={-1}
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h1 className='modal-title fs-5' id='exampleModalLabel'>
                  Votre nouvelle réservation
                </h1>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body'>
                <div className='mb-3'>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Veuillez nous indiquer votre nom :
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleFormControlInput1'
                    placeholder='ex : ANDRE-DE-LA-TOUR'
                    // ref={kind_of_animationInput}
                  />
                  <div className='form-group'>
                    <label htmlFor='selection'></label>
                    <select
                      id='selection'
                      className='form-control'
                      ref={kind_of_animationInput}
                    >
                      <option value=''>Pour qui est faite la demande ?</option>
                      <optgroup label='... vous même ?'>
                        <option value=''>un particulier.</option>
                      </optgroup>
                      <optgroup label='... une entité ?'>
                        <option value=''>une entreprise.</option>
                        <option value=''>une association.</option>
                        <option value=''>une communauté.</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='selection'></label>
                    <select id='selection' className='form-control'>
                      <option value=''>Animation demandée ?</option>
                      <optgroup label='Archery Battle'>
                        <option value=''>Archery Battle - 1 heure</option>
                        <option value=''>Archery Battle - 2 heures</option>
                        <option value=''>Archery Battle - 3 heures</option>
                      </optgroup>
                      <optgroup label='Les sumos'>
                        <option value=''>Les sumos - 1 heure</option>
                        <option value=''>Les sumos - 2 heures</option>
                        <option value=''>Les sumos - 3 heures</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='selection'></label>
                    <select id='selection' className='form-control'>
                      <option value=''>Endroit à prendre en compte :</option>
                      <optgroup label='Chez le particulier'>
                        <option value=''>
                          Chez le particulier (ATTENTION : un terrain d'au moins
                          4x5 mètres est requis pour cette activité).
                        </option>
                      </optgroup>
                      <optgroup label="A l'extérieur">
                        <option value=''>En forêt</option>
                        <option value=''>Sur un stade</option>
                        <option value=''>
                          * Autre (Merci de nous indiquer le type de terrain
                          dans la partie 'Notes')
                        </option>
                      </optgroup>
                    </select>
                  </div>

                  {/* ------------------------Essai de récupération des villes----------------------------------- */}
                  <div className='form-group'>
                    <label htmlFor='selection'></label>
                    <select id='selection' className='form-control'>
                      <option
                        value=''
                        title="appuyez plusieurs fois sur la première lettre de votre ville recherchée jusqu'à obtenir la bonne."
                      >
                        Villes et villages autour de Fresnoy-en-Thelle :
                      </option>
                      {lesVilles.map((ville) => (
                        <option key={ville.id} value={ville.village_name}>
                          {ville.village_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <label
                  htmlFor='exampleFormControlInput5'
                  className='form-label'
                >
                  nombre de participants :
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='exampleFormControlInput6'
                  placeholder='ex : 12'
                  ref={number_of_participantsInput}
                />
                <label
                  htmlFor='exampleFormControlInput6'
                  className='form-label'
                >
                  date :
                </label>
                <input
                  type='date'
                  className='form-control'
                  id='exampleFormControlInput7'
                  ref={dateInput}
                />

                <div className='mb-3'>
                  <label
                    htmlFor='exampleFormControlTextarea7'
                    className='form-label'
                  >
                    Notes
                  </label>
                  <textarea
                    className='form-control'
                    id='exampleFormControlTextarea1'
                    rows={3}
                  ></textarea>
                </div>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-danger'
                  data-bs-dismiss='modal'
                >
                  Annuler
                </button>
                <button type='button' className='btn btn-success'>
                  Enregistrer cette réservation
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Mise des différentes animations enregistrées */}
          {lesAnimations.map((animation) => (
            <div className='AfficheEvenement'>
              <p>date : {animation.date}</p>
              <p>nom : {animation.kind_of_animation}</p>
              <p>number : {animation.number_of_participants}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageReservation;
