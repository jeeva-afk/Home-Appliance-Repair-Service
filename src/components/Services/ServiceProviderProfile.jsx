import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Services/ServiceProviderProfile.css';

const ServiceProviderProfile = ({ provider }) => {
  const navigate = useNavigate();

  const handleBookService = () => {
    navigate("/Booking");
  };

  if (!provider) {
    return <div>Service provider not found</div>;
  }

  return (
    <div className="provider-profile">
      <h1>{provider.name}</h1>
      <p>Experience: {provider.experience}</p>
      <p>{provider.bio}</p>
      <button onClick={handleBookService}>Book Service</button>
    </div>
  );
};

export default ServiceProviderProfile;
