import React from 'react';
import ServiceItem from './ServiceItem';

const Services = ({ services }) => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map(service => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
