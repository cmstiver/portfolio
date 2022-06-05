import style from "../styles/Work.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  children?: React.ReactNode;
  src: string;
  alt: string;
  url: string;
}

const ProjectCard: React.FC<Props> = (props) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <Link href={props.url}>
          <a>
            <Image
              src={props.src}
              alt={props.alt}
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
      <div className={style.container}>
        <h4 className={style.title}>{props.name}</h4>
      </div>
    </div>
  );
};

export default ProjectCard;
