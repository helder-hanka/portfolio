import atoutBranche from "../../Photos/Atoutbranche.png";
import wildartmuseum from "../../Photos/wild-artmuseum.png";
import cvHelder from "../../Photos/CV_Helder.pdf";
import photoHelder from "../../Photos/img_Helder.jpeg";
import books from "../../Photos/books.png";
import { FaNode } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { GrMysql } from "react-icons/gr";
import { SiCss3 } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import imageTel1 from "../../Photos/images_react_native/imageTel1.png";
import imageTel2 from "../../Photos/images_react_native/imageTel2.png";
import imageTel3 from "../../Photos/images_react_native/imageTel3.png";
import imageTel4 from "../../Photos/images_react_native/imageTel4.png";
import imageTel5 from "../../Photos/images_react_native/imageTel5.png";
import imageTel6 from "../../Photos/images_react_native/imageTel6.png";
import imageTel7 from "../../Photos/images_react_native/imageTel7.png";
import imageTel8 from "../../Photos/images_react_native/imageTel8.png";
import imageTel9 from "../../Photos/images_react_native/imageTel9.png";
import imageTel10 from "../../Photos/images_react_native/imageTel10.png";
import imageTel11 from "../../Photos/images_react_native/imageTel11.png";
import imageTel12 from "../../Photos/images_react_native/imageTel12.png";
import imageTel13 from "../../Photos/images_react_native/imageTel13.png";
import imageTel14 from "../../Photos/images_react_native/imageTel14.png";
import imageTel15 from "../../Photos/images_react_native/imageTel15.png";
import imageTel16 from "../../Photos/images_react_native/imageTel16.png";
import imageTel17 from "../../Photos/images_react_native/imageTel17.png";

const arrayImgTel = [
  imageTel1,
  imageTel2,
  imageTel3,
  imageTel4,
  imageTel5,
  imageTel6,
  imageTel7,
  imageTel8,
  imageTel9,
  imageTel10,
  imageTel11,
  imageTel12,
  imageTel13,
  imageTel14,
  imageTel15,
  imageTel16,
  imageTel17,
];

export const arrayInfo = [
  {
    aboutMe: {
      firstname: "Helder",
      lastname: "Fernandes Soares",
      github: "https://github.com/helder-hanka",
      linkedin: "https://www.linkedin.com/in/helder-fernandes-soares/",
      email: "hfernandes238@gmail.com",
      number: "06 10 01 58 60",
      cv: cvHelder,
      stack: "HTML, CSS, JS, React.js, React Native, Node.js, Git, MySQL",
      image: photoHelder,
    },
    ackathon: {},
    projets: {
      WildArtMuseums: [
        {
          title: "Wild Art Museums",
          url: "https://wildartmuseum.netlify.app/",
          text1: "Appels à l'API d'Harvard Art Museums ",
          text2:
            "Pour mon équipe et moi a voulu effectuer une refonte du site officielle d’Harvard Art Museum. ",
          text3: "En proposant une version;",
          text4: "plus moderne.",
          text5: "plus dizaine.",
          text6: "plus simples.",
          info: "",
          nodejs: <FaNode />,
          reactjs: <GrReactjs />,
          css: <SiCss3 />,
          sourceFront:
            "https://github.com/WildCodeSchool/paris-react-0920-pjt-wildartmuseum",
          image: wildartmuseum,
        },
      ],
      AtoutBranche: [
        {
          title: "Atout Branches",
          url: "https://www.atoutbranches.com/",
          sourceFront:
            "https://github.com/WildCodeSchool/paris-js-0920-atoutbranches-front",
          sourceBack:
            "https://github.com/WildCodeSchool/paris-js-0920-pjt-atoutbranches-back",
          text1:
            "Projet client en cours de construction pour Lionel, propriétaire d’un parc d’accrobranche situé en région parisienne, désireux de moderniser et d’étendre les fonctionnalités du site rattaché à son activité. Création d’un espace utilisateur et possibilité pour l’administrateur d’ajouter ou de modifier l’intégralité de son contenu. Technologies : React.js et Node.js ",
          image: atoutBranche,
          nodejs: <FaNode />,
          reactjs: <GrReactjs />,
          css: <SiCss3 />,
          sql: <GrMysql />,
        },
      ],
      Books: [
        {
          title: "BOOKS",
          url: "https://application-books.netlify.app",
          sourceFront:
            "https://github.com/helder-hanka/Books/blob/master/src/Containers/SearchBooks.js",
          text1:
            "J'ai codé une petite application BOOKS pour découvrir tous les livres avec API Google Books et aussi sauvegarder dans Local storage pour les retrouver plus tard.",
          image: books,
          reactjs: <GrReactjs />,
          css: <BsFillBootstrapFill />,
          redux: <SiRedux />,
        },
      ],
      eCommerceReacNative: [
        {
          title: "E-Commerce React Native",
          url: "",
          sourceFront:
            "https://github.com/helder-hanka/e-commerce_React_native",
          text1:
            "C'est une application e-commerce très simple à utiliser en React Native que vous pouvez acheter ou vendre votre formation",
          image: arrayImgTel,
          reactjs: <GrReactjs />,
          css: <BsFillBootstrapFill />,
          redux: <SiRedux />,
        },
      ],
    },
  },
];
