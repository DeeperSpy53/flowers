import style from './personalcab.module.scss'
import editImg from '../assets/img/icons/edit.svg'
import { useState } from 'react'
import Path from '../components/path/Path'
import Profile from '../components/personalcab/profile/Profile'
import ChangePass from '../components/personalcab/changepass/ChangePass'
import Orders from '../components/personalcab/orders/Orders'

export default function PersonalCab(){
    const [page, setPage] = useState(0)
    function getPage() {
        if(page === 0) return 'Профиль'
        else if(page === 1) return 'Мои заказы'
        else return 'Смена пароля'
    }

    return(
        <div className={style.personalcab}>
            <div className={style.personalcab__wrapper}>
                <div className={style.personalcab__menu}>
                    <h2>Личный кабинет</h2>

                    <nav>
                        <ul>
                            <li className={page==0?style.pesonalcabm__selected:''} onClick={() => setPage(0)}>Профиль <img src={editImg} alt="" /></li>
                            <li className={page==1?style.pesonalcabm__selected:''} onClick={() => setPage(1)}>Мои заказы</li>
                            <li className={page==2?style.pesonalcabm__selected:''} onClick={() => setPage(2)}>Смена пароля</li>
                        </ul>
                    </nav>
                </div>

                <div className={style.personalcab__block}>
                    <Path>Личный кабинет &nbsp; {'>'} &nbsp;{getPage()}</Path>

                    {page === 0 && <Profile/>}
                    {page === 1 && <Orders/>}
                    {page === 2 && <ChangePass/>}
                </div>
            </div>
        </div>
    )
}