import { useState } from 'react'
import Path from '../components/path/Path'
import style from './cart.module.scss'
import querstionImg from '../assets/img/icons/question.svg'

export default function Cart() {
    const [delivery, setDelivery] = useState('delivery');
    const [dateInput, setDateInput] = useState('time');
    const [recevier, setRecevier] = useState('myself');
    const [phone, setPhone] = useState('+7(');

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

    function handleTelChange(e) {
        console.log(e.target.value);
        

        switch(phone.length){
            case 3:{

                break;
            }
            case 4:{
                setPhone(phone + '' + e.target.value[4])
                break;
            }
        }
    }

    return (
    <div className={style.cart}>

        <div className={style.cart__wrapper}>
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
                            Имя и фамилия
                            <input type="text" placeholder='Анатолий петров'/>
                        </label>
                        <label>
                            Моб. номер
                            <input type="tel" placeholder='+_(___) ___-__-__' value={phone} autoComplete='tel' onChange={handleTelChange}/>
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