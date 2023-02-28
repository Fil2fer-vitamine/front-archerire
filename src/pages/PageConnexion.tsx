import axios from 'axios';
import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router';
import BoutonAnnuler from '../components/BoutonAnnuler';

// Gestion de la page de connexion
const Connexion = () => {
  /**
   * Utilisation de useRef() pour créer une référence à deux éléments du DOM :
   * emailElement : pour le stockage de la saisie de l'email par l'utilisateur.
   * passwordElement : pour le stockage de la saisie du password par l'utilisateur.
   */
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);

  /**
   * A la suite des saisies, on souhaite permettre une navigation à un moment donné :
   * variable navigate créée pour une utilisation quand login effectif
   */
  const navigate = useNavigate();

  /**
   * Préparation du bouton handleSubmitForm afin de soumettre le formulaire.
   */
  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log('Bouton de formulaire - clic effectué');
    console.log('---emailElement--- -->', emailElement.current?.value);
    console.log('---passwordElement--- -->', passwordElement.current?.value);

    // ici on met une condition pour imposer les 2 valeurs du champs obligatoire, sinon on ne rentre pas dans notre axios
    let Customer = {
      email: emailElement.current?.value,
      password: passwordElement.current?.value,
    };
    // console.table() permet de mettre en tableau les valeurs : plus visible.
    console.table(Customer);

    if (emailElement.current?.value === '') {
      alert('Le champs email doit impérativement être remplis');
    }
    if (passwordElement.current?.value === '') {
      alert('Le champs password doit impérativement être remplis');
    }

    axios
      .post('http://localhost:8080/api/auth/login', Customer)
      /**
       * La variable prend en compte la saisie de l'email et le password de par
       * la variable 'Customer'.
       * De par la requête POST, on soumet Customer pour la connexion.
       */
      .then((response) => {
        /**
         * Alors on obtiendra une réponse...
         */
        console.log('réponse du post de login : ', response);
        console.log('Customer : ',Customer);

        const token = response.data.accessToken;
        console.log(response.data.accessToken);
        // stock "set" le token provenant de auth.service.ts.
        localStorage.setItem('token', token);
        navigate('/');
        // La navigation ramènera sur la page Home avec l'User identifié : le bonjour sera personnalisé.
        alert('Connection réussie!                Bienvenue');
      })
      .catch((err) => {
        console.error(err);
        alert(
          'Les identifiants ne sont pas bons. Merci de recommencer avec des identifiants valides.'
        );
      });
  };
  return (
    <div>
      <div className='centrage'>
        <div>
          <form onSubmit={handleSubmitForm}>
            {/* Mise en place d'un formulaire : action 'handleSubmitForm' en préparation. */}
            <label htmlFor='basic-url' className='form-label fw-bold'>
              Afin de vous connecter, merci de saisir vos identifiants, s'il
              vous plait.
            </label>
            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon2'>
                <pre>
                  Quelle est votre <strong>adresse e.mail</strong> ?
                </pre>
              </span>
              <input
                type='text'
                className='form-control'
                placeholder='ex :     philippe-de-la-tour@archerire.fr'
                aria-label="Recipient's useremail"
                aria-describedby='basic-addon2'
                ref={emailElement}
                title="Votre adresse email nous servira d'identifiant - Ce champ est obligatoire"
              />
            </div>
            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon2'>
                <pre>
                  Quel est votre <strong>mot de passe</strong> ?
                </pre>
              </span>
              <input
                type='password'
                // type='password' à mettre pour coder le mot de passe
                className='form-control'
                placeholder='(Obligatoire)'
                aria-label="Recipient's userpassword"
                aria-describedby='basic-addon2'
                ref={passwordElement}
                title='Un bon mot de passe doit comporter au moins 8 lettres, dont au moins une Majuscule et/ou une minuscule - Ce champ est obligatoire'
              />

              <div>
                <BoutonAnnuler />{' '}
                <button
                  type='submit'
                  className='btn btn-outline-success btn-lg'
                >
                  Valider
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
