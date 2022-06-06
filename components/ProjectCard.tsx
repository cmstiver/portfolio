import style from "../styles/Work.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  children?: React.ReactNode;
  src: string;
  alt: string;
  url: string;
  desc: string;
  srccode: string;
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
        <div>
          <h4 className={style.title}>{props.name}</h4>
          <Link href={props.srccode}>
            <a className={style.icon}>
              <Image
                src="/link-icons/github.svg"
                alt="Github"
                width="36px"
                height="36px"
              />
            </a>
          </Link>
        </div>
        <p className={style.desc}>{props.desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
