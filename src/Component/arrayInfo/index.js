import atoutBranche from '../../Photos/Atoutbranche.png';
import wildartmuseum from '../../Photos/wild-artmuseum.png'
import cvHelder from "../../Photos/cv.pdf"
import photoHelder from "../../Photos/Helder.png"
import books from "../../Photos/books.png"
import { FaNode } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { GrMysql } from 'react-icons/gr';
import { SiCss3 } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs';

export const arrayInfo = [
  {
    aboutMe: {
      firstname : 'Helder',
      lastname : 'Fernandes Soares',
      github: "https://github.com/helder-hanka",
      linkedin: "https://www.linkedin.com/in/helder-fernandes-soares/",
      email: "hfernandes238@gmail.com",
      number: "06 10 01 58 60",
      cv: cvHelder,
      stack: "Stack : HTML, CSS, JS, React.js, Node.js, Git, MySQL",
      image: photoHelder
    },
    ackathon: {
      
    },
    projets: {
      WildArtMuseums: [
        {
          title: "Wild Art Museums",
          url: "https://wildartmuseum.netlify.app/",
          text1: "Appels à l'API d'Harvard Art Museums ",
          text2: "Pour mon équipe et moi a voulu effectuer une refonte du site officielle d’Harvard Art Museum. ",
          text3: "En proposant une version;",
          text4: "plus moderne.",
          text5: "plus dizaine.",
          text6: "plus simples.",
          info:"",
          nodejs: <FaNode />,
          reactjs: <GrReactjs />,
          css: <SiCss3 />,
          sourceFront:"https://github.com/WildCodeSchool/paris-react-0920-pjt-wildartmuseum",
          image: wildartmuseum
        },
      ],
      AtoutBranche: [
        {
          title: "Atout Branches",
          url:"",
          sourceFront: "https://github.com/WildCodeSchool/paris-js-0920-atoutbranches-front",
          sourceBack: "https://github.com/WildCodeSchool/paris-js-0920-pjt-atoutbranches-back",
          text1: "Projet client en cours de construction pour Lionel, propriétaire d’un parc d’accrobranche situé en région parisienne, désireux de moderniser et d’étendre les fonctionnalités du site rattaché à son activité. Création d’un espace utilisateur et possibilité pour l’administrateur d’ajouter ou de modifier l’intégralité de son contenu. Technologies : React.js et Node.js ",
          image: atoutBranche,
          nodejs: <FaNode />,
          reactjs: <GrReactjs />,
          css: <SiCss3 />,
          sql: <GrMysql />,
        }
      ],
      Books: [
        {
          title: "BOOKS",
          url: "https://application-books.netlify.app",
          sourceFront: "https://github.com/helder-hanka/Books/blob/master/src/Containers/SearchBooks.js",
          text1: "J'ai codé une petite application BOOKS pour découvrir tous les livres avec API Google Books et aussi sauvegarder dans Local storage pour les retrouver plus tard.",
          image: books,
          reactjs: <GrReactjs />,
          css: <BsFillBootstrapFill />,
          redux: <SiRedux />
        }
      ]
    }
  }
];

