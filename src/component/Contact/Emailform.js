import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Emailform.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Emailform() {

  const formRef= useRef();
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mgz2t1p', 'template_k02e86n', formRef.current, '9zr7iT74_FoOZ9RKN')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();

      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <Form className="c-form" ref={formRef} onSubmit={sendEmail}>
      <Form.Group className="mb-3 " controlId="formBasicName">
        <Form.Control type="text" className='inp-box' placeholder="Name" name="user_name" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSubject">
        <Form.Control type="text" placeholder="Subject" name="user_subject" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email"  name="user_email"/>
       
      </Form.Group>
      <Form.Group>
        <Form.Control as="textarea" aria-label="With textarea" placeholder='Message' name="user_message" />
      </Form.Group>

      <Button className="my-3" variant="primary" type="submit">
        Submit
      </Button>
      {done && alert("email sent")}
    </Form>
  );
}

export default Emailform;