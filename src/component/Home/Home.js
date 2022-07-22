import React from 'react'
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="left">
        <div className="left-info">
          <h2 className='left-heading'>Hello, I am</h2>
          <h1 className='left-name'>Rushikesh Sawant</h1>
          <h3 className='left-title'>Web Developer</h3>
          <p>
            highly motivated indivisual looking for a fronted job in react js ,willing to work hard and horn my skills and provide a value to the company
          </p>
          
        <div className="left-icons">
          
        <a href="https://www.linkedin.com/in/rushikesh-sawant-91b6ba1a7/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fa-3x"></i></a>
        <a href='https://www.instagram.com/russa_18/' target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram fa-3x"></i></a>
        <a href='https://github.com/russa18'target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-3x"></i></a>
        </div>
        </div>  

      </div>
      <div className="right">
        <div className="prof-bg"></div>
        <img className='profile-img' src="./profile-img.png" alt="" />
      </div>
    </div>
  )
}
