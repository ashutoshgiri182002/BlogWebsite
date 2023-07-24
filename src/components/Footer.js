import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <h3>Contact-Us</h3>
                <div className="footer-contact">

                    <div className="footer-contact-icon">
                        <a href="https://www.facebook.com/ashutoshkumar.giri.98/">
                            <i className="fab fa-facebook-square" />
                        </a>
                        <span>Facebook</span>
                    </div>
                    <div className="footer-contact-icon">
                        <a href="https://twitter.com/ASHUTOS14398049">
                            <i className="fab fa-twitter-square" />
                        </a>
                        <span>Twitter</span>
                    </div>

                    <div className="footer-contact-icon">
                        <a href="https://www.instagram.com/ashutoshgiri_official/">
                            <i className="fab fa-instagram" />
                        </a>
                        <span>Instagram</span>
                    </div>

                    <div className="footer-contact-icon">
                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                        <span>Email</span>
                    </div>

                </div>
                <div className="copy-right">
                    <p>Copyright © ashu-blogs.com</p>
                </div>
            </div>
        </>
    )
}

export default Footer