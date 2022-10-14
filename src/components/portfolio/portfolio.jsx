import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img-1.png'
import IMG2 from '../../assets/img-2.png'
import IMG3 from '../../assets/img-3.png'
import IMG4 from '../../assets/img-4.png'
import IMG5 from '../../assets/img-5.png'
import IMG6 from '../../assets/img-6.png'


/*Do not use the Images in Production*/

const data = [
  {
    id: 1, 
    image: IMG1,
    title: "Finanacial Analysis Dashboard",
    github: '',
    demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: "",
    github: '',
    demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: "",
    github: '',
    demo: ''
  },
  {
    id: 4,
    image: IMG4,
    title: "",
    github: '',
    demo: ''
  },
  {
    id: 5,
    image: IMG5,
    title: "",
    github: '',
    demo: ''
  },
  {
    id: 6,
    image: IMG6,
    title: "",
    github: '',
    demo: ''
  }
]

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio