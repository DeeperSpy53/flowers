import style from './footer.module.scss'
import markImg from '../../assets/img/icons/footer/mark.svg'
import phoneImg from '../../assets/img/icons/footer/phone.svg'
import timeImg from '../../assets/img/icons/footer/time.svg'
import { useState } from 'react'

export default function Footer(){
    const [name, setName] = useState()
    const [phone, setPhone] = useState()

    return(
        <footer>
            <div className={style.footer__nav}>
                <nav className={style.footerNav__wrapper}>
                    <ul>
                        <li><a href="#">Каталог</a></li>
                        <li><a href="#">Скидки</a></li>
                        <li><a href="#">Отзывы</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">Оферта</a></li>
                        <li>
                            <a href="#">Информация для клиента 
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.18848 1.09863L4.09034 4.00012L6.99182 1.09863" stroke="white" />
                                </svg>
                            </a>
                        </li>
                    </ul>    
                </nav>
            </div>

            <div className={style.footer__info}>
                <div className={style.footerInfo__wrapper}>
                    <div className={style.footerInfo__contacts}>
                        <h3>Контактная информация</h3>

                        <div>
                            <img src={markImg} alt="" />
                            <span>г. Владивосток, ул. <br />Пушкинская, 17</span>
                        </div>

                        <div>
                            <img src={phoneImg} alt="" />
                            <span>+ 7 888 888 88 88</span>
                        </div>

                        <div>
                            <img src={phoneImg} alt="" />
                            <span>+ 7 888 888 88 88</span>
                        </div>

                        <div>
                            <img src={timeImg} alt="" />
                            <span>Режим работы: <br />Пн-Сб с 8:00 до 22:00</span>
                        </div>
                    </div>

                    <div className={style.footerInfo__clients}>
                        <h3>Для посетителей</h3>

                        <ul>
                            <a href="#">Оформление заказа</a>
                            <a href="#">Вопросы и ответы</a>
                            <a href="#">Изменение или отмена заказа</a>
                            <a href="#">Способы доставки и оплаты</a>
                        </ul>
                    </div>

                    <form className={style.footerInfo__form}>
                        <h3>Возникли вопросы? Свяжитесь с нами</h3>

                        <div className={style.footerInfo__inputs}>
                            <label> Ваше имя
                                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)}/>
                            </label>

                            <label> Моб. номер
                                <input type="phone" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            </label>
                        </div>

                        <textarea name="msg" id="msg"></textarea>
                        <button type='submit'>Отправить</button>
                    </form>
                </div>

                <hr />

                <small>&copy; &nbsp;2019 Цветочная лавка.</small>
            </div>
        </footer>
    )
}