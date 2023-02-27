import type { NextPage } from "next";
import style from "../styles/Work.module.scss";
import ProjectCard from "../components/ProjectCard";

const Work: NextPage = () => {
  return (
    <div className={style.cards}>
      <ProjectCard
        name="Battleship"
        src="/projects/battleship.png"
        alt="Battleship"
        url="https://cmstiver.github.io/battleship/"
        desc="A game that almost everyone played as a kid, created with vanilla Javascript and tested with Jest."
        srccode="https://github.com/cmstiver/battleship"
      />
      <ProjectCard
        name="Resume Builder"
        src="/projects/cvapp.png"
        alt="Resume Builder"
        url="https://cmstiver.github.io/cv-app/"
        desc="Application that helps build resumes and comes with printing functionality. This is my first project using React."
        srccode="https://github.com/cmstiver/cv-app"
      />
      <ProjectCard
        name="Where's Waldo"
        src="/projects/whereswaldo.png"
        alt="Where's Waldo"
        url="https://cmstiver.github.io/wheres-waldo/"
        desc="Game inspired from Where's Waldo. This application uses Firebase as a back-end."
        srccode="https://github.com/cmstiver/wheres-waldo"
      />
      <ProjectCard
        name="Weather App"
        src="/projects/weatherapp.png"
        alt="Weather App"
        url="https://cmstiver.github.io/weather-app/"
        desc="Project utilizing Open Weather API to provide a glance to what the weather is like outside."
        srccode="https://github.com/cmstiver/weather-app"
      />
      <ProjectCard
        name="Tic Tac Toe"
        src="/projects/tictactoe.png"
        alt="Tic Tac Toe"
        url="https://cmstiver.github.io/tic-tac-toe/"
        desc="One of my first projects. I had a lot of fun making this."
        srccode="https://github.com/cmstiver/tic-tac-toe"
      />
    </div>
  );
};

export default Work;
