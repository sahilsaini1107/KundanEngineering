import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Machine = () => {
  const [deviceType, setDeviceType] = useState('desktop'); // Default to desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 464) {
        setDeviceType('mobile');
      } else if (window.innerWidth >= 464 && window.innerWidth < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="machine-section" style={{ padding: '50px 0', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '30px' , fontWeight: 'bold' }}>Machines</h2>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== "mobile"}
        autoPlaySpeed={2000}
        keyBoardControl={false}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img alt="machine 1" width="100%" src="https://picsum.photos/800/600?random=3" />
        </div>
        <div>
          <img alt="machine 2" width="100%" src="https://picsum.photos/800/600?random=5" />
        </div>
        <div>
          <img alt="machine 3" width="100%" src="https://picsum.photos/800/600?random=2" />
        </div>
        <div>
          <img alt="machine 4" width="100%" src="https://picsum.photos/800/600?random=1" />
        </div>
      </Carousel>
    </section>
  );
};

export default Machine;
