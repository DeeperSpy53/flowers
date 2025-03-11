import style from './path.module.scss'

export default function Path({children}) {
    return (
      <div className={style.path}>
        <span><a href="/">Главная</a> &nbsp;{'>'} &nbsp;{children}</span>
      </div>
    )
  }