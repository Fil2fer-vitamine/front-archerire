import axios from 'axios';
import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router';
import BoutonAnnuler from '../components/BoutonAnnuler';

// interface ConnexionProps {
//   LaPropsDeLaMamanQuOnPasseALEnfant: React.Dispatch<
//     React.SetStateAction<User | undefined>
//   >;
// }

const Connexion = () => {
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log('Bouton de formulaire - clic effectué');
    console.log('---emailElement--- -->', emailElement.current?.value);
    console.log('---passwordElement--- -->', passwordElement.current?.value);
 
    // ici on met une condition pour imposer les 2 valeurs du champs obligatoire, sinon on ne rentre pas dans notre axios

    if (emailElement.current?.value === "") {
      return "Tous les champs doivent être remplis";
    }
    if (passwordElement.current?.value === "") {
      return "Tous les champs doivent être remplis ";
    }
    axios
      .post(`http://localhost:8080/api/auth/login`, {
        mail: emailElement.current?.value,
        password: passwordElement.current?.value,
      })
      .then((response) => {
        console.log(response);
        const token = response.data.accessToken;
        const userConnected = response.data.user;
        // LaPropsDeLaMamanQuOnPasseALEnfant(userConnected);

        console.log(response.data.accessToken);
        // stock "set" le token
        localStorage.setItem("token", token);
        navigate("/Reservations");
      })
      .catch((err) => {
        console.error(err);
      });
  };
    return (
      <div>
        <div className='centrage'>
          <div>
            <div>
              <label htmlFor='basic-url' className='form-label fw-bold'>
                Afin de vous connecter, merci de saisir
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
                    type='button'
                    className='btn btn-outline-success btn-lg'
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


export default Connexion;
