import React from 'react';

const ServiceItem = ({ service, index }) => {
  const isImageOnLeft = index % 2 === 0; // Alternate layout based on index

  return (
    <div className="container">
      <div className="service-item" style={{ display: 'flex', flexDirection: isImageOnLeft ? 'row' : 'row-reverse', padding: '20px', borderRadius: '5px' }}>
        <img src={service.image} alt={service.title} style={{ width: '300px', height: '250px', borderRadius: '5px' }} />
        <div style={{ padding: '20px' }}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
