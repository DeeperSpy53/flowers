import style from './path.module.scss'

export default function Path({children}) {
    return (
      <div className={style.path}>
        <span>Главная &nbsp;{'>'} &nbsp;{children}</span>
      </div>
    )
  }