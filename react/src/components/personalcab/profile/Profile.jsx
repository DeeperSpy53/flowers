import { useEffect, useState } from 'react';
import style from './profile.module.scss'
import { IMaskInput } from 'react-imask';
import editImg from '../../../assets/img/icons/edit.svg'

export default function Profile(){
    const summ = 15000;
    const [discont, setDiscont] = useState(0)
    const [width, setWidth] = useState(0)
    const [edit, setEdit] = useState(false)

    const [phone, setPhone] = useState()
    const [name, setName] = useState()
    const [city, setCity] = useState()
    const [address, setAddress] = useState()

    
    function getWidthProgressBar() {
        if(summ < 10000){
            setDiscont(0)
            setWidth(270/100*(summ/100))
        } 
        else if(summ < 50000){
            setDiscont(3)
            setWidth((261/100*(summ-10000)/400)+270);
        } 
        else if(summ < 90000){
            setDiscont(5)
            // setWidth(789/100*(summ)/900);
            setWidth((258/100*(summ-50000)/400)+531);
        }
        else{
            setDiscont(7);
            setWidth(789);
        }
    }

    useEffect(() => {
        getWidthProgressBar();
    })

    return(
        <div className={style.profile}>
            <div className={style.profile__discont}>
                <h3>Ваша скидка — {discont}%</h3>

                <div className={style.discont__progressbar}>
                    <div className={style.discont__line}>
                        {/* <div className={style.discont__line2} style={{width: 787/100*(summ/900)}}></div> */}
                        <div className={style.discont__line2} style={{width: width}}>
                            <div></div>
                        </div>
                    </div>

                    <div className={style.discont__desc}>
                        <ul>
                            <li>Сумма заказов:</li>
                            <li className={discont > 2?style.discont__select:''}>
                                <div className={style.discont__rubej}></div>
                                От 10 000 руб. 
                                <br />
                                <span>3%</span>
                            </li>
                            <li className={discont > 4?style.discont__select:''}>
                                <div className={style.discont__rubej}></div>
                                От 50 000 руб. 
                                <br />
                                <span>5%</span>
                            </li>
                            <li className={discont > 6?style.discont__select:''}>
                                <div className={style.discont__rubej}></div>
                                От 90 000 руб. 
                                <br />
                                <span>7%</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <h4 className>Сумма заказов — <span>{summ} руб.</span></h4>
            </div>

            <div className={style.profile__information}>
                <button className={style.profile__editbtn} onClick={() => setEdit(!edit)}>Редактировать <img src={editImg} alt="" /></button>
                <h3>Информация обо мне</h3>

                <div className={style.information__list}>
                    <label>
                        <span>Имя и фамилия</span>
                        <input type="text" disabled={!edit} value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label>
                        <span>Моб. номер</span>
                        <IMaskInput
                            mask="+7 (000) 000-00-00"
                            placeholder="+_(___) ___-__-__"
                            unmask={true}
                            // onAccept={(value, mask) => setPhone(value)}
                            onChange={(e) => setPhone(e.target.value)} 
                            disabled={!edit}/>

                    </label>
                    <label>
                        <span>Город</span>
                        <input type="text" disabled={!edit} value={city} onChange={(e) => setCity(e.target.value)}/>
                    </label>
                    <label>
                        <span>Адрес</span>
                        <input type="text" disabled={!edit} value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </label>
                </div>

                {edit && 
                    <div className={style.profile__btns}>
                        <button>Отмена</button>
                        <button>Сохранить</button>
                    </div>
                }
            </div>
        </div>
    )
}