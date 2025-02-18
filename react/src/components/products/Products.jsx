import { useContext, useState } from 'react'
import style from './products.module.scss'
import ProductItem from './ProductItem';
import { FlowersContext } from '../../App';
import { products } from '../../products';
import searchImg from '../../assets/img/icons/search.svg'

export default function Products(){
    const [sort, setSort] = useState(0);
    const [search, setSearch] = useState('');
    const {flowers, setFlowers} = useContext(FlowersContext);

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
                        { products.map((product) => {
                            return <ProductItem>{product}</ProductItem>
                        }) }
                    </div>
                </div>

                <div className={style.products__search}>
                    <div className={style.productsSearch__field}>
                        {/* <img src={searchImg} alt="" /> */}
                        <input type="text" placeholder='Поиск' value={search} onChange={(e) => setSearch(e.target.value)}/>
                    </div>

                    <hr />

                    <div className={style.productsSearch__prices}>
                        <h4>Стоимость:</h4>
                        <label>
                            <input type="radio" name='price' id='price1'/>
                            до 2500 руб.
                        </label>

                        <label>
                            <input type="radio" name='price' id='price2'/>
                            2500 - 4000 руб.
                        </label>

                        <label>
                            <input type="radio" name='price' id='price3'/>
                            4000 - 6000 руб.
                        </label>

                        <label>
                            <input type="radio" name='price' id='price4'/>
                            от 6000 руб.
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}