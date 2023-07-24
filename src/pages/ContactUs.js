import React from 'react'
import emailjs from '@emailjs/browser'
import {useRef} from 'react'
import './ContactUs.css'
import contact_image from '../images/contact_image.jpg'

const ContactUs = () => {

  const [name, setName] = React.useState('')
  // const [email, setEmail] = React.useState('')
  // const [subject, setSubject] = React.useState('')
  // const [message, setMessage] = React.useState('')

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   
    // const [done,setDone] = useState(false);

    emailjs.sendForm('service_sc09lwd', 'template_neqtt35', form.current, 'Wy2SjjQrn84kbTr-V')
      .then(res=>{
        alert("📩✔Email sent successfully! ");
        // setDone(true);

      })
      .catch(err=>{
        console.log(err);
        alert("😢Error! Sending Mail \n",err.message);
      })
    }

  return (
    <>
      <div className="contact-us" style={{ backgroundImage: `url(${contact_image})` }}>
        <div className="contact-main">
          <div className="contact-heading">
            <h1>CONTACT FORM</h1>
          </div>
          <div className="contact-form">
            <div className="contact-page">
              <div className="form-disc">
                <h3>Contact us</h3>
                <p>
                  Fill in the form below to get in touch with us.
                </p>
              </div>

              <form ref={form} onSubmit={sendEmail}  action="">
                <div className="contact-input">
                  <label htmlFor="fname">Name : </label>
                  <input type="text" id="fname"  name="user_name" placeholder='Your name...' required/>
                </div>

                <div className="contact-input">
                  <label htmlFor="fname">Email : </label>
                  <input type="text" id="fname" name="user_email" placeholder='Your Email...' required />
                </div>

                <div className="contact-input">
                  <label htmlFor="fname">Subject : </label>
                  <input type="text" id="fname" name="subject" placeholder='Message Subject...' />
                </div>
                <div className="contact-input">
                  <label htmlFor="fname">Message : </label>
                  <textarea name='message' className='user' placeholder='Message Text'  required/>
                </div>
                <div className="contact-btn">
                  <button  type="submit" className="button">Send Message</button>
                </div>
              </form>
            </div>

            <div className="contact-social-container">
              <div className="contact-social-desc">
                <p>Or Find us here :</p>
              </div>
              <div className="contact-social">
                <div className="contact-social-icon">
                <a href="https://www.facebook.com/ashutoshkumar.giri.98/">
                  <i className="fab fa-facebook-square" />
                  </a>
                  <span>Facebook</span>
                </div>
                <div className="contact-social-icon">
                <a href="https://twitter.com/ASHUTOS14398049">
                  <i className="fab fa-twitter-square" />
                  </a>
                  <span>Twitter</span>
                </div>
               
                <div className="contact-social-icon">
                <a href="https://www.instagram.com/ashutoshgiri_official/">
                  <i className="fab fa-instagram" />
                  </a>
                  <span>Instagram</span>
                </div>
                <div className="contact-social-icon">
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  </a>
                  <span>Email</span>  
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ContactUs