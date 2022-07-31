import React from 'react'
import "./Contact.css"
import Emailform from './Emailform'
import Alerts from "../Alerts"
import { useState } from 'react'
import contactImg from "./help-desk.png"
export default function Contact(props) {

  const [alert, setAlert] = useState(null);
  const showAlert = async (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  return (
    <div className='contact'>
      <div className="container c-left">
        <div className="c-img">
          <img className="contactImg" src={contactImg} alt="" />
        </div>

        <div className="c-social-icons">
          {/* <h2>Also Active on</h2> */}
          <a href="https://www.linkedin.com/in/rushikesh-sawant-91b6ba1a7/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fa-3x"></i></a>
          <a href='https://www.instagram.com/russa_18/' target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram fa-3x"></i></a>
          <a href='https://github.com/russa18' target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-3x"></i></a>
          <p><i className="fa-solid fa-phone c-phone"> 7741083144 / 9284054179</i></p>

        </div>
      </div>
      <div className="container c-right">

        <h1 className="c-head">CONTACT</h1>

        <div className="alert-box">
          <Alerts alert={alert} />
        </div>
        <Emailform showAlert={showAlert} />

      </div>
    </div>
  )
}
