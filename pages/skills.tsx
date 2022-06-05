import type { NextPage } from 'next'
import Image from 'next/image'
import style from '../styles/Skills.module.scss'
import SkillContainer from '../components/SkillContainer'


const Skills: NextPage = () => {
  return (
    <>
      <div className={style.pagetitle}>I know how to...</div>
      <div className={style.flexcontainer}>
        <div className={style.grid}>
          <SkillContainer name="Front-End">
            <div className={style.skill}>
              <div>HTML</div>
              <Image src='/skills/html.svg' alt="HTML" width='50' height='50' />
            </div>
            <div className={style.skill}>
              <div>CSS</div>
              <Image src='/skills/css.svg' alt="CSS" width='50' height='50' />
            </div>
            <div className={style.skill}>
              <div>Javascript</div>
              <Image src='/skills/javascript.svg' alt="Javascript" width='50' height='50' />
            </div>
            <div className={style.skill}>
              <div>Typescript</div>
              <Image src='/skills/typescript.png' alt="Typescript" width='50' height='50' />
            </div>
            <div className={style.skill}>
              <div>React</div>
              <Image src='/skills/react.svg' alt="React.js" width='50' height='50' />
            </div>
            <div className={style.skill}>
              <div>Next</div>
              <Image src='/skills/nextjs.svg' alt="Next.js" width='50' height='50' />
            </div>
            <div className={style.skill}>
              <div>Sass</div>
              <Image src='/skills/sass.svg' alt="Sass" width='50' height='50' />
            </div>
            <div className={style.skill}>
              <div>Jest</div>
              <Image src='/skills/jest.svg' alt="Jest" width='50' height='50' />
            </div>
          </SkillContainer>
          <SkillContainer name="Back-end">
            <div className={style.skill}>
              <div>Node.js</div>
              <Image src='/skills/nodejs.svg' alt="Node.js" width='50' height='50' />
            </div>
            <div className={style.skill}>
              <div>Express</div>
              <Image src='/skills/express.webp' alt="Express" width='50' height='50' />
            </div>
            <div className={style.skill}>
              <div>Firebase</div>
              <Image src='/skills/firebase.svg' alt="Firebase" width='50' height='50' />
            </div>
            <div className={style.skill}>
              <div>MongoDB</div>
              <Image src='/skills/mongodb.svg' alt="MongoDB" width='50' height='50' />
            </div>
            <div className={style.skill}>
              <div>Pug</div>
              <Image src='/skills/pug.svg' alt="Pug" width='50' height='50' />
            </div>
          </SkillContainer>
          <SkillContainer name="Miscellaneous">
            <div className={style.skill}>
              <div>Git</div>
              <Image src='/skills/git.svg' alt="Git" width='50' height='50' />
            </div>
            <div className={style.skill}>
              <div>Webpack</div>
              <Image src='/skills/webpack.svg' alt="Webpack" width='50' height='50' />
            </div>
          </SkillContainer>
        </div>
      </div>
    </>
  )
}

export default Skills