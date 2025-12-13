import { useState } from "react";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import "./carrousel.scss";

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carrousel">
      <img
        className="carrousel-image"
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />

      {pictures.length > 1 && (
        <>
          <img
            src={arrowLeft}
            alt="Flèche précédente"
            className="arrow left"
            onClick={prevSlide}
          />

          <img
            src={arrowRight}
            alt="Flèche suivante"
            className="arrow right"
            onClick={nextSlide}
          />

          <p className="counter">
            {currentIndex + 1} / {pictures.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Carrousel;
