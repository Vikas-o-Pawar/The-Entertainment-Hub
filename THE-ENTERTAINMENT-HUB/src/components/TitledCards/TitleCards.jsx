import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cardsData from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';


const TitleCards = ({title, category}) => {

const [apiData, setAPIData] = useState([]);
const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjg3NDBiOTA2N2UzOGQ5NWRhOTAyMTAzNWJjY2M3YSIsIm5iZiI6MTc1NzE2MTE2NC44NDcwMDAxLCJzdWIiOiI2OGJjMjZjY2FkM2ZjMDUzYjQ5YmJiY2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kTWATfy36naG_x5A0S0QHU79Bc7_soLG_Vzmgeh2sOg'
  }
};


useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${category? category: "now_playing"}?page=1`, options)
  .then(res => res.json())
  .then(res => setAPIData(res.results))
  .catch(err => console.error(err));

  console.log(apiData)

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
      <h1> {title? title: 'Popular on TEH'} </h1>     

      <div className="cardList" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={card.id}>
            <img  src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}  alt={card.name} />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div> 
    </div>
  )
}

export default TitleCards