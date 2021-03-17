import React, { Fragment, useEffect, useState } from "react"
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import { arrayInfo } from "../arrayInfo"
import './About.css'
const About = () => {

  const [datas, setData] = useState([])

  useEffect(() => {
    const data = arrayInfo.map(data => data.aboutMe)
    setData(data)
  }, [])

  const displayStack = datas.map((data, index )=> <Fragment key={index}>{ data.stack }</Fragment>);

  return (
    <section className="section-About">
      <div className="container-About">
      <div className="title">
        <h1>À PROPOS</h1>
        <Slide left>
        <h2>Je suis le développeur web de demain !</h2>
        </Slide>
      </div>
      <div className="About">
        
        <Zoom>
          <div className="image"> 
            {
              datas && datas.map((data, index) => 
                
                <div key={index}>
                  <img src={data.image} alt={data.firstname}/>
                </div>
                  
              )
            }
          </div>
        </Zoom>
          
        <div className="AboutFour">
          <div className="AboutText">
            <p>
              Passionné depuis l'enfance par l'informatique, j'ai décidé après 10 ans d'expérience dans le domaine de la maintenance technique de 
              m'orienter vers le métier de developpeur web.
            </p>
            <p className="stack"><strong>Stack: </strong> {displayStack} </p>
          </div>
          <div className="AboutContact">
            <h2>Contact</h2>
            {
              datas && datas.map((data, index) => 
                <div key={index} className="datas">
                  <p>{data.firstname}</p>
                  <p>{data.lastname}</p>
                  <p>{data.email}</p>
                  <p>{data.number}</p>
                  <p className="CV"><a  href={data.cv} alt={data.firstname} target="_blank" rel="noopener noreferrer">Télécharger le CV</a></p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;