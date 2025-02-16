import { useState } from "react";
import React from "react";
import './Contact.css'; // Importing the new CSS file for contact page styles
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Add axios for making HTTP requests

const initialState = {
  name: "",
  email: "",
  message: "",
};

function Contact (props) {
  const [{ name, email, message }, setState] = useState(initialState);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => {
    setState({ ...initialState });
    setFeedbackMessage("");
  };

  const sendEmail = async (emailData) => {
    try {
      const response = await axios.post('https://graph.microsoft.com/v1.0/me/sendMail', emailData, {
        headers: {
          'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Replace with your access token
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      // Improved error handling
      if (error.response) {
        throw new Error(`Error sending email: ${error.response.data.error.message}`);
      } else {
        throw new Error('Error sending email: Network error or server not reachable');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailData = {
      message: {
        subject: `New message from ${name}`,
        body: {
          contentType: "Text",
          content: message,
        },
        toRecipients: [
          {
            emailAddress: {
              address: email,
            },
          },
        ],
      },
    };

    try {
      await sendEmail(emailData);
      setFeedbackMessage("Message sent successfully!");
      clearState();
    } catch (error) {
      console.log(error);
      setFeedbackMessage(error.message); // Display specific error message
    }
  };

  return (
    <div>
      <div id="contact" className="contact-section p-4">

        <Container>
          <Row>
            <Col md={8}>
              <div className="section-title">
                <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>Get In Touch</h2>
                <p className="pext">
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              {feedbackMessage && <div className="alert alert-info">{feedbackMessage}</div>}
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <button type="submit" className="contactBtn">
                  Send Message
                </button>
              </Form>
            </Col>
            <Col md={3} className="ms-auto">
              <h3 className="mb-4">Contact Info</h3>
              <p>
                <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Address
                </span><br></br>
                <div className="info">
                  Shop No.23, Hanuman Nagar, Bhagat Vasti, Bhosari, Pimpri-Chinchwad, Maharashtra 411026
                </div>
              </p>
              <p>
                <span>
                    <FontAwesomeIcon icon={faPhone} /> Phone
                </span><br></br>
                  <div className="info">
                    +91 9356976740
                    <br/>
                    +91 9373213347
                    <br/>
                    +91 9359714516
                  </div>
              </p>
              <p>
                <span>
                <FontAwesomeIcon icon={faEnvelope} /> Email
                </span><br></br>
                <div className="info">
                  Kundansah7077@gamil.com
                  <br/>
                  Shahrohit729@gmail.com
                </div>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <footer id="footer" className="bg-light text-center py-3">
        <Container>
          <p className="pb-0 mb-0">
            &copy; 2025 Kundan Engineering. Design by  
            <a className="pb-0" href="https://github.com/sahilsaini1107" rel="nofollow">
                 _Sahil Saini
            </a>
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Contact;
