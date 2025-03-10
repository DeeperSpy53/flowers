import style from './stockitem.module.scss'
import giftImg from '../../assets/img/icons/gift.svg'

export default function StockItem({desc, date, img, discont}){
    return(
        <div className={style.stockitem}>
            <div className={style.stockitem__circle}>
                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="27.5" cy="27.5" r="26.5" fill={`${discont===0?'#F2994A':'#6AAE55'}`} stroke="white" stroke-width="2" />
                </svg>

                {discont === 0 && <img src={giftImg}/>}
                {discont > 0 && <span>-{discont}%</span>}
            </div>

            <img className={style.stockitem__img} src={img} alt="" />
            <span className={style.stockitem__date}>Акция до <strong>{date}</strong></span>
            <span className={style.stockitem__desc}>{desc}</span>
        </div>
    )
}