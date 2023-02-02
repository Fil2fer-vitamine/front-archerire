const Carousel2 = () => {
  return (
    <div className='w-50 bg-info'>
      {/* Cette div nous permet d'obtenir un carousel de petite dimension.
      w-50 : l'élément a une largeur égale à 50% de celle de son parent ;*/}

      <div
        id='carouselExampleInterval'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        {/* Constitution d'un carousel avec interval de 2 secondes entre les images */}
        {/* Présentation de la première photo */}
        <div className='carousel-inner'>
          <div className='carousel-item active' data-bs-interval='2000'>
            <img
              src='./Assets/ImagesCarousel/IMG_0611.JPG'
              className='d-block w-100'
              alt='Deux archers en action'
            />
          </div>

          {/* Présentation de la deuxième photo */}
          <div className='carousel-item' data-bs-interval='2000'>
            <img
              src='./Assets/ImagesCarousel/IMG_0629.JPG'
              className='d-block w-100'
              alt='Un groupe archers'
            />
          </div>

          {/* Présentation de la troisième photo */}
          <div className='carousel-item' data-bs-interval='2000'>
            <img
              src='./Assets/ImagesCarousel/IMG_0644.JPG'
              className='d-block w-100'
              alt='Un groupe en protection'
            />
          </div>
        </div>
        <button
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
        </button>
        <button
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
        </button>
      </div>
    </div>
  );
};

export default Carousel2;
