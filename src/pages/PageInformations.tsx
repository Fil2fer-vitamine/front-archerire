import { NavLink } from 'react-router-dom';
import CarouselInformation from '../components/CarouselInformation';


const PageInformations = () => {
  return (
    <div>
      <div className='carousels'>
        <div className='d-flex p-2 bd-highlight'>
          <CarouselInformation />
        </div>
      </div>
      <div className='accordion accordion-flush' id='accordionFlushExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingOne'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseOne'
              aria-expanded='false'
              aria-controls='flush-collapseOne'
            >
              <h1>Qui sommes-nous ?</h1>
            </button>
          </h2>
          <div
            id='flush-collapseOne'
            className='accordion-collapse collapse'
            aria-labelledby='flush-headingOne'
            data-bs-parent='#accordionFlushExample'
          >
            <div className='accordion-body'>
              <img
                src='./Assets/ImagesPageInformations/Thomas.png'
                className='d-block w-20'
                alt='Thomas'
                title="Voici monsieur ANDRE Thomas, le Président Directeur Général d'Archerire"
              />
              Nous sommes une toute petite équipe ... pour l'instant ...
              <br></br>
              cependant, les membres de celle-ci sont titulaires du BAFA.
              <br></br>
              Nous sommes basés sur Fresnoy-en-Thelle, dans l'Oise.
              <NavLink
                to='https://www.google.com/maps/dir//Imp.+de+la+Ferme,+60530+Fresnoy-en-Thelle/@49.2017468,2.1986883,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e6510f8a3446a7:0x1e6abdd90bafe331!2m2!1d2.2687294!2d49.2017657'
                end
                className='nav-link'
                target='_blank'
              >
                <strong>
                  <em>
                    Cliquez ici pour voir les environs autour de
                    l'auto-entreprise Archerire ...
                  </em>
                </strong>
              </NavLink>
              Nous avons la possibilité de nous rendre sur les lieux dans un
              rayon d'une trentaine de kilomètres.<br></br>
              <code>
                Cependant, toutes demandes et toutes distances seront étudiées :
                une réponse est donnée à chacune des sollicitations.
              </code>
              <br></br>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseTwo'
              aria-expanded='false'
              aria-controls='flush-collapseTwo'
            >
              <h2>Que proposons-nous ?</h2>
            </button>
          </h2>
          <div
            id='flush-collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='flush-headingTwo'
            data-bs-parent='#accordionFlushExample'
          >
            <div className='accordion-body'>
              Nous voulions faire en sorte de concilier les notions que l'on
              retrouve dans la <code>balle aux prisonniers</code> et le
              <code> paintball</code>, sans pour autant avoir les désagréments
              dus à la peinture.
              <br></br>
              Notre équipe s'est concentrée sur ce qu'apporte, en teme de
              loisir, l'archery battle, également appelé 'archery tag'...
              <br></br>
              Les joueurs sont équipés d'arcs et de flèches (avec, sur chacune
              d'entre elles, à son extrémité, une protection en mousse).
              <br></br>
              Sachant ceci, nous évitons donc les traces de peinture, ... et,
              notamment, les douleurs dues aux impacts des balles de peinture
              ... Il y a également, dans ce jeu <code>fantastique</code> et{' '}
              <code>addictif</code>, l'agréable possibilité de renouer avec les
              sensations de la balle aux prisonniers de notre enfance.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingThree'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseThree'
              aria-expanded='false'
              aria-controls='flush-collapseThree'
            >
              <h2>A qui s'adresse cette activité ?</h2>
            </button>
          </h2>
          <div
            id='flush-collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='flush-headingThree'
            data-bs-parent='#accordionFlushExample'
          >
            <div className='accordion-body'>
              Cette activité s'adresse à tout le monde dans le cadre d'un
              évènement particulier : cousinade, anniversaire, réunion d'équipe,
              ou autre ... <br></br>
              Les enfants sont pris en charge à partir de sept ans.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingFour'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseFour'
              aria-expanded='false'
              aria-controls='flush-collapseFour'
            >
              <h2>Qu'est-ce que l'archery battle, dîtes-moi ?</h2>
            </button>
          </h2>
          <div
            id='flush-collapseFour'
            className='accordion-collapse collapse'
            aria-labelledby='flush-headingFour'
            data-bs-parent='#accordionFlushExample'
          >
            <div className='accordion-body'>
              <code>
                <em>Je répondrai que c'est une très bonne question ...</em>
              </code>
              L’Archery Battle consiste à s’affronter en équipes de quatre, cinq
              ou six joueurs, au tir à l’arc version indolore et sécurisée !
              <br></br>
              Il faut mener une équipe à la victoire en éliminant les
              adversaires ou en cherchant la précision pour viser, avec arc et
              flèches, les cibles sur le terrain. <br></br>
              Vous pouvez tenter une{' '}
              <code> stratégie avec vos coéquipiers</code> ou décider de vous la{' '}
              <code>jouer en solo</code> pour tenter de devenir, à la fin de la
              partie, un des plus dignes héritiers de Messire Robin des bois !!!
              <br></br>
              Parfois, des tournois sont organisés lorsque plusieurs équipes
              sont constituées : là, le jeu prend une toute autre dimension ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageInformations;
