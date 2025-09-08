import React, { useEffect, useState } from 'react'
import './Player.css'
import backArrowIcon from '../../assets/211686_back_arrow_icon.svg'
import { useNavigate, useParams } from 'react-router-dom';

function Player() {
  
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setAPIData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  });

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjg3NDBiOTA2N2UzOGQ5NWRhOTAyMTAzNWJjY2M3YSIsIm5iZiI6MTc1NzE2MTE2NC44NDcwMDAxLCJzdWIiOiI2OGJjMjZjY2FkM2ZjMDUzYjQ5YmJiY2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kTWATfy36naG_x5A0S0QHU79Bc7_soLG_Vzmgeh2sOg'
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setAPIData(res.results[0]))
    .catch(err => console.error(err));
}, [])
  



  return (
    <div className='player'>
        
        <img 
        onClick={() => navigate(-1)} 
        src={backArrowIcon} 
        alt="back arrow" 
        className="playerBackIcon" 
      />

        <iframe src={`https://www.youtube.com/embed/${apiData.key}`}title="trailer" allowFullScreen width='90%' height='90%' frameBorder="0">
        </iframe>

        <div className="playerInfo">
            <p>{ apiData.published_at.slice(0, 10) }</p>
            <p>{ apiData.name }</p>
            <p>{ apiData.type }</p>
        </div>
    </div>
  )
}

export default Player