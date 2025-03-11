import style from './header.module.scss'
import Banner from './Banner'
import logoImg from '../../assets/img/logo.svg'
import userImg from '../../assets/img/icons/userpick.svg'
// import { Link } from 'react-router'

export default function Header(currency){
    return(
        <header>
            <Banner />
            <nav>
                <ul>
                    <li><a href="/#products">Каталог</a></li>
                    <li><a href="/stock">Скидки</a></li>
                    <li><a href="/reviews">Отзывы</a></li>
                    <li><a href="/contacts">Контакты</a></li>
                    <li className={style.nav__img}><img src={logoImg} alt="" /></li>
                    <li className={style.nav__infoclient}>
                        <a href="/questions">Информация для клиента</a>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6.00033 6L11 1" stroke="#5B4A58" stroke-width="2" />
                        </svg>
                    </li>
                    <li class={style.nav__orders}>
                        <img src={userImg} alt="" />
                        <a href="/lk">Мои заказы</a>
                    </li>
                    <li>
                        <a href="#">РУБ.<br /></a>
                        <a href="#">ДОЛ.</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}