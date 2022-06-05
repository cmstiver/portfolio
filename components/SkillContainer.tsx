import style from '../styles/Skills.module.scss'

interface Props {
    name: string
    children?: React.ReactNode
  }

const SkillContainer: React.FC<Props> = ( props ) => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>{props.name}</h1>
        <div className={style.skills}>
            {props.children}
        </div>
    </div>
  )
}

export default SkillContainer