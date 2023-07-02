import React, { useState } from 'react';
import map from '../../images/map.png';
import send from '../../images/send.png';
import phone from '../../images/phone.png';

import {
  Container,
  ContactWrapper,
  FormWrapper,
  ContactInfo,
  Title,
  Text,
  ContactInfoWrap,
  Images,
  GoogleMap,
  ContactForm,
  FormTitle,
  Form,
  FormGroup,
  Label,
  TextArea,
  Input,
  SubmitButton,
} from './ContactElements';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <Container id="contact">
        <ContactWrapper>
          <FormWrapper>
            <ContactInfo>
              <Title>Let's get in touch</Title>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dolorum illo
                voluptates tempore. Laborum veniam accusamus culpa odit, distinctio atque?
              </Text>
              <ContactInfoWrap>
                <Images src={map} alt="map" />
                <span>Jabalpur, India - 482001</span>
              </ContactInfoWrap>
              <ContactInfoWrap>
                <Images src={send} alt="send" />
                <span>alokpatel1362@gmail.com</span>
              </ContactInfoWrap>
              <ContactInfoWrap>
                <Images src={phone} alt="phone" />
                <span>+91 7489419998</span>
              </ContactInfoWrap>
              <GoogleMap>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117371.06209167204!2d79.88617797556542!3d23.175831391583213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae1a0fb6a97d%3A0x44020616bc43e3b9!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1687550095823!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{
                    border: '0',
                    borderRadius: '10px',
                    marginTop: '0.95rem',
                    marginBottom: '0.95rem',
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </GoogleMap>
            </ContactInfo>
            <ContactForm>
              <Form onSubmit={handleSubmit}>
                <FormTitle>Contact Us</FormTitle>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="message">Message</Label>
                  <TextArea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </FormGroup>
                <SubmitButton type="submit">Send Message</SubmitButton>
              </Form>
            </ContactForm>
          </FormWrapper>
        </ContactWrapper>
      </Container>
    </>
  );
};

export default Contact;
