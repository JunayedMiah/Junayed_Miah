import React from 'react'
import './experience.css'
import {SiPowerbi} from 'react-icons/si'
import {SiTableau} from 'react-icons/si'
import {SiGoogleadsense} from 'react-icons/si'
import {SiMicrosoftexcel} from 'react-icons/si'
import {FaPython} from 'react-icons/fa'
import {FaRProject} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {BsBootstrap} from 'react-icons/bs'
import {SiPhpmyadmin} from 'react-icons/si'
import {FaLaravel} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Data Analysis Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiPowerbi className='experience__details-icon'/>
              <div>
                <h4>PowerBI</h4>
                <small className='text-light'>Experienced - 95%</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiTableau className='experience__details-icon'/>
              <div>
                <h4>Tableau</h4>
                <small className='text-light'>Experienced - 75%</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiGoogleadsense className='experience__details-icon'/>
              <div>
                <h4>Google Data Studio</h4>
                <small className='text-light'>Experienced - 70%</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiMicrosoftexcel className='experience__details-icon'/>
              <div>
                <h4>Excel</h4>
                <small className='text-light'>Experienced - 95%</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced - 65%</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaRProject className='experience__details-icon'/>
              <div>
                <h4>R</h4>
                <small className='text-light'>Experienced - 65%</small>
              </div>
            </article>

          </div>
        </div>

        {/* End of Data Analysis Skills */}

        <div className="experience__backend">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>Html</h4>
                <small className='text-light'>Experienced - 95%</small>
              </div>
            </article>

            <article className='experience__details'>
              <DiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced - 75%</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsBootstrap className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced - 90%</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiPhpmyadmin className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced - 80%</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaLaravel className='experience__details-icon'/>
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Experienced - 65%</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiMysql className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Experienced - 90%</small>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default experience