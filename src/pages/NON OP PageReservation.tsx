import Button from 'react-bootstrap/esm/Button';
import location from '../components/NON OP ListeVilles';

const PageReservation = () => {
  return (
    <div>
      <div className='container'>
        <h2>Page de réservation</h2>
        {/* Trigger the modal with a button */}
        <Button
          type='button'
          className='btn btn-success'
          data-bs-toggle='modal'
          data-bs-target='#exampleModal'
        >
          Cliquez ici pour réserver ...
        </Button>

        {/* Modal */}
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
                  Nouvelle réservation
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
                  />
                  <div className='form-group'>
                    <label htmlFor='selection'></label>
                    <select id='selection' className='form-control'>
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
                      <optgroup label='A moins de 10 kms :'>
                        {/* <option value=''>{location.village_name_id}</option> */}
                        <option value=''>Fresnoy-en-Thelle - 0 km</option>
                        <option value=''>Morangle - 1,9 km</option>
                        <option value=''>Le Mesnil-en-Thelle - 2,73 kms</option>
                        <option value=''>Neuilly-en-Thelle - 2,80 kms</option>
                        <option value=''>
                          Puiseux-le-Hauberger - 2,89 kms
                        </option>
                        <option value=''>Dieudonné - 3,69 kms</option>
                        <option value=''>Belle-Eglise - 4,04 kms</option>
                        <option value=''>Crouy-en-Thelle - 4,07 kms</option>
                        <option value=''>Chambly - 4,22 kms</option>
                        <option value=''>Ercuis - 4,48 kms</option>
                        <option value=''>Bornel - 4,66 kms</option>
                        <option value=''>Bernes-sur-Oise - 5,18 kms</option>
                        <option value=''>Ronquerolles - 5,30 kms</option>
                        <option value=''>Persan - 5,59 kms</option>
                        <option value=''>Bruyères-sur-Oise - 6,51 kms</option>
                        <option value=''>
                          Blaincourt-lès-Précy - 6,67 kms
                        </option>
                        <option value=''>Beaumont-sur-Oise - 6,72 kms</option>
                        <option value=''>Précy-sur-Oise - 7,22 kms</option>
                        <option value=''>Boran-sur-Oise - 7,26 kms</option>
                        <option value=''>Mours - 7,65 kms</option>
                        <option value=''>Esches - 7,84 kms</option>
                        <option value=''>
                          Lachapelle-Saint-Pierre - 7,94 kms
                        </option>
                        <option value=''>Champagne-sur-Oise - 8,07 kms</option>
                        <option value=''>Nointel - 8,26 kms</option>
                        <option value=''>Noisy-sur-Oise - 8,51 kms</option>
                        <option value=''>Ully-saint-Georges - 8,61 kms</option>
                        <option value=''>Foulangues - 8,81 kms</option>
                        <option value=''>Novillers - 8,87 kms</option>
                        <option value=''>
                          MorteFontaine-en-Thelle - 9,08 kms
                        </option>
                        <option value=''>Hédouville - 9,22 kms</option>
                        <option value=''>
                          Villers-sous-saint-Leu - 9,23 kms
                        </option>
                        <option value=''>Presles - 9,66 kms</option>
                        <option value=''>Asnières-sur-Oise - 9,88 kms</option>
                        <option value=''>Maysel - 9,90 kms</option>
                      </optgroup>
                      <optgroup label='Entre 10 à 20 kms :'>
                        <option value=''>Andeville - 10,06 kms</option>
                        <option value=''>Cires-lès-Mello - 10,17 kms</option>
                        <option value=''>Mello - 10,34 kms</option>
                        <option value=''>Méru - 10,50 kms</option>
                        <option value=''>
                          Saint-Leu-d'Esserent - 10,62 kms
                        </option>
                        <option value=''>Frouville - 10,64 kms</option>
                        <option value=''>Gouvieux - 10,65 kms</option>
                        <option value=''>Parmain - 10,76 kms</option>
                        <option value=''>L'Isle-Adam - 10,78 kms</option>
                        <option value=''>Nesles-la-Vallée - 10,88 kms</option>
                        <option value=''>Amblainville - 10,95 kms</option>
                        <option value=''>Viarmes - 11,55 kms</option>
                        <option value=''>Sainte-Geneviève - 11,24 kms</option>
                        <option value=''>Cramoisy - 11,24 kms</option>
                        <option value=''>Cauvigny - 11,26 kms</option>
                        <option value=''>
                          Saint-Vaast-lès-Mello - 11,42 kms
                        </option>
                        <option value=''>
                          Balagny-sur-Thérain - 11,55 kms
                        </option>
                        <option value=''>Arronville - 11,62 kms</option>
                        <option value=''>Labbeville - 11,78 kms</option>
                        <option value=''>
                          Saint-Martin-du-Tertre - 11,84 kms
                        </option>
                        <option value=''>Nerville-la-Forêt - 12,48 kms</option>
                        <option value=''>Seugy - 12,65 kms</option>
                        <option value=''>
                          Laboissière-en-Thelle - 12,68 kms
                        </option>
                        <option value=''>Thiverny - 12,75 kms</option>
                        <option value=''>Menouville - 13,01 kms</option>
                        <option value=''>Valmondois - 13,16 kms</option>
                        <option value=''>Montataire - 13,17 kms</option>
                        <option value=''>Saint-Maximin - 13,28 kms</option>
                        <option value=''>Vallangoujard - 13,40 kms</option>
                      </optgroup>
                      <optgroup label='Entre 20 à 30 kms :'>
                        <option value=''>xxxxxx - 20,xx kms</option>
                      </optgroup>
                    </select>
                  </div>
                  {/* ---------------------------------------------------------------------------- */}
                  {/* <div className='form-group'>
                    <label htmlFor='selection'></label>
                    <select id='selection' className='form-control'>
                      <option value=''>Localisation</option>

                      <option value=''>
                        
                        ### Mettre les différentes villes à disposition de la
                        base de données...
                        http://localhost:8080/api/locations ###
                      </option>
                    </select>
                  </div> */}
                </div>

                {/* <label
                  htmlFor='exampleFormControlInput4'
                  className='form-label'
                >
                  ville :
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput5'
                  placeholder='ex : Fresnoy-En-Thelle'
                /> */}
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
      </div>
    </div>
  );
};

export default PageReservation;
