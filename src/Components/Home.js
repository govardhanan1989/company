import React, { useState, useEffect } from 'react';
import '../Css/Home.css';
// import { Button } from 'antd';
// import axios from 'axios';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

 
  return (
    <div>
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div className={index === currentSlide ? 'fade show' : 'fade'} key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="home-container">
        <h1>Welcome to our GD Manufacturer</h1>
        <div className="like-dislike-buttons">
          <button onClick={handleLike}>Like</button>
          <span>Likes: {likes}</span>
          <button onClick={handleDislike}>Dislike</button>
          <span>Dislikes: {dislikes}</span>
        </div>
      </div>
      
      
    </div>
  );

};

export default Home;

const images = [
  // "https://media.istockphoto.com/id/172879847/photo/bag-of-groceries.jpg?s=1024x1024&w=is&k=20&c=Rlj1tkXn6-Rn0ZWfMhkQRKYTrXpzKwihauETRKdpLMU="
  // "https://media.istockphoto.com/id/1309749792/photo/fresh-market-groceries-bag.jpg?s=1024x1024&w=is&k=20&c=mqLm6jHr1iw15NdZ4KGM1u-Wi6yLkVf6IFAezF5rZrY="
  // "https://media.istockphoto.com/id/184376621/photo/bag-of-groceries.jpg?s=612x612&w=0&k=20&c=ueQJ7ifEj47amNQqNhTZwXlTKQMPx9SbpbUYbVz0DhM="
  "https://media.istockphoto.com/id/1359499546/photo/paper-shopping-bag-eco-friendly-biodegradable-packing-bag.jpg?s=612x612&w=0&k=20&c=jOqUGj9NZ70WF8yeeK4Xoni5cvBctlpIo2bK37zU-Pg=",
  // "https://media.istockphoto.com/id/1022106116/photo/blank-brown-paper-bag-isolated-on-white-background-with-clipping-path.jpg?s=1024x1024&w=is&k=20&c=aspsHrlBtWCk3uEtAntyn8AWzRtlGG93JHJp-wNT9vc="
];
