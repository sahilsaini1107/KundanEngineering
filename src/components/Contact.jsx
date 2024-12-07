import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const initialState = {
  name: "",
  email: "",
  message: "",
};

function Contact (props) {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact" className="p-4 bg-info text-white">
        <Container>
          <Row>
            <Col md={8}>
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
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
                <Button type="submit" variant="primary" className="btn-lg">
                  Send Message
                </Button>
              </Form>
            </Col>
            <Col md={3} className="ms-auto">
              <h3 className="mb-4">Contact Info</h3>
              <p>
                <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Address
                </span><br></br>
                    plot 161 moshi pradhikaran
              </p>
              <p>
                <span>
                    <FontAwesomeIcon icon={faPhone} /> Phone
                </span><br></br>
                    +91 8949686260
              </p>
              <p>
                <span>
                <FontAwesomeIcon icon={faEnvelope} /> Email
                </span><br></br>
                    sohil170246@gmail.com
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <footer id="footer" className="bg-light text-center py-3">
        <Container>
          <p className="pb-0 mb-0">
            &copy; 2024 Rohit. Design by  
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