import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{ text }</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Carter Morphis</span>👋
            <br/>
            A Computer Science student at the University of North Carolina at Charlotte.
            </h1>
    ),
    2: (
        <InfoBox 
            text="Taken many classes in order to become a better developer."
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
            text="Worked on many projects in order to improve on my skills."
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="Need a project done or are looking for a developer? Contact me here."
            link="/contact"
            btnText="Let's talk"
        />
    ),
}



const HomeInfo = ( { currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo