import style from './advantages.module.scss'
import img1 from '../../assets/img/icons/advantages/1.svg'
import img2 from '../../assets/img/icons/advantages/2.svg'
import img3 from '../../assets/img/icons/advantages/3.svg'
import img4 from '../../assets/img/icons/advantages/4.svg'

import AdvantageItem from './AdvantageItem'

export default function Advantages(){
    return(
        <div className={style.advantages}>
            <AdvantageItem img={img1} text={<p><span>Бесплатная</span> доставка<br /> по городу</p>}/>
            <AdvantageItem img={img2} text={<p>Открытка <span>в подарок</span><br /> и фото вручения</p>}/>
            <AdvantageItem img={img3} text={<p><span>Круглосуточная</span><br /> доставка</p>}/>
            <AdvantageItem img={img4} text={<p>Накопительная<br /> система <span>скидок</span></p>}/>
        </div>
    )
}