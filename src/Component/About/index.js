import React from "react";
import { Slide } from "react-awesome-reveal";
import "./About.css";
import design from "../../Photos/design.png";
import process from "../../Photos/process.png";
import monitor from "../../Photos/monitor.png";

const About = () => {
  return (
    <section className="section-About">
      <div className="container-About">
        <div className="title">
          <Slide left>
            <h2>Bonjour, je m'appelle Helder !</h2>
          </Slide>
        </div>
        <div className="About">
          <div className="AboutText">
            <p>
              Je suis un développeur web expérimenté ayant 2 ans d'expérience
              dans la création et la maintenance d'applications web. J'ai
              développé des compétences solides dans les technologies web telles
              que HTML, CSS, JavaScript et plusieurs frameworks tels que React
              ou React Native. J'ai également une expérience en travaillant avec
              des bases de données telles que MySQL et MongoDB. Au cours des
              deux dernières années, j'ai travaillé sur des projets solo et en
              équipe, ce qui m'a permis d'acquérir de solides compétences en
              communication et en collaboration avec les autres membres de
              l'équipe. Je suis passionné par le développement web et je suis
              toujours à la recherche de nouvelles opportunités pour développer
              mes compétences et développer des applications innovantes pour les
              utilisateurs
            </p>
          </div>
        </div>
      </div>
      <div className="containerDesignerFrontBack">
        <div className="DesignerFrontBack">
          <div className="column1 column">
            <img src={design} alt="desing" />
            <h1>Designer</h1>
            <p>
              J'apprécie une structure de contenu simple, des modèles de
              conception épurés et des interactions réfléchies.
            </p>
            <p className="list-title">Ce que j'aime concevoir :</p>
            <p>UX, UI, Web, Applications</p>
            <p className="list-title">Outils de conception :</p>
            <p>Figma</p>
          </div>
          <div className="column2 column">
            <img src={monitor} alt="monitor" />
            <h1>Développeur front</h1>
            <p>
              J'aime coder des choses à partir de zéro et donner vie à des idées
              dans le navigateur.
            </p>
            <p className="list-title">Techno que j'utilise:</p>
            <p>HTML, bootstrap, CSS, Sass, Git / Github:</p>
            <p className="list-title">Outils de conception:</p>
            <p>Vscode</p>
            <p>Terminal</p>
          </div>
          <div className="column3 column">
            <img src={process} alt="process" />
            <h1>Développeur backend</h1>
            <p>
              Je suis un développeur enthousiaste et passionné par le
              développement en backend. J'aime travailler sur les couches
              cachées des applications, résoudre les défis complexes et voir le
              résultat final en action. Pour moi, le développement en backend
              est une combinaison parfaite de créativité et de logique, ce qui
              en fait un aspect de la programmation très gratifiant pour moi.
            </p>
            <p className="list-title">Techno que j'utilise:</p>
            <p>Nodejs, Express </p>
            <p className="list-title">Outils de conception :</p>
            <p>Vscode</p>
            <p>Terminal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
