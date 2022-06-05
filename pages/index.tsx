import type { NextPage } from 'next'
import style from '../styles/Home.module.scss'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <div className={style.container}>
      <div className={style.picwithtext}>
        <div className={style.me}>
          <div className={style.pic}>
            <Image src="https://avatars.githubusercontent.com/u/74641218" alt='Picture of me.' layout='fill' objectFit='cover' />
          </div>
        </div>

        <div className={style.namecontainer}>
          <div className={style.smallname}>Hi, my name is</div>
          <div className={style.name}>Chayse Stiver</div>
          <div className={style.smallname}>...I&apos;m a web developer</div>
        </div>
      </div>
    </div>
  )
}

export default Home
