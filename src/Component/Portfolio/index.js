import React,{ useState, useEffect } from "react"
import { arrayInfo } from "../arrayInfo"
import Zoom from 'react-reveal/Zoom';
import "./Portfolio.css"
const Portfolio = () => {

  const [atoutBranches, setAtoutBranches] = useState([])
  const [wildArtMuseums, setWildArtMuseums] = useState([])

  useEffect(() => {
    const atoutBranches = arrayInfo.map(aboutProjet => aboutProjet.projets ).map(i => i.AtoutBranche);
    setAtoutBranches(atoutBranches[0]);

    const wildArtMuseums = arrayInfo.map(aboutProjet => aboutProjet.projets ).map(i => i.WildArtMuseums);
    setWildArtMuseums(wildArtMuseums[0]);
   
  }, [])
  const displayWildArtMuseums = wildArtMuseums.map((data, index) => 
  <Zoom>
    <div className="card" key={index}>
    <div className="face face1">
        <div className="content">
        <img src={data.image} alt={data.title}/>
            <h3>{data.title}</h3>
        </div>
    </div>
    <div className="face face2">
        <div className="content">
        <p>{data.text}</p>
          <a href={data.url} target="_blank" rel="noopener noreferrer">voir le cite</a>
        </div>
    </div>
  </div>
</Zoom>
  );
  const displayAtoubranches = atoutBranches.map((data, index) => 
  <Zoom>
    <div className="card">
    <div className="face face1">
        <div className="content">
        <img src={data.image} alt={data.title}/>
            <h3>{data.title}</h3>
        </div>
    </div>
    <div className="face face2">
        <div className="content">
            <p>{data.text}</p>
        </div>
    </div>
  </div>
</Zoom>
  );
  return (
    <div className="container">
      {displayWildArtMuseums}
      {displayAtoubranches}
</div>
  )
}
export default Portfolio