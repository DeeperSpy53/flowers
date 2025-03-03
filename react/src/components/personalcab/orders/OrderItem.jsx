import style from './orders.module.scss'

export default function OrderItem({date, order, products, summ, status}){
    function getStatus() {
        if(status === 0){
            return <p className={style.orderitem__delivered}>Доставлено</p>
        } 
        else if(status === 1){
            return <p className={style.orderitem__payed}>Оплачен</p>
        } 
        else if(status === 2){
            return <p className={style.orderitem__proccess}>В обработке</p>
        } 
    }
    return(
        <div className={style.orderitem}>
            <div className={style.orderitem__maininfo}>
                <div>
                    <h4>Дата заказа</h4>
                    <span>{date}</span>
                </div>

                <div>
                    <h4>Номер заказа</h4>
                    <span>{order}</span>
                </div>
            </div>

            <div className={style.orderitem__products}>
                <h4>Наименование</h4>
                {products.map((p, i) => {
                    return( 
                    <div className={style.orderitem__prod}>
                        <span>{p.name}</span>
                        <hr className={style.oiprod__hr}/>
                        <span>x{p.count} &nbsp;{p.price}руб.</span>

                        {products.length > i+1 && <hr className={style.oiprod__hr2}/>}
                    </div>)
                })}
            </div>

            <div className={style.orderitem__summ}>
                <h4>Сумма</h4>
                <p>{summ}руб.</p>
            </div>

            <div className={style.orderitem__status}>
                <h4>Статус</h4>
                {getStatus()}
            </div>
        </div>
    )
}