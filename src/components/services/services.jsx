import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

      <article className='service'>
          <div className="service__head">
            <h3>Data Cleaning</h3>
            <h6>Six Steps of Data Cleaning : </h6>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>How close is the value of the data to the true value?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Do all the values of one variable represent the same definition?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>How complete is the dataset with respect to variable values and/or records? </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>How timely is the data?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Is there any duplicate data? </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Does the data conform to the defined rules? </p>
            </li>
          </ul>
        </article>

        {/* End of Data Cleaning*/}

      <article className='service'>
          <div className="service__head">
            <h3>Data Processing</h3>
            <h6>Six Stages of Data Processing : </h6>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Collecting data is the first step in data processing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Eliminate bad data and begin to create high-quality data for the best business intelligence.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Raw data begins to take the form of usable information.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>The data inputted to the computer in the previous stage is actually processed for interpretation. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Data is finally usable to non-data scientists. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>After all of the data is processed, it is then stored for future use. </p>
            </li>
          </ul>
        </article>

        {/* End of Data Processing */}


        <article className='service'>
          <div className="service__head">
            <h3>Data Visualization</h3>
            <h6>Four Steps of Data Visualization : </h6>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design Research : to understand our organizational goals and our audience </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design Strategy : How does the design of our brand impact design execution? </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design Exploration : It's finally time to start iterating on design concepts that make our ideas tangible!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design Execution : Interactive visualizations integration with outside data systems and complex development.</p>
            </li>
          </ul>
        </article>

        {/* End of Data Visualization */}
      </div>
    </section>
  )
}

export default services