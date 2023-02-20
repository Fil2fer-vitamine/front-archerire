import Button from "react-bootstrap/esm/Button";

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
              <div className='modal-body'>...</div>
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
