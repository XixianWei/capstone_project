import React, { useState } from 'react'
import './Card.css'

function Card() {
  const [cards] = useState ([
    {
      title: 'Yellowstone National Park',
      text: 'Yellowstone National Park is an American national park located in the western United States, largely in the northwest corner of Wyoming and extending into Montana and Idaho.'
      // button : 'Read More'
    },
    {
      title: 'Sponsor a Forest',
      text: 'Join us in preserving natures beauty. Sponsor our forest in Yellowstone National Park today and help protect our planet for future generations.'
    },
  ])
  return (

    <section>
      <div className='card-container'>
        <div className='cards'>
          {cards.map((card, i)=>(
            <div key={i} className='card'>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <button>Read More</button>
            {/* <button>{card.button}</button> */}
            </div>
            ))}
        </div>
      </div>
    </section>
  
  )
}

export default Card;