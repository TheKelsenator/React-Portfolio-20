import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const styles = {
  contact: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '40px',
    paddingTop: '40px',
    color: '#09114e',
    backgroundColor: '#964141',
  },
  contactText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '50px',
    color: '#09114e',
    marginRight: '30px',
    padding: '20px',
    borderRight: '#09114e solid 3px',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '25px',
    padding: '10px 10px',
    color: '#09114e',
    backgroundColor: '#964141',
  },
  box: {
    fontSize: '20px',
    width: '300px',
    height: '40px',
    margin: '20px',
  },
  box2: {
    fontSize: '20px',
    width: '300px',
    height: '160px',
    margin: '20px',
  },
  submitButton: {
    fontSize: '20px',
    width: '150px',
    height: '40px',
    margin: '20px',
    
  }
}

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xv7cv2f', 
      'template_dyq6x3p', 
      form.current, 
      'ywZGUsn2qOtNtJhJC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div style={styles.contact}>
      <h2 style={styles.contactText}>Contact Me</h2>
      <div style={styles.form}>
        <form ref={form} onSubmit={sendEmail}>
        <p><label>Name:</label><br/>
        <input style={styles.box} type="text" name="user_name" /></p>  
        <p><label>Email:</label><br/>
        <input style={styles.box} type="email" name="user_email" /></p>  
        <p><label>Message:</label><br/>
        <textarea style={styles.box2} name="message" /></p>  
        <p><input style={styles.submitButton} type="submit" value="Send" /></p>  
        </form>
      </div>
    </div>
  );
}

export default Contact;
