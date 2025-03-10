import style from './404.module.scss'
import errorImg from '../../assets/img/404.png'

export default function Error404(){
    return(
        <div className={style.error}>
            <div className={style.error__wrapper}>
            <img src={errorImg} alt="" />
                <h2>Упс... Что-то пошло не так.</h2>
                <span>Перейдите на главную, а мы пока все починим.</span>
                <button>Главная</button>
            </div>
        </div>
    )
}