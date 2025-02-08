import React from "react";
import './HeroSection.css';

export const About = (props) => {
  const defaultData = {
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Why: ["Quality Service", "Customer Satisfaction", "Expert Team"],
    Why2: ["Affordable Prices", "24/7 Support", "Innovative Solutions"]
  };

  return (
    <div id="about" style={{ padding: '50px 0', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px' ,textAlign: 'center'}}>About Us</h2>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="https://picsum.photos/800/400" className="img-responsive" alt="About Us" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <p>{props.data ? props.data.paragraph : defaultData.paragraph}</p>
              <h3 style={{ fontSize: '28px', fontWeight: 'bold' }}>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {(props.data ? props.data.Why : defaultData.Why).map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {(props.data ? props.data.Why2 : defaultData.Why2).map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
