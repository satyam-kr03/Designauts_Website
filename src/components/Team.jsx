import React, { } from "react";
import "./CardFlip.css";
import ig from '../images/ig.png';
import gm from '../images/gm.png';
import li from '../images/li.svg';

const FlipCard = (image, radius, instaID, LinkedIn) => {
  return (
    <div className="flip-card">
      <div className={`flip-card-inner w-${radius} h-${radius} mx-auto`}>
        <img src={image} className={`flip-card-front w-${radius} h-${radius} rounded-full`} />
        <div className={`flip-card-back w-${radius} h-${radius} rounded-full`}>
          <p className="text-[#000000] text-center my-3 mt-8">Find me here</p>
          <div className="flex justify-center items-center">
            <a href={`https://instagram.com/${instaID}`} target="_blank" className="mx-auto">
              <img src={ig} alt="instagram" className="w-12 h-12 mx-auto mb-4" />
            </a>
            <a href={`${LinkedIn}`} target="_blank" className="mx-auto">
              <img src={li} alt="linkedIn" className="w-10 h-10 mx-auto mb-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Members = (image, name, instaID, LinkedIn, textLeave, textEnter) => {
  return (
    <div>
      {FlipCard(image, 36, instaID, LinkedIn)}
      <p onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-center text-2xl pt-2 pb-5 '>{name}</p>
    </div>
  )
}

const Cord = (image, name, instaID, LinkedIn) => {
  return (
    <div>
      {FlipCard(image, 48, instaID, LinkedIn)}
      <p className='text-center text-4xl pt-2'>{name}</p>
      <p className='text-center text-2xl pt-2'>Coordinator</p>
    </div>
  )
}

const CoCord = (image, name, instaID, LinkedIn) => {
  return (
    <div>
      {FlipCard(image, 44, instaID, LinkedIn)}
      <p className='text-center text-3xl pt-2'>{name}</p>
      <p className='text-center text-xl pt-2'>Co-coordinator</p>
    </div>
  )
}

const PastCordi = (image, name, year, instaID, linkedIn) => {
  return (
    <div>
      {FlipCard(image, 44, instaID, LinkedIn)}
      <p className='text-center text-3xl pt-2'>{name}</p>
      <p className='text-center text-xl pt-2'>{year}</p>
    </div>
  )
}

const Team = () => {
  return (
    <div>
      <div className='w-72 h-60 py-40 mx-auto pt-48 '>
        {Cord('/pfps/vivek.jpg', 'Vivek Aggarwal', 'rttfgyjhk', 'sgfhdxcgb')}
      </div>

      <div className='grid grid-cols-3 place-items-center py-44'>
        {CoCord('/pfps/aryan.jpg', 'Aryan Singh')}
        {CoCord('/pfps/sanket.jpeg', 'Sanket Ramteke')}
        {CoCord('/pfps/harshit.jpg', 'Harshit Vyas')}
      </div>

      <div className="text-center mb-12">
        <h1>Core Team</h1>
      </div>

      <div className='grid grid-cols-4 place-items-center px-16 '>
        {Members('/pfps/sam.jpg', 'Sam', '__justsam__', 'b22127@students.iitmandi.ac.in')}
        {Members('/pfps/bhavesh.jpg', 'Bhavesh Goyal')}
        {Members('/pfps/siddhi.jpg', 'Siddhi Upadhyaya')}
        {Members('/pfps/adityaks.jpg', 'Aditya Kumar Singh')}
        {Members('/pfps/luv.webp', 'Luv Sharma')}
        {Members('/pfps/satyam.jpeg', 'Satyam Kumar')}
        {Members('/pfps/dev.jpg', 'Dev Patel')}
        {Members('/pfps/anusha.jpg', 'Anusha Tiwari')}
        {Members('/pfps/mehul.jpg', 'Mehul Bhundiya')}
        {Members('/pfps/utkarsh.jpg', 'Utkarsh Yadav')}
        {Members('/pfps/sarthak.jpg', 'Sarthak Goel')}
        {Members('/pfps/arsh.jpg', 'Arsh')}
        {Members('/pfps/aryankashyap.jpg', 'Aryan Kashyap')}
      </div>

    </div>
  )
}

export default Team