import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Carousel.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4); // Default to show 4 cards

  // Update the number of cards to show based on window width
  const updateCardsToShow = () => {
    const width = window.innerWidth;
    if (width < 600) {
      setCardsToShow(1); // Show 1 card for small screens
    } else if (width < 900) {
      setCardsToShow(2); // Show 2 cards for medium screens
    } else {
      setCardsToShow(4); // Show 4 cards for larger screens
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % (items.length + 1 - cardsToShow);
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (
        (prevIndex - 1 + (items.length + 1 - cardsToShow)) %
        (items.length + 1 - cardsToShow)
      );
    });
  };

  useEffect(() => {
    updateCardsToShow(); // Set initial cards to show
    window.addEventListener("resize", updateCardsToShow); // Update on window resize

    const intervalId = setInterval(nextSlide, 2000); // Change slide every 2 seconds
    return () => {
      clearInterval(intervalId); // Cleanup on unmount
      window.removeEventListener("resize", updateCardsToShow); // Cleanup event listener
    };
  }, []);

  // Determine which cards to show based on the current index
  const displayItems = items
    .slice(currentIndex, currentIndex + cardsToShow)
    .concat(
      items.slice(0, Math.max(0, currentIndex + cardsToShow - items.length))
    );

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094; {/* Left arrow */}
      </button>
      <div
        className="carousel-cards moving"
        style={{ width: `${cardsToShow * 200}px` }}
      >
        {displayItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            imageSrc={item.imageSrc}
            description={item.description}
          />
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Carousel;