import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ridoy.jpg'
import HeaderSocial from './headersocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Md Junayed Miah</h1>
        <h5 className="text-light"> Data Analyst </h5>
        <CTA />
        < HeaderSocial />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'> Scroll Down </a>
      </div>
    </header>

  )
}

export default header
