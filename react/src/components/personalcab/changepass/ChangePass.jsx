import { useState } from 'react'
import style from './changepass.module.scss'

export default function ChangePass(){
    const [curPass, setCurPass] = useState()
    const [newPass, setNewPass] = useState()
    const [newRepPass, setNewRepPass] = useState()

    return(
        <div className={style.changepass}>
            <h3>Смена пароля</h3>

            <label>
                <span>Текущий пароль</span>
                <input type="password" value={curPass} onChange={(e) => setCurPass(e.target.value)}/>
            </label>
            <label>
                <span>Новый пароль</span>
                <input type="password" value={newPass} onChange={(e) => setNewPass(e.target.value)}/>
            </label>
            <label>
                <span>Повторите <p>новый</p> пароль</span>
                <input type="password" value={newRepPass} onChange={(e) => setNewRepPass(e.target.value)}/>
            </label>

            <div className={style.changepass__btns}>
                <button>Отмена</button>
                <button>Сохранить</button>
            </div>
        </div>
    )
}