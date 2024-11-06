import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Carousel.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4); // Default to show 4 cards

  // Debounce function to prevent excessive resize calls
  const debounce = (func, delay) => {
    let debounceTimeout;
    return (...args) => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => func(...args), delay);
    };
  };

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

  const debouncedUpdateCardsToShow = debounce(updateCardsToShow, 200);

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % (items.length - cardsToShow + 1); // Wrap around the slides correctly
    });
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (
        (prevIndex - 1 + (items.length - cardsToShow + 1)) %
        (items.length - cardsToShow + 1)
      ); // Wrap around
    });
  };

  useEffect(() => {
    updateCardsToShow(); // Set initial cards to show based on window size

    // Add resize event listener
    window.addEventListener("resize", debouncedUpdateCardsToShow);

    // Auto-slide every 2 seconds
    const intervalId = setInterval(nextSlide, 2000);

    // Cleanup
    return () => {
      clearInterval(intervalId); // Clear interval
      window.removeEventListener("resize", debouncedUpdateCardsToShow); // Remove event listener on cleanup
    };
  }, [items.length, cardsToShow]); // Depend on `items.length` and `cardsToShow` to re-run effect

  // Create a display list of items based on current index and number of cards to show
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
        style={{ width: `${cardsToShow * 200}px` }} // Correct template literal syntax
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
