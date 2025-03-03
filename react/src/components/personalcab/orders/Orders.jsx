import OrderItem from './OrderItem'
import style from './orders.module.scss'
import { orders } from '../../../orders'

export default function Orders(){
    return(
        <div className={style.orders}>
            <OrderItem {...orders[0]}/>
            <hr className={style.orders__hr}/>
            <OrderItem {...orders[0]}/>
        </div>
    )
}