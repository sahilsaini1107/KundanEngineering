import React from 'react';
import ServiceItem from './ServiceItem';

const Services = () => {
  const services = [
    {
      title: "Service One",
      description: "This is a description for service one. It provides great value and quality.",
      image: "https://picsum.photos/250/250?image=10"
    },
    {
      title: "Service Two",
      description: "This is a description for service two. It is designed to meet your needs.",
      image: "https://picsum.photos/250/250?image=20"
    },
    {
      title: "Service Three",
      description: "This is a description for service three. Experience the best service with us.",
      image: "https://picsum.photos/250/250?image=30"
    }
  ];

  return (
    <section className="services-section" id="services" style={{ padding: '50px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '30px' , fontWeight: 'bold' }}>Services</h2>
      {services.map((service, index) => (
        <ServiceItem key={index} service={service} index={index} />
      ))}
    </section>
  );
};

export default Services;
