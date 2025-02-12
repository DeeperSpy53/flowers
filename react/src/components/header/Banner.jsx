import style from './header.module.scss'

import markImg from '../../assets/img/icons/mark.svg'
import phoneImg from '../../assets/img/icons/phone.svg'
import cartImg from '../../assets/img/icons/cart.svg'

export default function Banner(price = 0){
    return(
        <div className={style.banner}>
            <div className={style.banner__wrapper}>
                <div className={style.banner__address}>
                    <img src={markImg} alt="cock :(" />
                    <p><span>г. Владивосток,</span> ул. Пушкинская, 17 А</p>
                </div>

                <div className={style.banner__phone}>
                    <img src={phoneImg} alt="" />

                    <p>
                        <span>WHATSAPP</span> <br />
                        + 7 808 353 53 35 &nbsp;
                        + 7 888 888 88 88
                    </p>
                </div>

                <div className={style.banner__cart}>
                    <img src={cartImg} alt="" />
                    <p>{price===0?totalPrice:0} руб.</p>
                </div>
            </div>
        </div>
    )
}