import style from './header.module.scss'

import markImg from '../../assets/img/icons/mark.svg'

export default function Banner(){
    return(
        <div className={style.banner}>
            <div className={style.banner__address}>
                <img src={markImg} alt="cock :(" />
                <p><span>г. Владивосток,</span> ул. Пушкинская, 17 А</p>
            </div>
        </div>
    )
}