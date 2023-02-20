import { FormEvent, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BoutonAnnuler from '../components/BoutonAnnuler';

const PageInscription = () => {
  const nameElement = useRef<HTMLInputElement>(null);
  const firstnameElement = useRef<HTMLInputElement>(null);
  const adressElement = useRef<HTMLInputElement>(null);
  const postal_codeElement = useRef<HTMLInputElement>(null);
  const cityElement = useRef<HTMLInputElement>(null);
  const phoneElement = useRef<HTMLInputElement>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log('---Bouton formulaire - Clic effectif---', handleSubmitForm);
    console.log(
      '---emailElement.current?.value--- -->',
      emailElement.current?.value
    );
    console.log(
      '---passwordElement.current?.value--- -->',
      passwordElement.current?.value
    );

    // Gestion des erreurs de saisies que pourrait faire l'utilisateur avnt d'entrer dans l'axios : tous les champs sont obligatoires.
    if (nameElement.current?.value === '') {
      return 'Tous les champs doivent être remplis';
    }
    if (firstnameElement.current?.value === '') {
      return 'Tous les champs doivent être remplis ';
    }
    if (adressElement.current?.value === '') {
      return 'Tous les champs doivent être remplis';
    }
    if (postal_codeElement.current?.value === '') {
      return 'Tous les champs doivent être remplis ';
    }
    if (cityElement.current?.value === '') {
      return 'Tous les champs doivent être remplis';
    }
    if (phoneElement.current?.value === '') {
      return 'Tous les champs doivent être remplis ';
    }

    if (emailElement.current?.value === '') {
      return 'Tous les champs doivent être remplis';
    }
    if (passwordElement.current?.value === '') {
      return 'Tous les champs doivent être remplis ';
    }

    axios
      // récupération des données pour un enregistrement
      .post(`http://localhost:8080/api/auth/register`, {
        name: nameElement.current?.value,
        firstname: firstnameElement.current?.value,
        adress: adressElement.current?.value,
        postal_code: postal_codeElement.current?.value,
        city: cityElement.current?.value,
        phone: phoneElement.current?.value,
        email: emailElement.current?.value,
        password: passwordElement.current?.value,
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        navigate('/PageConnexion');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className='centrage'>
        <div>
          <div>
            <label htmlFor='basic-url' className='form-label fw-bold'>
              Afin de vous inscrire, nous avons besoin de quelques éléments vous
              concernant : merci de saisir les différents champs, s'il vous
              plait.
            </label>
            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon2'>
                {/* L'élément <pre></pre> formate le texte de façon à obtenir un espace entre 'votre' et 'nom' */}
                <pre>
                  Quel est votre <strong>nom</strong>, s'il vous plait ?
                </pre>
              </span>
              <input
                type='text'
                className='form-control'
                placeholder='ex :     ANDRE-DE-LA-TOUR'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
                ref={nameElement}
                title="Ce champ est obligatoire - Un nom se doit d'être saisi en lettres majuscules et accepte un ou plusieurs tirets."
              />
            </div>
            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon1'>
                {/* L'élément <pre></pre> formate le texte de façon à obtenir un espace entre 'votre' et 'prénom' */}
                <pre>
                  Quel est votre <strong>prénom</strong>, s'il vous plait ?
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
                  Quelle est votre <strong>adresse</strong>, s'il vous plait ?
                </pre>
              </span>
              <input
                type='text'
                className='form-control'
                placeholder="ex :     1, rue de l'impasse qui mène quand même vers quelquechose"
                aria-label="Recipient's useradress"
                aria-describedby='basic-addon2'
                ref={adressElement}
                title="Ce champ est obligatoire - Votre indication de rue doit être un nombre suivi d'une virgule, puis d'une chaîne de caractères en lettres majuscules ou minuscules - Ce champ accepte un ou plusieurs tirets."
              />
            </div>

            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon2'>
                {/* L'élément <pre></pre> formate le texte de façon à obtenir un espace entre 'votre' et 'code postal' */}
                <pre>
                  Quelle est votre <strong>code postal</strong>, s'il vous plait
                  ?
                </pre>
              </span>
              <input
                type='text'
                className='form-control'
                placeholder='ex :     60530'
                aria-label="Recipient's userpostal_code"
                aria-describedby='basic-addon2'
                ref={postal_codeElement}
                title='Ce champ est obligatoire - Le code postal contient impérativement cinq chiffres.'
              />
            </div>

            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon2'>
                {/* L'élément <pre></pre> formate le texte de façon à obtenir un espace entre 'votre' et 'city' */}
                <pre>
                  Quelle est votre <strong>ville ou village</strong>, s'il vous
                  plait ?
                </pre>
              </span>
              <input
                type='text'
                className='form-control'
                placeholder='ex :     Fresnoy-En-Thelle'
                aria-label="Recipient's usercity"
                aria-describedby='basic-addon2'
                ref={cityElement}
                title='Ce champ est obligatoire - Le champ doit commencer par une lettre majuscule suivie de lettres minuscules et accepte un ou plusieurs tirets.'
              />
            </div>

            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon2'>
                {/* L'élément <pre></pre> formate le texte de façon à obtenir un espace entre 'votre' et 'phone' */}
                <pre>
                  Quelle est votre <strong>numéro de téléphone</strong>, s'il
                  vous plait ?
                </pre>
              </span>
              <input
                type='text'
                className='form-control'
                placeholder='ex :     0612345678'
                aria-label="Recipient's userphone"
                aria-describedby='basic-addon2'
                ref={phoneElement}
                title='Ce champ est obligatoire - Votre numéro de téléphone ne doit être composé que de dix chiffres.'
              />
            </div>
            <label htmlFor='basic-url' className='form-label fw-bold'>
              Afin de vous connecter facilement par la suite, merci de saisir
              vos identifiants, s'il vous plait.
            </label>
            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon2'>
                <pre>
                  Quelle est votre <strong>adresse e.mail</strong>, s'il vous
                  plait :
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
                  Quel sera votre <strong>mot de passe</strong> pour ce site,
                  s'il vous plait :
                </pre>
              </span>
              <input
                type='text'
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
    </div>
  );
};

export default PageInscription;
