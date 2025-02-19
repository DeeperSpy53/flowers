import StepItem from './StepItem'
import style from './steps.module.scss'

export default function steps(){
    return(
        <div className={style.steps}>
            <h2><span>заказать</span> в 5 шагов</h2>
            
            <div className={style.steps__list}>
                <StepItem title='Выберите букет;' desc={<p>В каталоге выберите <br/>понравившийся букет;</p>} num={1}/>
                <StepItem title='Выберите букет:' desc={<p>Заполните форму доставки и оплатите <br/> заказ удобным для вас способом;</p>} num={3}/>
                <StepItem title='Выберите размер и дополнение;' desc={<p>На странице с описанием букета выберите<br/> подходящий размер. По желанию, добавьте <br/>к букету мягкую игрушку, сладости или<br/> любой другой подарок;</p>} num={2}/>
                <StepItem title='Выберите букет:' desc={<p>Букет будет собран из свежайших цветов и<br/> доставлен получателю к указанной дате и<br/> времени.</p>} num={4}/>
            </div>
        </div>
    )
}