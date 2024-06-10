import React from "react";
import './contact.css'
import ls from './assets/profile_pic.jpg'
function Contact(){
    return (
        <div class="contact-container">
      <span class="big-circle">
      <div class="contact-img" >
            <img src={ls} width="200" alt="Profile Image"/>
          </div>
      </span>
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            Looking forward to hearing from you!
          </p>

          <div class="info">
            <div class="information">
              <i class="fas fa-envelope"></i>
              <p style={{marginLeft:'5px'}}>lskervin23@gmail.com</p>
            </div>
            <div class="information">
              <i class="fas fa-phone"> </i>
              <p style={{marginLeft:'5px'}}>347-484-9654</p>
            </div>
          </div>
          <div class="social-media">
            <p>Connect:</p>
            <div class="social-icons">
              <a href="https://github.com/lskervin/">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/leighton-skervin/">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Contact;