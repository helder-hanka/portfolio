import React,{ useState, useEffect, Fragment } from "react"
import { arrayInfo } from "../arrayInfo"
import Modal from '../Modal'
import { GiClick } from 'react-icons/gi';
import { BsArrowReturnRight } from 'react-icons/bs';
import { BsInfoSquareFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
// import Zoom from 'react-reveal/Zoom';
import "./Portfolio.css"
const Portfolio = () => {

  const [atoutBranches, setAtoutBranches] = useState([])
  const [wildArtMuseums, setWildArtMuseums] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [showModalInfo, setShowModalInfo] = useState([])
  console.log('showModalInfo: ', showModalInfo)

  useEffect(() => {
    const atoutBranches = arrayInfo.map(aboutProjet => aboutProjet.projets ).map(i => i.AtoutBranche);
    setAtoutBranches(atoutBranches[0]);

    const wildArtMuseums = arrayInfo.map(aboutProjet => aboutProjet.projets ).map(i => i.WildArtMuseums);
    setWildArtMuseums(wildArtMuseums[0]);
   
  }, [])

  const showModal = (check) => {
    setOpenModal(true);
    if(check === 'wildArtMuseums') {
      setShowModalInfo(wildArtMuseums)
    } else if (check === 'atoutBranches')
    setShowModalInfo(atoutBranches)

  }

  const closeModal = () => {
    setOpenModal(false);
    setShowModalInfo([])
  }
  // const displayWildArtMuseums = wildArtMuseums.map((data, index) => 
  //   <Zoom>
  //     <div className="card" key={index}>
  //       <div className="face face1">
  //           <div className="content">
  //           <img src={data.image} alt={data.title}/>
  //               <h3>{data.title}</h3>
  //           </div>
  //       </div>
  //       <div className="face face2">
  //           <div className="content">
  //           <p>{data.text}</p>
  //             <a href={data.url} target="_blank" rel="noopener noreferrer">voir le cite</a>
  //           </div>
  //       </div>
  //     </div>
  //   </Zoom>
  // );
  // const displayAtoubranches = atoutBranches.map((data, index) => 
  //   <Zoom>
  //     <div className="card">
  //       <div className="face face1">
  //           <div className="content">
  //           <img src={data.image} alt={data.title}/>
  //               <h3>{data.title}</h3>
  //           </div>
  //       </div>
  //       <div className="face face2">
  //           <div className="content">
  //               <p>{data.text}</p>
  //           </div>
  //       </div>
  //     </div>
  //   </Zoom>
  // );
  const displayWildArtMuseums = wildArtMuseums.map((data, index) => 
    <div className="card" key={index} onClick={ () => showModal('wildArtMuseums') }>
      <div className="content">
        <img src={data.image} alt={data.title}/>
      </div>
        <h3>{data.title}</h3>
      <p className="BsInfoSquareFill"><BsInfoSquareFill /></p>
    </div>
  );
  const displayAtoubranches = atoutBranches.map((data, index) => 
    <div className="card" onClick={ () => showModal('atoutBranches') }>
      <div className="content">
        <img src={data.image} alt={data.title}/>
      </div>
        <h3>{data.title}</h3>
        <p className="BsInfoSquareFill"><BsInfoSquareFill /></p>
    </div>
  );
  return (
    <div className="Portfolio-container">
      <h1>MON PORTFOLIO</h1>
      <div className="container-contenu">
        {displayWildArtMuseums}
        {displayAtoubranches}
      </div>
      <Modal showModal={openModal} closeModal ={closeModal}> 
        <Fragment >
          <div className="modalHeader">
          <p className="AiFillCloseCircle" ><AiFillCloseCircle /></p>
            {
              showModalInfo.map((data, index) => 
                <div className="card" key={index}>
                  <div className="content">
                    <img src={data.image} alt={data.title}/>
                  </div>
                  <h3>{data.title}</h3>
                  { data && <p className="Source">
                    { data.reactjs && <strong>{ data.reactjs } </strong>} 
                    { data.css && <strong> { data.css } </strong> } 
                    { data.nodejs && <strong> { data.nodejs } </strong> } 
                    { data.sql && <strong> { data.sql } </strong> }</p>
                  }
                  { data.text1 && <p className="dataText1">{data.text1}</p> }
                  { data.text2 && <p className="dataText2">{data.text2}</p> }
                  { data.text3 && <p className="dataText3"> {data.text3}</p> }
                  { data.text4 && <p className="dataText4"><BsArrowReturnRight /> {data.text4}</p> }
                  { data.text5 && <p className="dataText5"><BsArrowReturnRight /> {data.text5}</p> }
                  { data.text6 && <p className="dataText6"><BsArrowReturnRight /> {data.text6}</p> }
                  {data.url && <p><a href={data.url} target="_blank" rel="noopener noreferrer">voir le site</a><GiClick /> <br /></p>}
                  <p><a href={data.sourceFront} target="_blank" rel="noopener noreferrer">Code source front</a><GiClick /> <br /></p>
                  {data.sourceBack && <p><a href={data.sourceBack} target="_blank" rel="noopener noreferrer">Code source back</a><GiClick /> </p>}
                </div>
              )
            }
          </div>
        </Fragment>
      </Modal>
    </div>
  )
}
export default Portfolio