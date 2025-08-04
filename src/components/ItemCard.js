import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ItemCard.css';

const ItemCard = ({ item }) => {
  // Function to make URLs clickable
  const makeLinksClickable = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        // Check if it's an Ikea link or Amazon link and display appropriate text
        let displayText = part;
        if (part.includes('ikea.com')) {
          displayText = 'Ikea Link';
        } else if (part.includes('amazon.com')) {
          displayText = 'Amazon Link';
        }
        
        return (
          <a 
            key={index}
            href={part} 
            target="_blank" 
            rel="noopener noreferrer"
            className="item-link"
          >
            {displayText}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="item-card">
      <div className="item-images">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          className="item-swiper"
        >
          {item.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img 
                src={image} 
                alt={`${item.title} - Image ${index + 1}`}
                className="item-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="item-details">
        <h2 className="item-title">{item.title}</h2>
        <p className="item-description">
          {makeLinksClickable(item.description)}
        </p>
        <div className="item-price">{item.price}</div>
      </div>
    </div>
  );
};

export default ItemCard; 
