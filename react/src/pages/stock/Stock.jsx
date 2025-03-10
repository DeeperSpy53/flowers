import Path from '../../components/path/Path'
import StockItem from '../../components/stock/StockItem'
import style from './stock.module.scss'
import { stock } from '../../stock'

export default function Stock(){
    return(
        <div className={style.stock}>
            <Path>Акции</Path>

            <div className={style.stock__wrapper}>
                <h1>Акции</h1>

                <div className={style.stock__list}>
                    {stock.map((s) => {
                        return <StockItem {...s}/>
                    })}
                </div>
            </div>
        </div>
    )
}