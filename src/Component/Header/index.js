import React, {useState, useEffect, Fragment } from 'react'
import { arrayInfo } from '../arrayInfo'
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
import './Header.css'
const Header = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    const dataAboutMe = arrayInfo.map(dataAboutMe => dataAboutMe.aboutMe)
    setData(dataAboutMe)
  }, [])

  const displayNetwork = datas.map((data, index) => 
    <div key={index}  className="Reaseau">
      
      <div><Zoom left cascade><a href={data.github} target="_blank" rel="noopener noreferrer"><FaGithub/></a></Zoom></div>
      <div><Zoom left cascade><a href={data.linkedin} target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a></Zoom></div>
      
    </div>
  )

  const displayName = datas.map((data, index) => 
  <Fragment key={index}>
    <h1><Slide left>{ data.firstname}</Slide><Roll cascade></Roll>{ data.lastname} </h1>
  </Fragment>)
  return (
    <header>
      <div className="App-header">
        <div className="container-Reaseau">
          {displayName}
          <h2>Développeur web Junior - Js / React / Node</h2>
          { displayNetwork}
        </div>
      </div>
    </header>
  );
};

export default Header;