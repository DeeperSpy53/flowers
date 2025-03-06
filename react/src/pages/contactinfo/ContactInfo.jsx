import Path from '../../components/path/Path'
import style from './contactinfo.module.scss'

export default function ContactInfo(){
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

                        <div className={style.contactinfo__map}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}