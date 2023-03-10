const PageActualites = () => {
  return (
    <div>
      <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              ***** Information : 22/03/2023 13H50 - Programmation d'une session
              d'Archery-Battle à Fresnoy-en-Thelle *****
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <strong>
                Une nouvelle session d'Archery est programmée près de chez vous
                ...
                <br />
              </strong>{' '}
              Voici une nouvelle occasion de venir vous divertir pendant une
              session d'archry-battle : votre prochaine session est programmée
              pour le mercredi 22/03/2023 13H50{' '}
              <code>au stade de Fresnoy-en-Thelle</code>, ...
              <br />
              venez nombreux ...
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              ***** Information : Programmation d'une session de combat de sumos
              gonflables à Méru, au mois de mai --- date non encore définie pour
              le moment --- mais c'est prévu ***** .
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <strong>
                Une nouvelle session de combat de sumos gonflables est
                programmée près de chez vous ... Préparez-vous ...
                <br />
              </strong>{' '}
              Dès qu'on en saura plus, vous serez les premiers à être au courant
              ... Si vous n'êtes pas encore inscrits, c'est encore le bon moment
              de le faire ... C'est prévu de se dérouler à Méru
              <code>au cours du mois de mai 2023</code>, ...
              <br />
              venez nombreux ...
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingThree'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              ***** Attention : Stage de tir *****
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <strong>
                Un lacher d'archers non expérimentés est prévu pour la journée
                du 11 juin 2023 !!!
                <br />
              </strong>{' '}
              Venez mesurer à eux ... <code>un goûter termira le carnage</code>,
              ...
              <br />
              venez nombreux ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageActualites;
