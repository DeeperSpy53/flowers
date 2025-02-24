import style from './steps.module.scss'
import wreathImg from '../../../assets/img/icons/wreath.svg'

export default function StepItem({title, desc, num}){
    return(
        <div className={style.stepItem}>
            <div className={style.stepItem__img}>
                <span>{num}</span>
                <img src={wreathImg} alt="" />
            </div>

            <div className={style.stepItem__info}>
                <h3>{title}</h3>
                {desc}
            </div>
        </div>
    )
}