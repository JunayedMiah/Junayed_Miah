import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nxrjew8', 'template_w76hu4k', form.current, '8l_lQzpvskBN7ZMKU')
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact In</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>Md.junayed.miah@fau.de</h5>
            <a href="mailto:md.junayed.miah@fau.de">Send a MAil</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Junayed Miah</h5>
            <a href="https://m.me/profile.php?id=100072896541714">Send a Message</a>
          </article>

          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>Md Junayed Miah</h5>
            <a href="https://t.me/username_JA">Send a Message</a>
          </article>

        </div>

      {/* End of contact options*/}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="text" name='email' placeholder='Your Email' required />
        <textarea name="message"  cols="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'> Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact