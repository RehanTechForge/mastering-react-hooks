import React, { useState } from "react";
import "./styles.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
      image: "https://picsum.photos/200/200?random=1", // Dummy image
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
      image: "https://picsum.photos/200/200?random=2", // Dummy image
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
      image: "https://picsum.photos/200/200?random=3", // Dummy image
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <img
        className="testimonials-image"
        src={testimonials[currentIndex].image}
        alt={testimonials[currentIndex].author}
      />
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;
