import style from './login.module.scss'
import fonImg from '../../assets/img/fon-login.jpg'
import { useState } from 'react'
import { IMaskInput } from 'react-imask';

export default function Login(){
    const [isLogin, setIsLogin] = useState(true);

    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();

    //reg
    const [passwordRepeat, setPasswordRepeat] = useState();
    const [name, setName] = useState();

    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <div className={style.login}>
            <div className={style.login__wrapper}>
                <img src={fonImg} alt="" />

                <form onSubmit={handleSubmit}>
                    <div className={style.form__header}>
                        <div className={isLogin?style.form__sel:''} onClick={() => setIsLogin(true)}>Войти</div>
                        <div className={!isLogin?style.form__sel:''} onClick={() => setIsLogin(false)}><hr/>Зарегистрироваться</div>
                    </div>
                    <hr className={style.form__hr}/>

                    <div className={style.form__body}>
                        <label>
                            <span>Телефон</span>
                            <IMaskInput mask="+7 (000) 000-00-00"
                                        placeholder='+_(___) ___-__-__'
                                        onChange={(e) => setPhone(e.target.value)}/>
                        </label>

                        <label>
                            <span>Пароль</span>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </label>

                        <button type='submit'>Войти</button>
                    </div>
                </form>
            </div>
        </div>
    )
}