import { useState } from 'react';
import Path from '../../components/path/Path'
import style from './contactinfo.module.scss'
import { YMaps, Map, Placemark } from '@iminside/react-yandex-maps';
import { IMaskInput } from 'react-imask';

export default function ContactInfo(){
    const defaultState = {
        center: [43.115319, 131.897837],
        zoom: 11,
    };

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState()
    const [question, setQuestion] = useState()

    return(
        <div className={style.contactinfo}>
            <div className={style.contactinfo__wrapper}>
                <Path>Контакты</Path>
                <h1>Контактная информация</h1>

                <div className={style.contactinfo__block}>
                    <div className={style.contactinfo__contacts}>
                        <ul>
                            <li>
                                <span>Моб. номер:</span>
                                <strong>
                                    + 7 808 353 53 35 <br /> 
                                    + 7 888 888 88 88
                                </strong>
                            </li>
                            <hr />
                            <li>
                                <span>Эл. почта:</span>
                                <strong>flawka_vl@gmail.com</strong>
                            </li>
                            <hr />
                            <li>
                                <span>Адрес:</span>
                                <strong>г. Владивосток, <br />ул. Пушкинская, 17 А</strong>
                            </li>
                            <hr />
                            <li>
                                <span>Режим работы:</span>
                                <strong>Пн-Сб с 8:00 до 22:00<br />Вс — выходной</strong>        
                            </li>
                        </ul>

                        <YMaps>
                            <Map defaultState={defaultState} style={{borderRadius: '10px'}}>
                                <Placemark width='825px' height='404px' defaultGeometry={[43.115319, 131.897837]}/>
                            </Map>
                        </YMaps>
                    </div>

                    <form className={style.contactinfo__form}>
                        <h2>Остались вопросы? Свяжитесь с нами.</h2>

                        <div className={style.form__block}>
                            <div className={style.form__wrapper}>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Имя фамилия'/>
                                <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} placeholder='Эл. почта'/>
                                <IMaskInput mask="+7 (000) 000-00-00" placeholder='Моб. номер' onChange={(e) => setPhone(e.target.value)}/>
                            </div>

                            <div className={style.form__question}>
                                <textarea placeholder='Возникший вопрос' value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
                            </div>
                        </div>

                        <button>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}