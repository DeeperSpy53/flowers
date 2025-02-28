import { useState } from 'react'
import style from './cartitem.module.scss'

export default function CartItem({name, img, price, cat}){
    const [counter, setCounter] = useState(0)
    return(
        <div className={style.cartitem}>
            <svg className={style.cartitem__cross} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.30217 1.3033L11.9088 11.9099M1.30217 11.9099L11.9088 1.3033" stroke="#BDBDBD" stroke-width="3" />
            </svg>
            <div className={style.cartitem__block}>
                <img src={img} alt="" />

                <div className={style.cartitem__desc}>
                    <h3>{name}</h3>
                    <span>{cat} ({price} руб.)</span>
                </div>
            </div>

            <hr />

            <div className={style.cartitem__result}>
                <div className={style.cartitem__counter}>
                    <button onClick={() => setCounter(counter-1)}></button>
                    <span>
                        <span>{counter}</span> шт.
                    </span>
                    <button onClick={() => setCounter(counter+1)}>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 4.5H9M4.5 9L4.5 0" stroke="#5B4A58" stroke-width="2" />
                        </svg>
                    </button>
                </div>

                <div className={style.cartitem__price}>
                    <h5>Сумма</h5>
                    <span>{price*counter} руб.</span>
                </div>
            </div>
        </div>
    )
}