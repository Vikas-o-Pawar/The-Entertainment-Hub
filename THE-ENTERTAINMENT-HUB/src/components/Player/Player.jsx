import React from 'react'
import './Player.css'
// import backArrowIcon from '../../assets/backArrow.img'

function Player() {
  return (
    <div className='playerDiv'>
        
        <img src="" alt="back arrow" />
        <iframe src="https://www.youtube.com/embed/x7uLutVRBfI" title="trailer" allowFullScreen width='90%' height='90%' frameBorder="0">
        </iframe>

        <div className="playerInfo">
            <p>Published Date</p>
            <p>Name</p>
            <p>Type</p>
        </div>
    </div>
  )
}

export default Player