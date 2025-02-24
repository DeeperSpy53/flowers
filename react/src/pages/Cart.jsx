import { useState } from 'react'
import Path from '../components/path/Path'
import style from './cart.module.scss'

export default function Cart() {
    const [delivery, setDelivery] = useState()

    return (
    <div className={style.cart}>

        <div className={style.cart__wrapper}>
            <div className={style.cart__delivery}>
                <Path>Корзина</Path>
                <h2>Оформление заказа</h2>

                <div className={style.delivery__way}>
                    <h3>Способ доставки</h3>

                    <div className={style.deliveryWay__inputs}>
                        <label>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse opacity="0.3" cx="10.8218" cy="10" rx="9.8374" ry="10" fill="#6AAE55" />
                                <ellipse cx="10.8217" cy="10" rx="6.88618" ry="7" fill="#6AAE55" />
                            </svg>
                            <input type="radio" name='delivery' value={delivery} onChange={(e) => setDelivery(e.target.value)}/>
                            Доставка по Владивостоку
                        </label>
                        <label>
                        <input type="radio" name='myself' value={delivery} onChange={(e) => setDelivery(e.target.value)}/>
                            Самовывоз
                            <span>г. Владивосток, ул. Пушкинская, 17 А</span>
                        </label>
                       
                    </div>
                </div>
            </div>

            <div className={style.cart__list}>
                <h2>Корзина</h2>
            </div>
        </div>
    </div>
    )
}