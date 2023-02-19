import { useRef } from 'react';
import 'react-day-picker/dist/style.css';
import Navbar from '../components/Navbar';

const PageInscription = () => {
  const nameElement = useRef<HTMLInputElement>(null);
  const firstnameElement = useRef<HTMLInputElement>(null);
  const adressElement = useRef<HTMLInputElement>(null);
  const postal_codeElement = useRef<HTMLInputElement>(null);
  const cityElement = useRef<HTMLInputElement>(null);
  const phoneElement = useRef<HTMLInputElement>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);
  return (
    <div>
      <div className='centrage'>
        <div>
          <div>
            <label htmlFor='basic-url' className='form-label fw-bold'>
              Afin de vous inscrire, nous avons besoin de quelques éléments vous
              concernant : merci de saisir les différents champs, s'il vous
              plait :
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
                title='Ce champ est obligatoire'
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
                title='Ce champ est obligatoire'
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
                title='Ce champ est obligatoire'
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
                title='Ce champ est obligatoire'
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
                title='Ce champ est obligatoire'
              />
            </div>
            <br />
            <label htmlFor='basic-url' className='form-label fw-bold'>
              Afin de vous connecter facilement par la suite, merci de saisir
              vos identifiants, s'il vous plait :
            </label>
            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon2'>
                <pre>
                  Quelle est votre <strong>adresse e.m@il</strong>, s'il vous
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
                  Quel est votre <strong>mot de passe</strong>, s'il vous plait
                  :
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
                title='Un bon mot de passe doit comporter au moins 8 caractères - Ce champ est obligatoire'
              />
            </div>
            {/* <div>
              <BoutonAnnuler />{' '}
              <button
                type='button'
                className='btn btn-green'
                onClick={handleSubmitForm}
              >
                Valider
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageInscription;
