import { useState } from 'react'
import Path from '../components/path/Path'
import style from './cart.module.scss'
import querstionImg from '../assets/img/icons/question.svg'
import CartInput from '../components/cart/cartinput/CartInput' 
import CartItem from '../components/cart/cartintem/CartItem'

export default function Cart() {
    const [delivery, setDelivery] = useState('delivery');
    const [dateInput, setDateInput] = useState('time');
    const [recevier, setRecevier] = useState('myself');
    const [pay, setPay] = useState('cash');
    const [phone, setPhone] = useState();
    const [phoneCont, setPhoneCont] = useState();

    const date = new Date();
    const dateNow = `${date.getFullYear()}-${date.getMonth()+1<10?'0'+(date.getMonth()+1):(date.getMonth()+1)}-${date.getDate()}`;
    const [dateState, setDateState] = useState(dateNow)
    const [dateShowState, setDateShowState] = useState(`${date.getDate()}.${date.getMonth()+1<10?'0'+(date.getMonth()+1):(date.getMonth()+1)}.${date.getFullYear()}`)
    const [time, setTime] = useState(`${date.getHours()}:${date.getMinutes()}`)

    function handleDateDeliveryClick(e) {
        setDateState(e.target.value)

        const res = e.target.value.replace(/(\d+)-(\d+)-(\d+)/,"$3.$2.$1");
        setDateShowState(res)
    }

    return (
    <div className={style.cart}>
        <form className={style.cart__wrapper}>
            <div className={style.cart__delivery}>
                <Path>Корзина</Path>
                <h2>Оформление заказа</h2>

                <div className={style.delivery__way}>
                    <h3>Способ доставки</h3>

                    <div className={style.deliveryWay__inputs}>
                        <label className={delivery=='delivery'?style.delivery__sel:''}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="9.8374" cy="10" rx="9.8374" ry="10" fill="#E0E0E0" />
                                <ellipse cx="9.83735" cy="10" rx="6.88618" ry="7" fill="#BDBDBD" />
                            </svg>
                            <input type="radio" name='delivery' value={delivery} checked={delivery == 'delivery'} onChange={() => setDelivery('delivery')}/>
                            Доставка по <br />Владивостоку
                        </label>
                        <label className={delivery=='myself'?style.delivery__sel:''}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="9.8374" cy="10" rx="9.8374" ry="10" fill="#E0E0E0" />
                                <ellipse cx="9.83735" cy="10" rx="6.88618" ry="7" fill="#BDBDBD" />
                            </svg>
                            <input type="radio" name='myself' value={delivery}  checked={delivery == 'mysel'} onChange={() => setDelivery('myself')}/>
                            <div>
                                Самовывоз
                                <span>г. Владивосток, &nbsp;ул. Пушкинская, 17 А</span>
                            </div>
                        </label>
                    </div>
                </div>

                <div className={style.delivery__date}>
                    <h3>Дата и время</h3>

                    <div className={style.deliveryDate__input}>
                        <h4>Дата</h4>

                        <div>
                            <label>
                                <span>{dateShowState}</span>
                                <input type="date" value={dateState} onChange={handleDateDeliveryClick}/>
                            </label>
                        </div>
                    </div>
                    <hr />
                    <div className={style.deliveryDate__time}>
                        <label className={dateInput=='time'?style.delivery__sel:''}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="9.8374" cy="10" rx="9.8374" ry="10" fill="#E0E0E0" />
                                <ellipse cx="9.83735" cy="10" rx="6.88618" ry="7" fill="#BDBDBD" />
                            </svg>
                            <input type="radio" name='time' value={dateInput} checked={dateInput == 'time'} onChange={() => setDateInput('time')}/>
                            Указать промежуток времени
                        </label>   

                        <label>
                            <span>{time}</span>
                            <input type="time" value={time} onChange={(e) => setTime(e.target.value)}/>
                        </label>
                    </div>
                    <hr />
                    <div className={style.deliveryDate__client}>
                        <label className={dateInput=='client'?style.delivery__sel:''}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="9.8374" cy="10" rx="9.8374" ry="10" fill="#E0E0E0" />
                                <ellipse cx="9.83735" cy="10" rx="6.88618" ry="7" fill="#BDBDBD" />
                            </svg>
                            <input type="radio" name='client' value={dateInput} checked={dateInput == 'client'} onChange={() => setDateInput('client')}/>
                            Позвонить получателю для уточнения времени и адреса

                            <img src={querstionImg} alt="" title="eshkere"/>
                        </label> 

                        <label>
                            <input type="checkbox" />   
                            По телефону&nbsp;<span>не говорить</span>&nbsp;что это цветы
                        </label>  
                    </div>
                </div>

                <div className={style.delivery__receiver}>
                    <h3>Получатель</h3>

                    <div className={style.deliveryRec__radio}>
                        <label className={recevier=='myself'?style.delivery__sel:''}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="9.8374" cy="10" rx="9.8374" ry="10" fill="#E0E0E0" />
                                <ellipse cx="9.83735" cy="10" rx="6.88618" ry="7" fill="#BDBDBD" />
                            </svg>
                            <input type="radio" name='myself' value={dateInput} checked={dateInput == 'myself'} onChange={() => setRecevier('myself')}/>
                            Я получатель
                        </label>  

                        <label className={recevier=='someone'?style.delivery__sel:''}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="9.8374" cy="10" rx="9.8374" ry="10" fill="#E0E0E0" />
                                <ellipse cx="9.83735" cy="10" rx="6.88618" ry="7" fill="#BDBDBD" />
                            </svg>
                            <input type="radio" name='someone' value={dateInput} checked={dateInput == 'someone'} onChange={() => setRecevier('someone')}/>
                            Получатель другой человек
                        </label>   
                    </div>

                    <div className={style.deliveryRec__column}>
                        <label>
                            <span>Имя и фамилия</span>
                            <input type="text" placeholder='Анатолий петров'/>
                        </label>
                        <label>
                            <span>Моб. номер</span>
                            <CartInput phone={phone} setPhone={setPhone}/>
                        </label>
                    </div>

                    <div className={style.deliveryRec__column}>
                        <label>
                            <span>Город</span>
                            <input type="text" value='Владивосток' disabled={true}/>
                        </label>
                        <label>
                            <span>Адрес</span>
                            <input type="text" placeholder='г. Владивосток, ул. Фокина, 15'/>
                        </label>
                    </div>

                    <div className={style.deliveryRec__note}>
                        <span>Примечание</span>

                        <textarea name="note" id="note"></textarea>
                    </div>
                </div>

                <div className={style.delivery__contacts}>
                    <h3>Ваши контакты</h3>

                    <div className={style.deliveryCont__list}>
                        <label>
                            <span>Имя и фамилия</span>
                            <input type="text" placeholder='Анатолий Петров'/>
                        </label>

                        <label>
                            <span>Моб. номер</span>
                            <CartInput phone={phoneCont} setPhone={setPhoneCont}/>
                        </label>

                        <label>
                            <span>Город</span>
                            <input type="text" placeholder='Владивосток'/>
                        </label>
                        </div>
                </div>

                <div className={style.delivery__pay}>
                    <h3>Способ оплаты</h3>

                    <div className={style.deliveryPay__list}>
                        <label className={pay=='cash'?style.delivery__sel:''}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="9.8374" cy="10" rx="9.8374" ry="10" fill="#E0E0E0" />
                                <ellipse cx="9.83735" cy="10" rx="6.88618" ry="7" fill="#BDBDBD" />
                            </svg>
                            <input type="radio" name='cash' value={pay} checked={pay == 'cash'} onChange={() => setPay('cash')}/>
                            Оплата наличными во время получения (самовызов)
                        </label>  
                        <hr />
                        <label className={pay=='cash2'?style.delivery__sel:''}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="9.8374" cy="10" rx="9.8374" ry="10" fill="#E0E0E0" />
                                <ellipse cx="9.83735" cy="10" rx="6.88618" ry="7" fill="#BDBDBD" />
                            </svg>
                            <input type="radio" name='cash2' value={pay} checked={pay == 'cash2'} onChange={() => setPay('cash2')}/>
                            Оплата наличными курьеру (только, если получатель — Вы)
                        </label>  
                        <hr />
                        <label className={pay=='online'?style.delivery__sel:''}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="9.8374" cy="10" rx="9.8374" ry="10" fill="#E0E0E0" />
                                <ellipse cx="9.83735" cy="10" rx="6.88618" ry="7" fill="#BDBDBD" />
                            </svg>
                            <input type="radio" name='online' value={pay} checked={pay == 'online'} onChange={() => setPay('online')}/>
                            Онлайн оплата — Сбербанк
                        </label>  
                    </div>
                </div>

                <button className={style.cart__submit} type='submit'>Оформить заказ</button>
            </div>

            <div className={style.cart__products}>
                <h2>Корзина</h2>

                <div className={style.cartProd__list}>
                    <CartItem name={'мяу'} img={'/products/1.jpg'} price={228} cat='Большой'/>
                </div>
            </div>
        </form>
    </div>
    )
}