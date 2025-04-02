import style from './login.module.scss'
import fonImg from '../../assets/img/fon-login.jpg'
import { useState } from 'react'
import { IMaskInput } from 'react-imask';
import api from '../../api.config'

export default function Login(){
    const [isLogin, setIsLogin] = useState(true);

    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();

    //reg
    const [passwordRepeat, setPasswordRepeat] = useState();
    const [name, setName] = useState();

    function handleSubmit(e) {
        e.preventDefault();

        if(isLogin){
            api.post('/login', {phone, password}).then((res) => {
                console.log(res.data);
            });
        } else{
            api.post('/reg', {phone, password, name}).then((res) => {
                console.log(res);
            });
        }
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
                        {!isLogin && 
                            <>
                                <label>
                                    <span>Имя и фамилия</span>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} minLength='10' required/>
                                </label>      
                            </>
                        }
                        <label>
                            <span>Телефон</span>
                            <IMaskInput mask="+7 (000) 000-00-00"
                                        placeholder='+_(___) ___-__-__'
                                        onChange={(e) => setPhone(e.target.value)}
                                        minLength='15'
                                        required/>
                        </label>

                        <label>
                            <span>Пароль</span>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength='8' required/>
                        </label>

                        {!isLogin && 
                            <>
                                <label>
                                    <span>Повторите пароль</span>
                                    <input type="password" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)} minLength='8' required/>
                                </label>      
                            </>
                        }

                        <button type='submit'>Войти</button>
                    </div>
                </form>
            </div>
        </div>
    )
}