import { useState } from 'react'
import style from './products.module.scss'
import ProductItem from './ProductItem';

export default function Products(){
    const [sort, setSort] = useState(0);

    function handleSetSort(value) {
        setSort(value);
    }

    return(
        <div className={style.products}>
            <div className={style.products__wrapper}>
                <div className={style.products__block}>
                    <div className={style.products__sort}>

                        <ul>
                            <li>Сортировать по:</li>
                            <li className={sort===0?style.prodsort_selected:''} onClick={() => handleSetSort(0)}>Новизне</li>
                            <li className={sort===1?style.prodsort_selected:''} onClick={() => handleSetSort(1)}>Цена по возростанию</li>
                            <li className={sort===2?style.prodsort_selected:''} onClick={() => handleSetSort(2)}>Цена по убыванию</li>
                            <li className={sort===3?style.prodsort_selected:''} onClick={() => handleSetSort(3)}>Популярности</li>
                        </ul>
                    </div>

                    <div className={style.products__list}>

                    </div>
                </div>

                <div className={style.products__search}>

                </div>
            </div>
        </div>
    )
}