const Carousel2 = () => {
  return (
    <div className=''>
      <div className=' '>
        {/* Cette div nous permet d'obtenir un carousel de petite dimension.
      w-25 : l'élément a une largeur égale à 50% de celle de son parent ;*/}

        {/* <div
          id='carouselExampleInterval'
          className='carousel slide'
          data-bs-ride='carousel'
        > */}
        {/* Constitution d'un carousel avec interval de 2 secondes entre les images */}
        {/* Présentation de la première photo */}
        <div className='' style={{ display: 'flex', width: '100%'  }}>
          
          <div>
            <img
              src='./Assets/ImagePanoplie/bunker.png'
              className=' w-100'
              alt='La flêche est une des accessoire.'
            />
          </div>
          <div>
            <img
              src='./Assets/ImagePanoplie/fleches.png'
              className=' w-100'
              alt='La flêche est une des accessoire.'
            />
          </div>

          <div>
            <img
              src='./Assets/ImagePanoplie/un-arcredimension.png'
              className=' w-100'
              alt='Le masque de protection est un des accessoire.'
            />
          </div>

          <div>
            <img
              src='./Assets/ImagePanoplie/lemasque.png'
              className=' w-100'
              alt='Le masque de protection est un des accessoire.'
            />
          </div>

          

          {/* <div
              className='carousel-item active'
              data-bs-interval='3000'
              style={{ height: '330px', backgroundColor: 'white' }}
            >
              <img
                src='./Assets/ImagePanoplie/flechesredimension.png'
                className='d-block w-100'
                alt='La flêche est une des accessoire.'
              />
            </div> */}

          {/* Présentation de la deuxième photo */}
          {/* <div
              className='carousel-item'
              data-bs-interval='3000'
              style={{ height: '330px', backgroundColor: 'white' }}
            >
              <img
                src='./Assets/ImagePanoplie/lemasqueredimension.png'
                className='d-block w-100'
                alt='Le masque de protection est un des accessoire.'
              />
            </div> */}

          {/* Présentation de la troisième photo */}
          {/* <div
              className='carousel-item'
              data-bs-interval='3000'
              style={{ height: '330px', backgroundColor: 'white' }}
            >
              <img
                src='./Assets/ImagePanoplie/un-arcredimension.png'
                className='d-block w-100'
                alt='Un groupe en protection'
              />
            </div> */}

          {/* Présentation de la quatrième photo */}
          {/* <div
              className='carousel-item'
              data-bs-interval='3000'
              style={{ height: '330px', backgroundColor: 'white' }}
            >
              <img
                src='./Assets/ImagePanoplie/bunkerredimension.png'
                className='d-block w-100'
                alt='Un groupe en protection'
              />
            </div> */}
          {/* </div> */}
          {/* <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleInterval'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button> */}
          {/* <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleInterval'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
