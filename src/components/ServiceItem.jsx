import React from 'react';

const ServiceItem = ({ service }) => {
  return (
    <div className="service-item">
      <img src={service.icon} alt={service.title} className="service-icon" />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceItem;
