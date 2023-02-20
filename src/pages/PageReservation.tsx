import Button from 'react-bootstrap/esm/Button';

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
                    nom :
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleFormControlInput1'
                    placeholder='ex : ANDRE-DE-LA-TOUR'
                  />
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    role :
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleFormControlInput2'
                    placeholder='ex : particulier, société, association ou autre'
                  />
                </div>
                <label
                  htmlFor='exampleFormControlInput2'
                  className='form-label'
                >
                  animation souhaitée :
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput3'
                  placeholder='ex : particulier, société, association ou autre'
                />
                <label
                  htmlFor='exampleFormControlInput3'
                  className='form-label'
                >
                  lieu :
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput4'
                  placeholder='ex : terrain aménagé ou chez le particulier'
                />
                <label
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
                />
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
