import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img-1.png'
import IMG2 from '../../assets/img-2.png'
import IMG3 from '../../assets/img-3.png'
import IMG4 from '../../assets/img-4.png'
import IMG5 from '../../assets/img-5.png'
import IMG6 from '../../assets/img-6.png'


const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/JunayedMiah?tab=repositories" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://app.powerbi.com/links/a5t6TBgv-L?ctid=fcdea10d-7405-4c5e-b56d-a124efd008cd&pbi_source=linkShare" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/JunayedMiah?tab=repositories" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://app.powerbi.com/links/a5t6TBgv-L?ctid=fcdea10d-7405-4c5e-b56d-a124efd008cd&pbi_source=linkShare" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/JunayedMiah?tab=repositories" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://app.powerbi.com/links/a5t6TBgv-L?ctid=fcdea10d-7405-4c5e-b56d-a124efd008cd&pbi_source=linkShare" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/JunayedMiah?tab=repositories" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://app.powerbi.com/links/a5t6TBgv-L?ctid=fcdea10d-7405-4c5e-b56d-a124efd008cd&pbi_source=linkShare" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/JunayedMiah?tab=repositories" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://app.powerbi.com/links/a5t6TBgv-L?ctid=fcdea10d-7405-4c5e-b56d-a124efd008cd&pbi_source=linkShare" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/JunayedMiah?tab=repositories" className='btn' target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://app.powerbi.com/links/a5t6TBgv-L?ctid=fcdea10d-7405-4c5e-b56d-a124efd008cd&pbi_source=linkShare" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default portfolio