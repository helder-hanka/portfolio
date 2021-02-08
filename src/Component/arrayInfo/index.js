import atoutBranche from '../../Photos/Atoutbranche.png';
import wildartmuseum from '../../Photos/wild-artmuseum.png'
import cvHelder from "../../Photos/cv.pdf"
import photoHelder from "../../Photos/Helder.png"

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
      stack: "Stack : HTML, CSS, JS, React.js, Node.js, Git, MySQL, Python",
      image: photoHelder
    },
    ackathon: {
      
    },
    projets: {
      WildArtMuseums: [
        {
          title: "Wild Art Museums",
          url: "https://wildartmuseum.netlify.app/",
          text: "Appels à l'API d'Harvard Art Museums ",
          info:"",
          image: wildartmuseum
        },
      ],
      AtoutBranche: [
        {
          title: "Atout Branches",
          url:"",
          text: "Projet client en cours de construction pour Lionel, propriétaire d’un parc d’accrobranche situé en région parisienne, désireux de moderniser et d’étendre les fonctionnalités du site rattaché à son activité. Création d’un espace utilisateur et possibilité pour l’administrateur d’ajouter ou de modifier l’intégralité de son contenu. Technologies : React.js et Node.js ",
          image: atoutBranche
        }
      ]
    }
  }
];

