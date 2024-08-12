import React from 'react';
import '../Assets/Service.css';
import { useState } from 'react';
import { color } from 'framer-motion';
const offerings = [
  {
    image: 'https://cdn.porch.com/bootstrap/0web/done/859-appliance-installation-small.jpg',
    title: 'Application Installation',
    
    
  },
  {
    image: 'https://cdn.porch.com/bootstrap/0web/done/6144-furniture-assembly-small.jpg',
    title: 'Furniture Assembly',

    
  },
  {
    image: 'https://cdn.porch.com/bootstrap/0web/done/5056-fan-installation-small.jpg',
    title: 'Ceiling Fan Instalation',
    
    
  },
  {
    image: 'https://cdn.porch.com/bootstrap/0web/done/5301-tv-mounting-small.jpg',
    title: 'TV Mounting',
   
   
  },
  {
    image: 'https://cdn.porch.com/bootstrap/0web/done/4939-art-hanging-small.jpg',
    title: 'Art Hanging',
    
    
  },
  {
    image: 'https://cdn.porch.com/bootstrap/0web/done/4903-dryer-vent-cleaning-small.jpg',
    title: 'Dryer Vent Cleaning',
    
    
  },
  {
    image: 'https://cdn.porch.com/bootstrap/0web/done/3909-gutter-cleaning-small.jpg',
    title: 'Gutter Cleaning',
   
   
  },
  {
    image: 'https://cdn.porch.com/bootstrap/0web/done/6155-light-switch-installation-repair-small.jpg',
    title: 'Light Switch Replacement',
    
    
  },
  {
    image: 'https://cdn.porch.com/bootstrap/0web/done/5011-deck-repair-small.jpg',
    title: 'Deck Repair',
   
   
  },
  
 
];


const Service = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOfferings = offerings.filter(offering =>
    offering.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="body-container">
      <div className='home-first'>
        <div className="body-div">
          <img 
            className="hotel" 
            src="https://apelectricinc.com/wp-content/uploads/2019/02/AP-ELECTRIC-TITLE-IMAGE.jpg"
            alt="Home Service Banner" 
          />
          <div className="transparent-layers"></div>  
          <div className="text-overlay"> 
            <h1><b>Our Services</b></h1>
            <p>Providing reliable Electrical services and low rate guarantee’s.</p>
          </div>
        </div>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for services..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit' className='search-button'>Search</button>
      </div>
      <div className="offerings-section">
        <h2 className='h2'>Our Offerings</h2>
        <div className="offerings-list">
          {filteredOfferings.length > 0 ? (
            filteredOfferings.map((offering, index) => (
              <div key={index} className="offering-container">
                <img src={offering.image} alt={offering.title} className="offering-image" />
                <div className="offering-content">
                  <h3>{offering.title}</h3>
                </div>
              </div>
            ))
          ) : (
            <p>No services found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;