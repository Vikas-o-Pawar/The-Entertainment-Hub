import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/mob1.JPG'
import hero_title from '../../assets/mob_banner.jpeg'

import play_icon from '../../assets/play_icon.svg'
import info_icon from '../../assets/info_icon.svg'
import TitleCards from '../../components/TitledCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div className='Home'>
            <Navbar />

            <div className="hero">

                <img src={hero_banner} alt="bannerImg" className='bannerImg' />

                <div className="heroCaption">

                    <img src={hero_title} alt="heroTitle" className='captionImg' />

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ipsum at repellat beatae eius adipisci eligendi quasi quidem dolorum? Maiores iste voluptatibus sit!</p>

                    <div className="hero_btns">
                        <button className='btn' ><img src={play_icon} alt="play" /> play </button>
                        <button className='btn darkBtn'><img src={info_icon}  alt="know more" /> More Info</button>
                    </div>

                    <TitleCards  />

                </div>
            </div>

            <div className="moreCards">
                <TitleCards title="Blockbuster Movies" category={"top_rated"} />
                <TitleCards title="Only On TEH" category={"popular"} />
                <TitleCards title="Upcoming" category={"upcoming"} />
                <TitleCards title="Top Picks For You"  category={"now_playing"}/>
            </div>

            <Footer />
        </div>
    )
}

export default Home