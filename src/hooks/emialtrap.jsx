import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
  const form = useRef();
  const[message, setMessage] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gihwzmm', 'template_ena34uq', form.current, 'NBX_MdZPfoh0FbtcW')
      .then((result) => {
          console.log(result.text);
          setMessage(()=>{
            toast.success('Successfully sent!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
          });
          e.target.reset();
          return message;
          
      }, (error) => {
          console.log(error.text);
          setMessage(()=>{
            toast.error('Successfully sent!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
          });
            return message;
      });

      
  };

  return (
    <>
        <form ref={form} onSubmit={sendEmail}>
        <div className="top">
            <input type="text" name="user_name" placeholder="Your Name" required/>
            <input type="email" name="user_email" placeholder="Your Email" required />
        </div>
            <div className="middle">
                <input type="text" name="from_name" placeholder="Subject" required/>
            </div>
            <div className="bottom">
                <textarea type="text" name="message" required></textarea>
            </div>
            <div className="button">
            <input type="submit" value=" Send Message" />
            </div>                                   
        </form>
        <ToastContainer />

    </>
  );
};