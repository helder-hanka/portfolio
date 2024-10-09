import atoutBranche from "../../Photos/Atoutbranche.png";
import wildartmuseum from "../../Photos/wild-artmuseum.png";
import cvHelder from "../../Photos/CV_Helder.pdf";
import photoHelder from "../../Photos/img_Helder.jpeg";
import books from "../../Photos/books.png";
import { FaNode, FaSass } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { GrMysql } from "react-icons/gr";
import { SiCss3, SiRedux } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { IoLogoNodejs } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import imageTel1 from "../../Photos/images_react_native/imageTel1.png";
import imageTel2 from "../../Photos/images_react_native/imageTel2.png";
import imageTel3 from "../../Photos/images_react_native/imageTel3.png";
import imageTel4 from "../../Photos/images_react_native/imageTel4.png";
import imageTel5 from "../../Photos/images_react_native/imageTel5.png";
import bookiTravelAgency from "../../Photos/bookiTravelAgency.png";
import accueilSohieBluel from "../../Photos/accueilSohieBluel.png";
import ninaCarducci from "../../Photos/ninaCarducci.png";
import kasa from "../../Photos/kasa.png";
import monVieuxGrimoire from "../../Photos/monVieuxGrimoire.png";

const arrayImgTel = [imageTel1, imageTel2, imageTel3, imageTel4, imageTel5];

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
      booki: [
        {
          title: "Booki",
          url: "https://helder-hanka.github.io/booki-starter-code-P2/",
          sourceFront: "https://github.com/helder-hanka/booki-starter-code-P2",
          text1:
            "Un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix",
          image: bookiTravelAgency,
          reactjs: <IoLogoNodejs />,
          css: <SiCss3 />,
        },
      ],
      sophieBluel: [
        {
          title: "Sophie Bluel",
          url: "",
          sourceFront:
            "https://github.com/helder-hanka/Portfolio-architecte-sophie-bluel/tree/master/FrontEnd",
          sourceBack:
            "https://github.com/helder-hanka/Portfolio-architecte-sophie-bluel/tree/master/Backend",
          text1:
            "La conception du site portfolio d’une architecte d’intérieur.",
          image: accueilSohieBluel,
          reactjs: <IoLogoNodejs />,
          css: <FaSass />,
          nodejs: <FaNode />,
        },
      ],
      ninaCarducci: [
        {
          title: "site de Nina Carducci",
          url: "https://helder-hanka.github.io/Nina-Carducci-dev-SEO/",
          sourceFront:
            "https://github.com/helder-hanka/Nina-Carducci-dev-SEO/tree/master",
          text1: "Optimisation SEO du site nina-carducci.github.io",
          image: ninaCarducci,
          css: <IoBriefcaseOutline />,
        },
      ],
      kasa: [
        {
          title: "Kasa",
          url: "",
          sourceFront:
            "https://github.com/helder-hanka/real-estate-rental/tree/master",
          text1:
            "Kasa, une entreprise de location d’appartements entre particuliers.",
          image: kasa,
          reactjs: <GrReactjs />,
          css: <FaSass />,
          nodejs: <FaNode />,
        },
      ],
      monVieuxGrimoire: [
        {
          title: "Mon Vieux Grimoire",
          url: "",
          sourceFront:
            "https://github.com/OpenClassrooms-Student-Center/P7-Dev-Web-livres",
          sourceBack: "https://github.com/helder-hanka/books_Back_end",
          text1:
            "Il s’agit d’une petite chaîne de librairies qui souhaite ouvrir un site de référencement et de notation de livres : Mon Vieux Grimoire.",
          image: monVieuxGrimoire,
          reactjs: <GrReactjs />,
          css: <FaSass />,
          nodejs: <FaNode />,
        },
      ],
    },
  },
];
export const data = [
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
    projets: [
      {
        title: "Wild Art Museums",
        url: "https://wildartmuseum.netlify.app/",
        texts: [
          "Appels à l'API d'Harvard Art Museums ",
          "Pour mon équipe et moi a voulu effectuer une refonte du site officielle d’Harvard Art Museum. ",
          "En proposant une version;",
          "plus moderne.",
          "plus dizaine.",
          "plus simples.",
        ],
        info: "",
        language: [<GrReactjs />, <SiCss3 />, <FaNode />],
        sourceFront:
          "https://github.com/WildCodeSchool/paris-react-0920-pjt-wildartmuseum",
        sourceBack: "",
        image: wildartmuseum,
      },
      {
        title: "Atout Branches",
        url: "",
        texts: [
          "Projet client en cours de construction pour Lionel, propriétaire d’un parc d’accrobranche situé en région parisienne, désireux de moderniser et d’étendre les fonctionnalités du site rattaché à son activité. Création d’un espace utilisateur et possibilité pour l’administrateur d’ajouter ou de modifier l’intégralité de son contenu. Technologies : React.js et Node.js ",
        ],
        info: "",
        sourceFront:
          "https://github.com/WildCodeSchool/paris-js-0920-atoutbranches-front",
        sourceBack:
          "https://github.com/WildCodeSchool/paris-js-0920-pjt-atoutbranches-back",
        language: [<GrReactjs />, <SiCss3 />, <FaNode />, <GrMysql />],
        image: atoutBranche,
      },
      {
        title: "BOOKS",
        url: "https://application-books.netlify.app",
        texts: [
          "J'ai codé une petite application BOOKS pour découvrir tous les livres avec API Google Books et aussi sauvegarder dans Local storage pour les retrouver plus tard.",
        ],
        info: "",
        sourceFront:
          "https://github.com/helder-hanka/Books/blob/master/src/Containers/SearchBooks.js",
        sourceBack: "",
        language: [<GrReactjs />, <BsFillBootstrapFill />, <SiRedux />],
        image: books,
      },
      {
        title: "E-Commerce React Native",
        url: "",
        texts: [
          "C'est une application e-commerce très simple à utiliser en React Native que vous pouvez acheter ou vendre votre formation",
        ],
        info: "",
        sourceFront: "https://github.com/helder-hanka/e-commerce_React_native",
        sourceBack: "",
        language: [<GrReactjs />, <BsFillBootstrapFill />, <SiRedux />],
        image: arrayImgTel,
      },
      {
        title: "Booki",
        url: "https://helder-hanka.github.io/booki-starter-code-P2/",
        texts: [
          "Un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix",
        ],
        info: "",
        sourceFront: "https://github.com/helder-hanka/booki-starter-code-P2",
        sourceBack: "",
        language: [<SiCss3 />, <IoLogoNodejs />],
        image: bookiTravelAgency,
      },
      {
        title: "Sophie Bluel",
        url: "",
        texts: [
          "La conception du site portfolio d’une architecte d’intérieur.",
        ],
        info: "",
        sourceFront:
          "https://github.com/helder-hanka/Portfolio-architecte-sophie-bluel/tree/master/FrontEnd",
        sourceBack:
          "https://github.com/helder-hanka/Portfolio-architecte-sophie-bluel/tree/master/Backend",
        language: [<FaSass />, <IoLogoNodejs />, <FaNode />],
        image: accueilSohieBluel,
      },
      {
        title: "site de Nina Carducci",
        url: "https://helder-hanka.github.io/Nina-Carducci-dev-SEO/",
        texts: ["Optimisation SEO du site nina-carducci.github.io"],
        info: "",
        sourceFront:
          "https://github.com/helder-hanka/Nina-Carducci-dev-SEO/tree/master",
        sourceBack: "",
        language: [<IoBriefcaseOutline />],
        image: ninaCarducci,
      },
      {
        title: "Kasa",
        url: "",
        texts: [
          "Kasa, une entreprise de location d’appartements entre particuliers.",
        ],
        info: "",
        sourceFront:
          "https://github.com/helder-hanka/real-estate-rental/tree/master",
        sourceBack: "",
        language: [<GrReactjs />, <FaSass />, <FaNode />],
        image: kasa,
      },
      {
        title: "Mon Vieux Grimoire",
        url: "",
        texts: [
          "Il s’agit d’une petite chaîne de librairies qui souhaite ouvrir un site de référencement et de notation de livres : Mon Vieux Grimoire.",
        ],
        info: "",
        sourceFront:
          "https://github.com/OpenClassrooms-Student-Center/P7-Dev-Web-livres",
        sourceBack: "https://github.com/helder-hanka/books_Back_end",
        language: [<GrReactjs />, <FaSass />, <FaNode />],
        image: monVieuxGrimoire,
      },
    ],
  },
];
