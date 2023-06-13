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
  
    <Form style={{marginRight:400, marginLeft:300}}>
      <i class='fas fa-envelope-open'style={{fontSize:50}}></i>
      <h4 style={{ color: '#d8e2dc' }}>You can contact me here   <i class='fas fa-hand-point-down'style={{marginLeft:10}}></i></h4>
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
     <Form.Label>Message</Form.Label><br></br>
     <  textarea name="message" row="4"/>
     </Form.Group>
     <Form.Control type="submit" value="Send" style={{backgroundColor:""}}/>
   </form>
   </Form>
 );
};

export default EmailContactForm;