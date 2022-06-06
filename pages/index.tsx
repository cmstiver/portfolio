import type { NextPage } from "next";
import style from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.picwithtext}>
          <div className={style.me}>
            <div className={style.pic}>
              <Image
                src="https://avatars.githubusercontent.com/u/74641218"
                alt="Picture of me."
                layout="fill"
                objectFit="cover"
                priority={true}
              />
            </div>
          </div>

          <div className={style.namecontainer}>
            <div className={style.smallname}>Hi, my name is</div>
            <div className={style.name}>Chayse Stiver</div>
            <div className={style.smallname}>I&apos;m a web developer</div>
          </div>
        </div>
      </div>
      <div>
        <div className={style.links}>
          <Link href="https://github.com/cmstiver">
            <a className={style.icon}>
              <Image
                src="/link-icons/github.svg"
                alt="Github"
                width="36px"
                height="36px"
              />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/cmstiver/">
            <a className={style.icon}>
              <Image
                src="/link-icons/linkedin.svg"
                alt="LinkedIn"
                width="36px"
                height="36px"
              />
            </a>
          </Link>
          <Link href="https://twitter.com/ChayseStiver">
            <a className={style.icon}>
              <Image
                src="/link-icons/twitter.svg"
                alt="Twitter"
                width="36px"
                height="36px"
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
