import type { NextPage } from 'next'
import style from '../styles/Home.module.scss'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <>
      <div className={style.picwithtext}>
        <div>
          <Image className={style.me} src="https://avatars.githubusercontent.com/u/74641218" alt='Picture of me.' height='300' width='300' />
        </div>

        <div className={style.namecontainer}>
          <div className={style.smallname}>Hi, my name is</div>
          <div className={style.name}>Chayse Stiver</div>
          <div className={style.smallname}>I&apos;m a web developer</div>
        </div>
      </div>
      <svg className={style.waves} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#66FCF1" fillOpacity="1" d="M0,256L16,229.3C32,203,64,149,96,149.3C128,149,160,203,192,197.3C224,192,256,128,288,117.3C320,107,352,149,384,176C416,203,448,213,480,197.3C512,181,544,139,576,154.7C608,171,640,245,672,277.3C704,309,736,299,768,272C800,245,832,203,864,202.7C896,203,928,245,960,266.7C992,288,1024,288,1056,256C1088,224,1120,160,1152,112C1184,64,1216,32,1248,16C1280,0,1312,0,1344,26.7C1376,53,1408,107,1424,133.3L1440,160L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
      </svg>
    </>
  )
}

export default Home
