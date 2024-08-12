import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Services/ServiceProviderList.css';
import ServiceProviderProfile from './ServiceProviderProfile'; // Import the ServiceProviderProfile component

const serviceProviders = {
  electrician: [
    { id: 1, name: 'John Doe', experience: '5 years', bio: 'Experienced electrician' },
    { id: 2, name: 'Jane Smith', experience: '3 years', bio: 'Reliable electrician' }
  ],
  plumber: [
    { id: 3, name: 'Mike Johnson', experience: '4 years', bio: 'Skilled plumber' },
    { id: 4, name: 'Emily Davis', experience: '2 years', bio: 'Expert plumber' }
  ],
  carpenter: [
    { id: 5, name: 'Steve Brown', experience: '6 years', bio: 'Master carpenter' },
    { id: 6, name: 'Sara Wilson', experience: '4 years', bio: 'Professional carpenter' }
  ]
};

const ServiceProviderList = () => {
  const { service } = useParams();
  const [selectedProvider, setSelectedProvider] = useState(null);

  const providers = serviceProviders[service] || [];

  const handleViewProfile = (provider) => {
    setSelectedProvider(provider);
  };

  const closeModal = () => {
    setSelectedProvider(null);
  };

  return (
    <div className="provider-list">
      <h1>{service.charAt(0).toUpperCase() + service.slice(1)} Providers</h1>
      <div className="providers-container">
        {providers.map(provider => (
          <div className="provider-card" key={provider.id} onClick={() => handleViewProfile(provider)}>
            <h2>{provider.name}</h2>
            <p>Experience: {provider.experience}</p>
            <button>View Profile</button>
          </div>
        ))}
      </div>

      {selectedProvider && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <ServiceProviderProfile provider={selectedProvider} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceProviderList;
