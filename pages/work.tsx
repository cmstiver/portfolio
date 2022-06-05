import type { NextPage } from "next";
import style from "../styles/Work.module.scss";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";

const Work: NextPage = () => {
  return (
    <div className={style.cards}>
      <ProjectCard
        name="Battleship"
        src="/projects/battleship.png"
        alt="Battleship"
        url="https://cmstiver.github.io/battleship/"
      />
      <ProjectCard
        name="Resume Builder"
        src="/projects/cvapp.png"
        alt="Resume Builder"
        url="https://cmstiver.github.io/cv-app/"
      />
      <ProjectCard
        name="Where's Waldo"
        src="/projects/whereswaldo.png"
        alt="Where's Waldo"
        url="https://cmstiver.github.io/wheres-waldo/"
      />
      <ProjectCard
        name="API Utilizing Blog"
        src="/projects/APIBlog.png"
        alt="API Utilizing Blog"
        url="https://api-utilizing-blog.vercel.app/"
      />
      <ProjectCard
        name="Tic Tac Toe"
        src="/projects/tictactoe.png"
        alt="Tic Tac Toe"
        url="https://cmstiver.github.io/tic-tac-toe/"
      />
    </div>
  );
};

export default Work;
