import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cardsData from '../../assets/cards/Cards_data';


const TitleCards = (props) => {

const cardsRef = useRef();

useEffect(() => {
  const el = cardsRef.current;
  
  const wheelHandler = (event) => {
    event.preventDefault();
    el.scrollLeft += event.deltaY;
  };

  el.addEventListener('wheel', wheelHandler, { passive: false });
  return () => el.removeEventListener('wheel', wheelHandler);
}, []);


  return (
    <div className='titleCardsDiv'>
      <h1> {props.title? props.title: 'Popular on TEH'} </h1>     

      <div className="cardList" ref={cardsRef}>
        {cardsData.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        })}
      </div> 
    </div>
  )
}

export default TitleCards