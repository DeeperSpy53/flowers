import style from './mainslider.module.scss'

import fonImg from '../../assets/img/fon1.jpg'

export default function MainSlider(){
    return(
        <div className={style.mainslider}>
            <h1>доставка <span>цветов в городе</span></h1>
            <img src={fonImg} alt="" />
        </div>
    )
}