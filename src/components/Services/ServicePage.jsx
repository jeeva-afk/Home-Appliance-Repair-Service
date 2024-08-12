
import React from 'react';
import '../Services/ServicePage.css';
import { useNavigate } from 'react-router-dom';

const services = [
  { name: 'Electrician', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVNJjPjixqZj4t5wEdsiX83l23vdVJ2opxg&s' },
  { name: 'Plumber', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zvB4sF4v3YV_aIbA_8tfeWFiDD_35MzLjA&s' },
  { name: 'Carpenter', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKRAH1gSU85H3hLkEcrbbwP3wqmJ-BaDwDQ&s' },
  { name: 'Tv Repair', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKRAH1gSU85H3hLkEcrbbwP3wqmJ-BaDwDQ&s' },
  { name: 'Tv Repair', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKRAH1gSU85H3hLkEcrbbwP3wqmJ-BaDwDQ&s' },
  { name: 'Tv Repair', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKRAH1gSU85H3hLkEcrbbwP3wqmJ-BaDwDQ&s' }
];

const ServicePage = () => {
  const navigate = useNavigate();

  const handleBookService = (service) => {
    navigate(`/services/${service.name.toLowerCase()}`);
  };

  return (
    <div className="service-page">
      <h1>Our Services</h1>
      <div className="services-container">
        {services.map(service => (
          <div className="service-card" key={service.name} onClick={() => handleBookService(service)}>
            <img src={service.img} alt={service.name} />
            <h2>{service.name}</h2>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
