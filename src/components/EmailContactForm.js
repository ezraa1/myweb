import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';

const EmailContactForm = () => {
 const form = useRef();

 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”

   emailjs.sendForm('service_1q7do47', 'template_ojlfshe', form.current, 'Az5A67-Qqt1GJKN4E')
     .then((result) => {
         // show the user a success message
     }, (error) => {
         // show the user an error
     });
 };

 return (
  
    <Form style={{marginRight:1000, marginLeft:20}}>
      <h4 style={{ color: '#d8e2dc' ,fontSize: 20}}>You can contact me here</h4>
   <form ref={form} onSubmit={sendEmail}>
   <Form.Group className="mb-3" controlId="formGroupName">
     <Form.Label>Name</Form.Label>
     <Form.Control type="text" name="user_name" />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formGroupEmail">
     <Form.Label>Email</Form.Label>
     <Form.Control type="email" name="user_email" />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formGroupMessage">
     <Form.Label>Message</Form.Label>
     <textarea name="message" />
     </Form.Group>
     <Form.Control type="submit" value="Send" />
   </form>
   </Form>
 );
};

export default EmailContactForm;