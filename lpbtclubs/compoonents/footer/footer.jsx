"use client"
import React, { useRef, useState } from 'react'
import "./footercss.css"
import emailjs from '@emailjs/browser';

export default function Footer() {
  const form = useRef();
  // const [feedback,setFeedback]=useState("")
  // const handleChange = (e)=>{
  //   setFeedback({...feedback,e.target.value})

  // }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('commentaires', 'template_aai4ofr', form.current, 'SPkjmsYmwJx1uRvLg')
    .then((result) => {
        console.log(result.text);
        alert('merci pour votre feedback')
         e.target.reset()
    }, (error) => {
        console.log(error.text);
        e.target.reset()
    });
   
};
  return (
    <div className='footerContainer'>
      
      <div className="feedbackContacts">
        <form ref={form} onSubmit={sendEmail} className='feedbackContainer'>
          <p className="feedbackTitle">Votre Feedback</p>
          <textarea name='message'  placeholder='Entrez votre feedback ici.'  type="text" className='feedbackInput' />
          <button className="feedbackSubmit">SUBMIT</button>
        </form>
        
        <div className="contact">
          <p className="feedbackTitle">CONTACT</p>
          
          <p className='email'>NizarFl1@gmail.com</p>
          <div className="orContainer">
            <div className="line"/>
            <p className="or">OU</p>
            <div className="line"/>
          </div>
          <div className="socialLinks">
            <div className="instagram socialLink">
              <a href="https://www.instagram.com/nizar_fl/" target="_blank" rel="noopener noreferrer"><img src="../imgs/iconsinstagram.png" alt="instagram" className="sociallogo instagramLogo" /></a>
              
            </div>
            <div className="Fb socialLink">
             <a href="https://www.facebook.com/nizarflahi" target="_blank" rel="noopener noreferrer"> <img src="../imgs/iconsfacebook.png" alt="facebook" className="sociallogo fbLogo" /></a>
              
            </div>
            
            <div className="twitter socialLink">
              <a href="https://twitter.com/NizarFlahi" target="_blank" rel="noopener noreferrer"><img src="../imgs/iconstwitter.png" alt="twitter" className="sociallogo twitterLogo" /></a>
              
            </div>
          </div>
          
        </div>
      </div>
      <div className="coyrightContainer">
        <p className="copyrightText">© 2023 LPBT CLUBS all rights reserved | Designed and Developed by Nizar Flahi</p>
      </div>
      
    </div>
  )
}
