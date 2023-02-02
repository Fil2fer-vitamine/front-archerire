

const Carousel = () => {
    return (
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./Assets/ImagesCarousel/IMG_0611.JPG" className="d-block w-100" alt="Deux archers en action" />
    </div>
    <div className="carousel-item">
      <img src="./Assets/ImagesCarousel/IMG_0629.JPG" className="d-block w-100" alt="Un groupe" />
    </div>
    <div className="carousel-item">
      <img src="./Assets/ImagesCarousel/IMG_0644.JPG" className="d-block w-100" alt="En pleine action" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Carousel;