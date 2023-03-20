// UTILISATION DES IMPORTS
import { FormEvent, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BoutonAnnuler from '../components/BoutonAnnuler';

// COMPOSANT PRINCIPAL : Gestion de la page d'inscription
const PageInscription = () => {
  /**
   * Utilisation de useRef() pour créer une référence à neuf éléments du DOM :
   * nameElement : pour le stockage de la saisie du nom par l'utilisateur.
   * firstnameElement : pour le stockage de la saisie du prénom par l'utilisateur.
   * adressElement : pour le stockage de la saisie de l'adresse par l'utilisateur.
   * postal_codeElement : pour le stockage de la saisie du code postal par l'utilisateur.
   * cityElement : pour le stockage de la saisie de la ville par l'utilisateur.
   * phoneElement : pour le stockage de la saisie du numéro de téléphone par l'utilisateur.
   * emailElement : pour le stockage de la saisie de l'email par l'utilisateur.
   * passwordElement : pour le stockage de la saisie du password par l'utilisateur.
   * confirmPasswordElement : pour le stockage de la saisie de la confirmation du password par l'utilisateur.
   */
  const nameElement = useRef<HTMLInputElement>(null);
  const firstnameElement = useRef<HTMLInputElement>(null);
  const adressElement = useRef<HTMLInputElement>(null);
  const postal_codeElement = useRef<HTMLInputElement>(null);
  const cityElement = useRef<HTMLInputElement>(null);
  const phoneElement = useRef<HTMLInputElement>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);
  const confirmPasswordElement = useRef<HTMLInputElement>(null);

  /**
   * A la suite des saisies, on souhaite permettre une navigation à un moment donné :
   * variable navigate créée pour une utilisation quand l'inscription est effective
   */
  const navigate = useNavigate();

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log('---Bouton formulaire - Clic effectif---', handleSubmitForm);
    console.log(
      '---emailElement.current?.value--- -->',
      emailElement.current?.value
    );

    // Gestion des erreurs de saisies que pourrait faire l'utilisateur avnt d'entrer dans l'axios : tous les champs sont obligatoires.
    if (nameElement.current?.value === '') {
      alert("Le champs 'nom' doit impérativement être remplis");
    }
    if (firstnameElement.current?.value === '') {
      alert("Le champs 'prénom' doit impérativement être remplis");
    }
    if (adressElement.current?.value === '') {
      alert("Le champs 'adresse' doit impérativement être remplis");
    }
    if (postal_codeElement.current?.value === '') {
      alert("Le champs 'code postal' doit impérativement être remplis");
    }
    if (cityElement.current?.value === '') {
      alert("Le champs 'ville ou village' doit impérativement être remplis");
    }
    if (phoneElement.current?.value === '') {
      alert("Le champs 'numéro de téléphone' doit impérativement être remplis");
    }

    if (emailElement.current?.value === '') {
      alert("Le champs 'email' doit impérativement être remplis");
    }
    if (passwordElement.current?.value === '') {
      alert("Le champs 'password' doit impérativement être remplis");
    }

    /**
     * Gestion Erreur :
     * Si le password est différent de la confirmation du password.
     */
    if (
      passwordElement.current?.value !== confirmPasswordElement.current?.value
    ) {
      alert('Il y a discordance au niveau de votre mot de Passe !');
    } else {
      const passWordVerif = passwordElement.current?.value;

      let Customer = {
        name: nameElement.current?.value,
        firstname: firstnameElement.current?.value,
        adress: adressElement.current?.value,
        postal_code: postal_codeElement.current?.value,
        city: cityElement.current?.value,
        phone: phoneElement.current?.value,
        email: emailElement.current?.value,
        password: passWordVerif,
      };

      console.log('---passWordVerif --- -->', passWordVerif);

      axios
        .post('http://localhost:8080/api/auth/register', Customer)
        /**
         * La variable ' Customer' prend en compte la saisie de 9 éléments
         * De par la requête POST, on soumet Customer pour l'inscription.
         */
        .then((response) => {
          /**
           * Alors on obtiendra une réponse...
           */
          console.log('Réponse : ', response);
          console.log('Data de la réponse : ', response.data);
          alert('Inscription réussie! Passons à votre connexion...');
          navigate('/PageConnexion');
        })
        .catch((err) => {
          console.log("L'erreur est : ", err);
          alert(
            "Veuillez bien respecter la mise en forme dans chacun des champs de saisie, s'il vous plait."
          );
        });
    }
  };

  // UTILISATION DU RETURN pour l'Affichage
  return (
    <div>
      <div className='centrage'>
        <div>
          <div>
            <label htmlFor='basic-url' className='form-label fw-bold'>
              Afin de vous inscrire, nous avons besoin de quelques éléments vous
              concernant :
            </label>
            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon2'>
                {/* L'élément <pre></pre> formate le texte de façon à obtenir un espace entre 'votre' et 'nom' */}
                <pre>
                  Quel est votre <strong>nom</strong> ?
                </pre>
              </span>
              <input
                type='text'
                className='form-control'
                placeholder='ex :     ANDRE-DE-LA-TOUR'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
                //  ref permet de mettre a jour mon champs
                ref={nameElement}
                title="Ce champ est obligatoire - Un nom se doit d'être saisi en lettres majuscules et accepte un ou plusieurs tirets."
              />
            </div>
            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon1'>
                {/* L'élément <pre></pre> formate le texte de façon à obtenir un espace entre 'votre' et 'prénom' */}
                <pre>
                  Quel est votre <strong>prénom</strong> ?
                </pre>
              </span>
              <input
                type='text'
                className='form-control'
                placeholder='ex :     Philippe'
                aria-label='Username'
                aria-describedby='basic-addon1'
                //  ref permet de mettre a jour mon champs
                ref={firstnameElement}
                title='Ce champ est obligatoire - prénom doit commencer par une lettre majuscule suivie de lettres minuscules et accepte un ou plusieurs tirets'
              />
            </div>

            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon2'>
                {/* L'élément <pre></pre> formate le texte de façon à obtenir un espace entre 'votre' et 'adresse' */}
                <pre>
                  Quelle est votre <strong>adresse</strong> ?
                </pre>
              </span>
              <input
                type='text'
                className='form-control'
                placeholder="ex :  1, rue de l'impasse qui mène quand même vers quelquechose"
                aria-label="Recipient's useradress"
                aria-describedby='basic-addon2'
                //  ref permet de mettre a jour mon champs
                ref={adressElement}
                title="Ce champ est obligatoire - Votre indication de rue doit être un nombre suivi d'une virgule, puis d'une chaîne de caractères en lettres majuscules ou minuscules - Ce champ accepte un ou plusieurs tirets."
              />
            </div>

            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon2'>
                {/* L'élément <pre></pre> formate le texte de façon à obtenir un espace entre 'votre' et 'code postal' */}
                <pre>
                  Quelle est votre <strong>code postal</strong> ?
                </pre>
              </span>
              <input
                type='text'
                className='form-control'
                placeholder='ex :     60530'
                aria-label="Recipient's userpostal_code"
                aria-describedby='basic-addon2'
                //  ref permet de mettre a jour mon champs
                ref={postal_codeElement}
                title='Ce champ est obligatoire - Le code postal contient impérativement cinq chiffres.'
              />
            </div>

            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon2'>
                {/* L'élément <pre></pre> formate le texte de façon à obtenir un espace entre 'votre' et 'city' */}
                <pre>
                  Quelle est votre <strong>ville ou village</strong> ?
                </pre>
              </span>
              <input
                type='text'
                className='form-control'
                placeholder='ex :     Fresnoy-En-Thelle'
                aria-label="Recipient's usercity"
                aria-describedby='basic-addon2'
                //  ref permet de mettre a jour mon champs
                ref={cityElement}
                title='Ce champ est obligatoire - Le champ doit commencer par une lettre majuscule suivie de lettres minuscules et accepte un ou plusieurs tirets.'
              />
            </div>

            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon2'>
                {/* L'élément <pre></pre> formate le texte de façon à obtenir un espace entre 'votre' et 'phone' */}
                <pre>
                  Quelle est votre <strong>numéro de téléphone</strong> ?
                </pre>
              </span>
              <input
                type='tel'
                className='form-control'
                placeholder='ex :     0612345678'
                aria-label="Recipient's userphone"
                aria-describedby='basic-addon2'
                //  ref permet de mettre a jour mon champs
                ref={phoneElement}
                title='Ce champ est obligatoire - Votre numéro de téléphone ne doit être composé que de dix chiffres.'
              />
            </div>
            <label htmlFor='basic-url' className='form-label fw-bold'>
              Afin de vous connecter facilement par la suite, merci de saisir
              vos identifiants :
            </label>
            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon2'>
                <pre>
                  Quelle est votre <strong>adresse e.mail</strong> :
                </pre>
              </span>
              <input
                type='text'
                className='form-control'
                placeholder='ex :     philippe-de-la-tour@archerire.fr'
                aria-label="Recipient's useremail"
                aria-describedby='basic-addon2'
                //  ref permet de mettre a jour mon champs
                ref={emailElement}
                title="Votre adresse email nous servira d'identifiant - Ce champ est obligatoire"
              />
            </div>
            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon2'>
                <pre>
                  Quel sera votre <strong>mot de passe</strong> pour ce site :
                </pre>
              </span>
              <input
                type='text'
                // type='password' à mettre pour coder le mot de passe
                className='form-control'
                placeholder='(Obligatoire)'
                aria-label="Recipient's userpassword"
                aria-describedby='basic-addon2'
                //  ref permet de mettre a jour mon champs
                ref={passwordElement}
                title='Un bon mot de passe doit comporter au moins 8 lettres, dont au moins une Majuscule et/ou une minuscule - Ce champ est obligatoire'
              />

              <div className='input-group mb-3'>
                <span className='input-group-text' id='basic-addon2'>
                  <pre>
                    Veuillez confirmer votre <strong>mot de passe</strong>
                  </pre>
                </span>
                <input
                  type='text'
                  // type='password' à mettre pour coder le mot de passe
                  className='form-control'
                  placeholder='(Obligatoire)'
                  aria-label="Recipient's userpassword"
                  aria-describedby='basic-addon2'
                  //  ref permet de mettre a jour mon champs
                  ref={confirmPasswordElement}
                  title='Un bon mot de passe doit comporter au moins 8 lettres, dont au moins une Majuscule et/ou une minuscule - Ce champ est obligatoire'
                />
              </div>
            </div>

            <div>
              <BoutonAnnuler />{' '}
              <button
                type='button'
                className='btn btn-outline-success btn-lg'
                onClick={handleSubmitForm}
              >
                Valider
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageInscription;
