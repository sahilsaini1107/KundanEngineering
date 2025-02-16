import React from "react";
import './HeroSection.css';
import anoutImg from '../images/aboutmian.png'

export const About = (props) => {
  const defaultData = {
    paragraph: "At Kundan Engineering, we specialize in precision machining services that cater to a variety of industries, including aerospace, automotive, and medical devices. Our state-of-the-art technology and skilled team ensure that we deliver high-quality products with tight tolerances and complex geometries. We are dedicated to providing innovative solutions that meet our clients' needs.",
    Why: ["Quality Service", "Customer Satisfaction", "Expert Team", "Precision Machining Expertise"],
    Why2: ["Affordable Prices", "24/7 Support", "Innovative Solutions", "Advanced Technology"]

  };

  return (
    <div id="about" style={{ padding: '50px 0', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px' ,textAlign: 'center'}}>About Us</h2>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 ">
            <img src={anoutImg} className="imgAbout" alt="About Us" style={{ width: '100%', height: 'auto' }} />
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
