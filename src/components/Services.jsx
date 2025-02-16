import React from 'react';
import ServiceItem from './ServiceItem';
import cnc from '../images/cnc.png';
import millingMaachine from '../images/millingMaachine.jpg';
import vmc from '../images/vmc.jpg';
import WireEDM from '../images/Wire-EDM.png';

const Services = () => {
  const services = [
    {
      title: "Wirecut EDM",
      application: "Tool and Die Making, Aerospace Components, Medical Devices, Automotive Parts",
      description: "Creating molds and dies for manufacturing processes. Parts that require very tight tolerances. For cutting tough materials or parts with complex geometries.",
      image: cnc

    },
    {
      title: "VMC",
      application: "Die Making, Tool Making",
      description: "Creating mold cavities, Shaping complex features like undercuts, Making core pins, inserts, and other mold component, High-precision finishing. Manufacture specialized cutting tools, such as end mills, drills, and inserts. Create jigs and fixtures that hold parts in place during the manufacturing process. Perform precision grinding and sharpening of tools",
      image: millingMaachine

    },
    {
      title: "CNC",
      application: "Complex Geometry, Surface Finish, Precision Manufacturing",
      description: "Provide high precision in shaping, grinding, and machining metal tools and dies. The process ensures that complex shapes and intricate features are produced with tight tolerances, which is essential for creating molds and dies that will be used in mass production. Provide a superior surface finish on tools and dies. This is important because a smooth surface reduces wear and improves the functionality of the final product, such as preventing premature failure of molds or dies in production settings.",
      image: vmc

    }
    ,
    {
      title: "Milling Machine",
      application: "Machining of Metals, Production of Engine Components, Automotive Industry, Prototype Manufacturing",
      description: "Create complex shapes, including holes, slots, and grooves, on metals like steel, aluminum, and titanium. Manufacturing engine parts, such as crankshafts, camshafts, cylinder heads, and other precision components. Create prototypes and models for testing and design validation before mass production.",
      image: WireEDM

    }
  ];

  return (
    <section className="services-section" id="services" style={{ backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '30px' , fontWeight: 'bold' }}>Services</h2>
      {services.map((service, index) => (
        <ServiceItem key={index} service={service} index={index} />
      ))}
    </section>
  );
};

export default Services;
