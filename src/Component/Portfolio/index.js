import React,{ useState, useEffect } from "react"
import { arrayInfo } from "../arrayInfo"
import { BiArrowToBottom } from 'react-icons/bi';
import { BiArrowToTop } from 'react-icons/bi';
import "./Portfolio.css"
const Portfolio = () => {

  const [atoutBranches, setAtoutBranches] = useState([])
  const [wildArtMuseums, setWildArtMuseums] = useState([])
  const [isShownWildArtMuseums, sShownWildArtMuseums] = useState(false);
  const [isShownAtoubranches, setIShownAtoubranches] = useState(false);

  useEffect(() => {
    const atoutBranches = arrayInfo.map(aboutProjet => aboutProjet.projets ).map(i => i.AtoutBranche);
    setAtoutBranches(atoutBranches[0]);

    const wildArtMuseums = arrayInfo.map(aboutProjet => aboutProjet.projets ).map(i => i.WildArtMuseums);
    setWildArtMuseums(wildArtMuseums[0]);
   
  }, [])

  const displayWildArtMuseums = wildArtMuseums.map((data, index) => 
  <div className="wildArtMuseums" key={index} >
      <h2>{data.title}</h2>
      <img src={data.image} alt={data.title}
        onClick={() => sShownWildArtMuseums(!isShownWildArtMuseums)}
      />
      <div onClick={() => sShownWildArtMuseums(!isShownWildArtMuseums)}>
        {!isShownWildArtMuseums ? <BiArrowToBottom style={{fontSize:"2em"}}/>: <BiArrowToTop style={{fontSize:"2em"}}/>}
      </div>
      {
        isShownWildArtMuseums && <div>
          <p>{data.text}</p>
          <a href={data.url} target="_blank" rel="noopener noreferrer">voir le cite</a>
        </div>
      }
    </div>
  )
  
  const displayAtoubranches = atoutBranches.map((data, index) => 
    <div className="atoutBranches" key={index}>
      <h2>{data.title}</h2>
      <img src={data.image} alt={data.title}
        onClick={(e) => setIShownAtoubranches(!isShownAtoubranches)}
        />
        <div onClick={(e) => setIShownAtoubranches(!isShownAtoubranches)}>
        {!isShownAtoubranches ? <BiArrowToBottom style={{fontSize:"2em"}}/>: <BiArrowToTop style={{fontSize:"2em"}}/>}
      </div>
      { 
        isShownAtoubranches &&  <p>{data.text}</p>
      }
    </div>
  )
  return (
    <div className="Portfolio">
      <h1>MES PROJETS</h1>
      <h2>Voici une partie des projets sur lesquels j'ai travaillé</h2>
      <div className="PortfolioInfo">
        {displayWildArtMuseums}
        {displayAtoubranches}
      </div> 
    </div>
  )
}
export default Portfolio