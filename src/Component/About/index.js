import React, { useEffect, useState } from "react"
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import { arrayInfo } from "../arrayInfo"
import './About.css'
const About = () => {

  const [datas, setData] = useState([])
  console.log(datas)

  useEffect(() => {
    const data = arrayInfo.map(data => data.aboutMe)
    setData(data)
  }, [])

  const displayStack = datas.map(data => data.stack);

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

        <div className="image">
          {
            datas && datas.map((data, index) => 
                <Zoom>
              <div key={index}>
                <img src={data.image} alt={data.firstname}/>
              </div>
                </Zoom>
            )
          }
        </div>
          
        <div className="AboutFour">
          <div className="AboutText">
            <p>
              Après 10 ans d'expérience en tant que technicien de maintenance, je me suis orienté vers le métier de
              <strong> Développeur Web Frond-End</strong>.
              Car je suis passioné depuis mon enfance par l'informatique.
            </p>
            <p>
              En Mai 2019, je décide de devenir développeur web après plusieurs postes en tant que <strong>technicien de maintenance</strong>
            </p>
            <h2>Un développeur web passionné !</h2>
            <p>Dès lors, je mis tout en oeuvre pour percer dans cette voie, tout en prenant du plaisir sur les divers projets développés.</p>
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