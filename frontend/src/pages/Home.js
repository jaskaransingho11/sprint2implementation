import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

import headerImage from '../images/header.jpeg'; 
import hotelImage1 from '../images/hotel1.jpg'; 
import hotelImage2 from '../images/hotel2.jpg';
import hotelImage3 from '../images/hotel3.jpg'; 
import destinationImage1 from '../images/destination1.jpg'; 
import destinationImage2 from '../images/destination2.jpg'; 
import destinationImage3 from '../images/destination3.jpg'; 
import { ReactComponent as GuestIcon } from '../images/profile.svg';
import { useAuth } from '../components/AuthContext';
const Home = () => {
  const navigate = useNavigate();
  const { admin } = useAuth();
  if (admin) {
    navigate('/admin'); 
    return null; 
  }
  return (
    <div className="homepage">
      <header className="header">
        <img src={headerImage} alt="Header" className="header-image" />
        <div className="header-text">
          <h1>Discover the Best Hotels for Your Next Getaway</h1>
          <p>Explore our curated selection of top-rated hotels and resorts to find the perfect accommodation for your upcoming trip.</p>
          <div className="header-buttons">
            <button className="btn btn-primary">Book Now</button>
            <button className="btn btn-secondary">Explore Rooms</button>
          </div>
        </div>
      </header>

      <section className="featured-hotels">
        <h2>Featured Hotels</h2>
        <div className="hotel-list">
          <div className="home-hotel">
            <img src={hotelImage1} alt="The Ritz-Carlton, Bali" className="hotel-image" />
            <h3>The Ritz-Carlton, Bali</h3>
            <p>⭐⭐⭐⭐ (4.8)</p>
            <p>$450 / night</p>
            <button className="btn btn-details">View Details</button>
          </div>
          <div className="home-hotel">
            <img src={hotelImage2} alt="The St. Regis Bora Bora Resort" className="hotel-image" />
            <h3>The St. Regis Bora Bora Resort</h3>
            <p>⭐⭐⭐⭐⭐ (5.0)</p>
            <p>$800 / night</p>
            <button className="btn btn-details">View Details</button>
          </div>
          <div className="home-hotel">
            <img src={hotelImage3} alt="Amangiri, Utah" className="hotel-image" />
            <h3>Amangiri, Utah</h3>
            <p>⭐⭐⭐⭐⭐ (4.9)</p>
            <p>$1,200 / night</p>
            <button className="btn btn-details">View Details</button>
          </div>
        </div>
      </section>

      <section className="popular-destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-list">
          <div className="destination">
            <img src={destinationImage1} alt="Paris, France" className="destination-image" />
            <h3>Paris, France</h3>
            <p>The City of Light, a timeless destination known for its art, fashion, and culture.</p>
          </div>
          <div className="destination">
            <img src={destinationImage2} alt="Bali, Indonesia" className="destination-image" />
            <h3>Bali, Indonesia</h3>
            <p>A tropical paradise with stunning beaches, vibrant culture, and serene landscapes.</p>
          </div>
          <div className="destination">
            <img src={destinationImage3} alt="New York City, USA" className="destination-image" />
            <h3>New York City, USA</h3>
            <p>The city that never sleeps, offering endless attractions, dining, and entertainment.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Guests Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <GuestIcon />
            <div className="testimonial-text">
              <h4>Sarah Lee ⭐⭐⭐⭐⭐ (5.0)</h4>
              <p>"The Ritz-Carlton, Bali was an absolute dream. The accommodations were luxurious, the staff was exceptional, and the views were breathtaking. I can't wait to return!"</p>
            </div>
          </div>
          <div className="testimonial">
            <GuestIcon />
            <div className="testimonial-text">
              <h4>John Doe ⭐⭐⭐⭐⭐ (5.0)</h4>
              <p>"Amangiri was a truly unforgettable experience. The stunning desert landscape, the impeccable service, and the luxurious accommodations made for an once-in-a-lifetime getaway."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
