import type { NextPage } from "next";
import style from "../styles/Work.module.scss";
import Image from "next/image";
import ProjectCard from "../components/ProjectContainer";

const Work: NextPage = () => {
  return (
    <div className={style.container}>
      <ProjectCard
        name="Battleship"
        image="/projects/battleship.png"
        alt="Battleship"
        desc="placeholder"
      />
    </div>
  );
};

export default Work;
