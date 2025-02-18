import style from './advantages.module.scss'

export default function AdvantageItem({img, text}){
    return(
        <div className={style.advantageitem}>
            <div className={style.advantageitem__img}>
                <img src={img} alt="image not found" />
            </div>
            {text}
        </div>
    )
}