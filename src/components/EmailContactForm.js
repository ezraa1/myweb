import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';

const EmailContactForm = () => {
 const form = useRef();

 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”

   emailjs.sendForm('service_1q7do47', 'template_y4jbvu7', form.current, 'Az5A67-Qqt1GJKN4E')
     .then((result) => {
         // show the user a success message
     }, (error) => {
         // show the user an error
     });
 };

 return (
<form id="form" ref={form} onSubmit={sendEmail}>
  <div class="field">
    <label for="user_name">user_name</label>
    <input type="text" name="user_name" id="user_name"/>
  </div>
  <div class="field">
    <label for="message">message</label>
    <input type="text" name="message" id="message"/>
  </div>
  <div class="field">
    <label for="user_email">user_email</label>
    <input type="text" name="user_email" id="user_email"/>
  </div>

  <input type="submit" id="button" value="Send Email" />
</form>
 );
};

export default EmailContactForm;