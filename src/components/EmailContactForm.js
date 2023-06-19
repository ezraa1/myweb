import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';

const EmailContactForm = () => {
 const form = useRef();

 const sendEmail = () => {
    // prevents the page from reloading when you hit “Send”

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
    <label for="user_name">Name</label>
    <input type="text" name="user_name" id="user_name"/>
  </div>
  

    <div class="field">
    <label for="user_email">Email</label>
    <input type="text" name="user_email" id="user_email"/>
  </div>

  <div class="field">
    <label for="message">Message</label>
    < textarea name="message" id="message" rows={4}/>
  </div>

  <input type="submit" id="button" value="Send Email" />
</form>
 );
};

export default EmailContactForm;