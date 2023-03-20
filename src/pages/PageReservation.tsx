import axios from 'axios';
import { FormEvent, useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Meteo from '../components/Meteo';
import { Location } from '../components/ListeVilles';
import { Animationsrequested } from './PageHome';
import { Link } from 'react-router-dom';

/**
 * L'import { Location } nous permet de nous brancher à ce qui se fait pour les villes.
 * --> Récupération de l'interface Location du fichier ListeVilles.tsx afin de l'utiliser
 * dans un formulaire
 * Initialisation de la constante 'villes' devant contenir les valeurs à 'vide'.
 */

// Déclaration des variables
let villes: Location[] = [];
// console.log(
//   "visualisation de 'villes' - initialisation à tableau vide : ",
//   villes
// );

let animation: Animationsrequested[] = [];
// console.log(
//   "visualisation de 'animation' - initialisation à tableau vide : ",
//   animation
// );

/**
 * Utilisation de useState() pour afficher les valeurs dès l'apparition de la page.
 * Le useState est initialisé à tableau 'vide'
 */

// COMPOSANT PRINCIPAL : Gestion de la page de PageReservation
const PageReservation = () => {
  //UTILISATION DES HOOKS : useRef(), useNavigate() et useState()
  const [compteur, setCompteur] = useState<number>(0);
  const [token, setToken] = useState<string>();
  // Ce compteur sert à raffraichir le composant dès modification

  /**
   * Les useState() permettent un chargement des données dès que la page est présente
   */
  const [lesVilles, setLesVilles] = useState<Location[]>([]);
  const [lesAnimations, setLesAnimations] = useState<Animationsrequested[]>([]);
  // console.log(
  //   "visualisation de 'lesVilles' - affichage du tableau tel qu'il est dans la base de données : ",
  //   lesVilles
  // );
  // console.log("visualisation de 'setLesVilles' : ", setLesVilles);

  // useRef :
  // Pour permettre la création :
  const dateInputPourCreer = useRef<HTMLInputElement | null>(null);
  const kind_of_animationInputPourCreer = useRef<HTMLSelectElement>(null); // Se trouve sur la table animationrequested
  const number_of_participantsInputPourCreer = useRef<HTMLInputElement | null>(
    null
  );
  // const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const for_whoRefPourCreer = useRef<HTMLSelectElement>(null); // Se trouve sur la table animationrequested
  const questionInputPourCreer = useRef<HTMLTextAreaElement | null>(null);
  const village_namePourCreer = useRef<HTMLSelectElement | null>(null);
  const nomSaisiParUtilisateurPourCreer = useRef<HTMLInputElement | null>(null);

  // console.log('date récupérée : ', dateInputPourCreer.current?.value);
  // console.log(
  //   "sorte d'animation : ",
  //   kind_of_animationInputPourCreer.current?.value
  // );
  // console.log(
  //   'number of participants : ',
  //   number_of_participantsInputPourCreer.current?.value
  // );
  // console.log('Pour qui ? : ', for_whoRefPourCreer.current?.value);
  // console.log('Notes : ', questionInputPourCreer.current?.value);
  // console.log('Endroit : ', {
  //   id: village_namePourCreer.current?.value,
  // });

  // Pour permettre la modification :
  const dateInputPourModifier = useRef<HTMLInputElement | null>(null);
  const kind_of_animationInputPourModifier = useRef<HTMLSelectElement>(null); // Se trouve sur la table animationrequested
  const number_of_participantsInputPourModifier =
    useRef<HTMLInputElement | null>(null);
  const for_whoRefPourModifier = useRef<HTMLSelectElement>(null); // Se trouve sur la table animationrequested
  const questionInputPourModifier = useRef<HTMLTextAreaElement | null>(null);
  const village_namePourModifier = useRef<HTMLSelectElement | null>(null);
  const nomSaisiParUtilisateurPourModifier = useRef<HTMLInputElement | null>(
    null
  );
  // console.log('date récupérée : ', dateInputPourModifier.current?.value);
  // console.log(
  //   "sorte d'animation : ",
  //   kind_of_animationInputPourModifier.current?.value
  // );
  // console.log(
  //   'number of participants : ',
  //   number_of_participantsInputPourModifier.current?.value
  // );
  // console.log('Pour qui ? : ', for_whoRefPourModifier.current?.value);
  // console.log('Notes : ', questionInputPourModifier.current?.value);
  // console.log('Endroit : ', {
  //   id: village_namePourModifier.current?.value,
  // });

  const [animationToUpdate, setAnimationToUpdate] =
    useState<Animationsrequested>();

  useEffect(() => {
    /**
     * useEffect() : Affichage des villes dès que la page est présentée.
     * On prend le verbe GET - prendre des données de la table 'Location'
     */
    axios.get(`http://localhost:8080/api/locations`).then((res) => {
      villes = res.data;
      // console.log("Les villes que j'ai récupéré : ", villes);
      setLesVilles(villes);
      /**
       * lesVilles : variable actuelle (pour le dropdown select des villes dans la modal)
       * setLesVilles : fonction qui permet de passer les villes une à une dans un autre tableau
       *  et de les afficher.
       */
    });

    // --------------------------------------REQUETE AFFICHAGE DES ANIMATIONS------------------------------------------

    /**
     * useEffect() : Affichage des animations dès que la modale est présentée.
     * On prend le verbe GET - prendre des données de la table 'Animationsrequested'
     */
    axios
      .get(`http://localhost:8080/api/animationsrequested`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((resp) => {
        animation = resp.data;
        // console.log(
        //   'Les animations que je récupère quand je fais axios.get() : ',
        //   animation
        // );
        setLesAnimations(animation);
      });
  }, [compteur]);

  useEffect(() => {
    // Utilisation d'un useEffect() pour savoir si on a quelqu'un connecté - sondage du localStorage par rapport au token.
    const tokenLocalStorage = localStorage.getItem('token');

    if (tokenLocalStorage) {
      setToken(tokenLocalStorage);
    }
  }, []);

  // ---------------------------------------Fonction Enregistrement réservation --------------------------------------

  const EnregistrerResa = (e: FormEvent) => {
    e.preventDefault();
    // alert('vous êtes au bon endroit !');
    // console.log('mesdatas', dateInputPourCreer.current?.value);
    // console.log('mesdatas', kind_of_animationInputPourCreer.current?.value);
    // console.log(
    //   'mesdatas',
    //   typeof number_of_participantsInputPourCreer.current?.value
    // );
    // console.log('mesdatas', for_whoRefPourCreer.current?.value);
    // console.log('mesdatas', questionInputPourCreer.current?.value);
    // console.log('mesdatas', typeof village_namePourCreer.current?.value);
    // --------------------------------------REQUETE CREATION----------------------------------------------------
    axios
      .post(
        `http://localhost:8080/api/animationsrequested`,
        {
          date: dateInputPourCreer.current?.value, // prise en compte de la date saisie
          kind_of_animation: kind_of_animationInputPourCreer.current?.value,
          number_of_participants: Number(
            number_of_participantsInputPourCreer.current?.value
          ),
          for_who: for_whoRefPourCreer.current?.value,
          question: questionInputPourCreer.current?.value,
          location: { id: Number(village_namePourCreer.current?.value) },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((response) => {
        console.log('Réponse de la requête create réservation : ', response);
      });
    setCompteur(compteur + 1);
  };

  const handleAnimationSupp = (
    animASupprimer: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log(
      'e dans handle anim pour supprimer : ',
      animASupprimer.currentTarget.value
    );

    // --------------------------------------REQUETE SUPPRESSION----------------------------------------------------

    axios
      .delete(
        `http://localhost:8080/api/animationsrequested/${animASupprimer.currentTarget.value}`
      )
      .then((response) => {
        console.log('Réponse de la requête Delete réservation : ', response);
        setCompteur(compteur + 1);
        // Ce compteur sert à raffraichir le composant dès modification.
      })
      .catch((error) => {
        console.log('erreur de la requête Delete réservation : ', error);
      });
  };

  // --------------------------------------REQUETE MODIFICATION----------------------------------------------------
  const initialisationUpdateForm = (animation: Animationsrequested) => {
    setAnimationToUpdate(animation);
    console.log('qui y a t il la dedans ? ', animationToUpdate);
    // donner une valeur aux différents useRef du formulaire (initialiser les champs du formulaire)
    if (for_whoRefPourModifier.current) {
      for_whoRefPourModifier.current.value = animation.for_who;
    }

    if (kind_of_animationInputPourModifier.current) {
      kind_of_animationInputPourModifier.current.value =
        animation.kind_of_animation; // MàJ de l'input/select avec la valeur contenu dans l'objet cliqué
    }

    if (village_namePourModifier.current) {
      village_namePourModifier.current.value = animation.location.id.toString(); // MàJ de l'input/select avec la valeur contenu dans l'objet cliqué
    }

    if (number_of_participantsInputPourModifier.current) {
      number_of_participantsInputPourModifier.current.value =
        animation.number_of_participants.toString();
      // MàJ de l'input/select avec la valeur contenu dans l'objet cliqué
    }

    if (dateInputPourModifier.current) {
      dateInputPourModifier.current.value = animation.date;
      // MàJ de l'input/select avec la valeur contenu dans l'objet cliqué
    }

    if (questionInputPourModifier.current) {
      questionInputPourModifier.current.value = animation.question;
      // MàJ de l'input/select avec la valeur contenu dans l'objet cliqué
    }
  };

  const handleAnimationUpdate = (
    animUpdate: React.MouseEvent<HTMLButtonElement>
  ) => {
    // console.log(
    //   'dateInputPourModifier.current?.value ',
    //   dateInputPourModifier.current?.value
    // );
    // console.log(
    //   'kind_of_animation:',
    //   kind_of_animationInputPourModifier.current?.value
    // ); // Pour modification de la sorte d'animation
    // console.log(
    //   'number_of_participants:',
    //   number_of_participantsInputPourModifier.current?.value
    // ); // Pour modification du nombre de Participants
    // console.log('for_who:', for_whoRefPourModifier.current?.value); // Pour modification de Pour qui ?
    // console.log('question:', questionInputPourModifier.current?.value); // Pour modification de la Note
    // console.log('village_name:', village_namePourModifier.current?.value); // Pour modification du lieu

    axios
      .patch(
        `http://localhost:8080/api/animationsrequested/${animationToUpdate?.id}`,
        {
          date: dateInputPourModifier.current?.value, // Pour modification de la date
          kind_of_animation: kind_of_animationInputPourModifier.current?.value, // Pour modification de la sorte d'animation
          number_of_participants:
            number_of_participantsInputPourModifier.current?.value, // Pour modification du nombre de Participants
          for_who: for_whoRefPourModifier.current?.value, // Pour modification de Pour qui ?
          question: questionInputPourModifier.current?.value, // Pour modification de la Note
          location: { id: village_namePourModifier.current?.value }, // Pour modification du lieu
        }
      )
      .then((response) => {
        console.log('Réponse de la requête update réservation : ', response);
        setCompteur(compteur + 1);
      })
      .catch((error) => {
        console.log('erreur de la requête update réservation : ', error);
      });
  };

  // axios
  //   .post(`http://localhost:8080/api/animationrequested`, {})
  //   .then((response) => {
  //     console.log(response);
  //     console.log(response.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return (
    <div>
      <Meteo />
      <div className='container'>
        <h2>Page de réservation</h2>
        {/* _____________________Trigger the modal with a button________________Logique Token dans le localStorage ? ___________ */}
        {token ? (
          <Button
            type='button'
            className='btn btn-success'
            data-bs-toggle='modal'
            data-bs-target='#modalReservation'
          >
            Cliquez ici pour réserver une animation ...
          </Button>
        ) : (
          <Link to={'/PageConnexion'}>
            <Button type='button' className='btn btn-danger'>
              Se connecter
            </Button>
          </Link>
        )}

        {/* ___________________________________Modal Reservation d'une animation______________________________________ */}
        <div
          className='modal fade'
          id='modalReservation'
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
              {/* Debut form */}
              <form>
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
                      ref={nomSaisiParUtilisateurPourCreer}
                    />
                    <div className='form-group'>
                      <label htmlFor='selection'>
                        <select
                          id='selection'
                          className='form-control'
                          ref={for_whoRefPourCreer}
                        >
                          <option value=''>
                            Pour qui est faite la demande ?
                          </option>
                          <optgroup label='... vous même ?'>
                            <option value='un particulier.'>
                              un particulier.
                            </option>
                          </optgroup>
                          <optgroup label='... une entité ?'>
                            <option value='une entreprise.'>
                              une entreprise.
                            </option>
                            <option value='une association.'>
                              une association.
                            </option>
                            <option value='une communauté.'>
                              une communauté.
                            </option>
                          </optgroup>
                        </select>
                      </label>
                    </div>
                    <div className='form-group'>
                      <label id='kindOf' htmlFor='selection'></label>
                      <select
                        id='kindOf'
                        className='form-control'
                        ref={kind_of_animationInputPourCreer}
                      >
                        <option value=''>Animation demandée ?</option>
                        <optgroup label='Archery Battle'>
                          <option value='Archery Battle - 1 heure'>
                            Archery Battle - 1 heure
                          </option>
                          <option value='Archery Battle - 2 heures'>
                            Archery Battle - 2 heures
                          </option>
                          <option value='Archery Battle - 3 heures'>
                            Archery Battle - 3 heures
                          </option>
                        </optgroup>
                        <optgroup label='Les sumos'>
                          <option value='Les sumos - 1 heure'>
                            Les sumos - 1 heure
                          </option>
                          <option value='Les sumos - 2 heures'>
                            Les sumos - 2 heures
                          </option>
                          <option value='Les sumos - 3 heures'>
                            Les sumos - 3 heures
                          </option>
                        </optgroup>
                      </select>
                    </div>

                    {/* Input de version 2 */}
                    {/* <div className='form-group'>
                      <label htmlFor='selection'></label>
                      <select id='selection' className='form-control'>
                        <option value=''>Endroit à prendre en compte :</option>
                        <optgroup label='Chez le particulier'>
                          <option value=''>
                            Chez le particulier (ATTENTION : un terrain d'au
                            moins 4x5 mètres est requis pour cette activité).
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
                    </div> */}

                    {/* ------------------------Essai de récupération des villes----------------------------------- */}
                    <div className='form-group'>
                      <label htmlFor='selection'></label>
                      <select
                        id='selection'
                        className='form-control'
                        ref={village_namePourCreer}
                      >
                        <option
                          value=''
                          title="appuyez plusieurs fois sur la première lettre de votre ville recherchée jusqu'à obtenir la bonne."
                        >
                          Villes et villages autour de Fresnoy-en-Thelle :
                        </option>
                        {lesVilles.map((ville) => (
                          <option key={ville.id} value={ville.id}>
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
                    ref={number_of_participantsInputPourCreer}
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
                    ref={dateInputPourCreer}
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
                      rows={2}
                      ref={questionInputPourCreer}
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
                  <button
                    type='button'
                    className='btn btn-success'
                    onClick={EnregistrerResa}
                    data-bs-dismiss='modal'
                  >
                    Enregistrer cette réservation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          {/* Mise des différentes animations enregistrées */}
          {lesAnimations.map((animation) => (
            <div>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>{animation.kind_of_animation}</h5>
                  <p className='card-text'>
                    <strong>en date du :</strong>
                    <br />
                    {animation.date} <br />
                    <strong>pour un groupe de :</strong>
                    <br />
                    {animation.number_of_participants} personnes.
                  </p>
                  {/* _____________________Trigger the modal with a button UPDATE___________________________ */}

                  <button
                    type='button'
                    className='btn btn-primary'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModalUpdate'
                    data-id='coucou'
                    onClick={() => {
                      initialisationUpdateForm(animation);
                    }}
                  >
                    Pour modifier
                  </button>

                  {/* ----------------------------------------------------------------- */}
                  <button
                    type='button'
                    className='btn btn-danger'
                    value={animation.id}
                    onClick={handleAnimationSupp}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ---------------------- Modal UPDATE ------------------------ */}
        <div
          className='modal fade'
          id='exampleModalUpdate'
          tabIndex={-1}
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h1 className='modal-title fs-5' id='exampleModalLabel'>
                  Votre nouvelle réservation {animationToUpdate?.id}
                </h1>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              {/* Debut form */}
              <form>
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
                      // placeholder={nomSaisiParUtilisateurPourCreer}
                      ref={nomSaisiParUtilisateurPourModifier}
                    />
                    <div className='form-group'>
                      <label htmlFor='selection'>
                        <select
                          id='selection'
                          className='form-control'
                          ref={for_whoRefPourModifier}
                          //defaultValue={animationToUpdate?.for_who}
                        >
                          <option value=''>
                            Pour qui est faite la demande ?
                          </option>
                          <optgroup label='... vous même ?'>
                            <option value='un particulier.'>
                              un particulier.
                            </option>
                          </optgroup>
                          <optgroup label='... une entité ?'>
                            <option value='une entreprise.'>
                              une entreprise.
                            </option>
                            <option value='une association.'>
                              une association.
                            </option>
                            <option value='une communauté.'>
                              une communauté.
                            </option>
                          </optgroup>
                        </select>
                      </label>
                    </div>
                    <div className='form-group'>
                      <label id='kindOf' htmlFor='selection'></label>
                      <select
                        id='kindOf'
                        className='form-control'
                        ref={kind_of_animationInputPourModifier}
                      >
                        <option value=''>Animation demandée ?</option>
                        <optgroup label='Archery Battle'>
                          <option value='Archery Battle - 1 heure'>
                            Archery Battle - 1 heure
                          </option>
                          <option value='Archery Battle - 2 heures'>
                            Archery Battle - 2 heures
                          </option>
                          <option value='Archery Battle - 3 heures'>
                            Archery Battle - 3 heures
                          </option>
                        </optgroup>
                        <optgroup label='Les sumos'>
                          <option value='Les sumos - 1 heure'>
                            Les sumos - 1 heure
                          </option>
                          <option value='Les sumos - 2 heures'>
                            Les sumos - 2 heures
                          </option>
                          <option value='Les sumos - 3 heures'>
                            Les sumos - 3 heures
                          </option>
                        </optgroup>
                      </select>
                    </div>

                    {/* Input de version 2 */}
                    {/* <div className='form-group'>
                      <label htmlFor='selection'></label>
                      <select id='selection' className='form-control'>
                        <option value=''>Endroit à prendre en compte :</option>
                        <optgroup label='Chez le particulier'>
                          <option value=''>
                            Chez le particulier (ATTENTION : un terrain d'au
                            moins 4x5 mètres est requis pour cette activité).
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
                    </div> */}

                    {/* ------------------------Essai de récupération des villes----------------------------------- */}
                    <div className='form-group'>
                      <label htmlFor='selection'></label>
                      <select
                        id='selection'
                        className='form-control'
                        ref={village_namePourModifier}
                      >
                        <option
                          value=''
                          title="appuyez plusieurs fois sur la première lettre de votre ville recherchée jusqu'à obtenir la bonne."
                        >
                          Villes et villages autour de Fresnoy-en-Thelle :
                        </option>
                        {lesVilles.map((ville) => (
                          <option key={ville.id} value={ville.id}>
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
                    ref={number_of_participantsInputPourModifier}
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
                    ref={dateInputPourModifier}
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
                      rows={2}
                      ref={questionInputPourModifier}
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
                  <button
                    type='button'
                    className='btn btn-success'
                    onClick={handleAnimationUpdate}
                    data-bs-dismiss='modal'
                  >
                    Enregistrez les modifications de votre reservation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageReservation;
