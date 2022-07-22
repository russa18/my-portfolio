import React from 'react'
import "./Contact.css"
import Emailform from './Emailform'
export default function Contact() {
  return (
    <div className='contact'>
      <div className="c-left">
        <h1 className="my-3 c-head">CONTACT</h1>
        <Emailform />
      </div>
      <div className="c-right">
        <div className="c-social-icons">
          {/* <h2>Also Active on</h2> */}
          <a href="https://www.linkedin.com/in/rushikesh-sawant-91b6ba1a7/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fa-3x"></i></a>
          <a href='https://www.instagram.com/russa_18/' target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram fa-3x"></i></a>
          <a href='https://github.com/russa18' target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-3x"></i></a>
          
          <p>
           <i className="fa-solid fa-phone "> 7741083144 / 9284054179</i>
           </p>

        </div>
      </div>
    </div>
  )
}
