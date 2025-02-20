import { useContext, useState } from 'react'
import style from './products.module.scss'
import ProductItem from './ProductItem';
import { FlowersContext } from '../../App';
import { products } from '../../products';

export default function Products(){
    const [sort, setSort] = useState(0);
    const [limit, setLimit] = useState(8);
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
                        { products.map((product, index) => {
                            if(index > limit)
                                return;

                            return <ProductItem>{product}</ProductItem>
                        }) }
                    </div>
                    { products.length > limit &&
                        <div className={style.products__wrapperbtn}>
                            <button className={style.products__more} onClick={() => setLimit(limit+8)}>Показать еще</button>
                        </div>
                    }
                </div>

                <div className={style.products__search}>
                    <div className={style.productsSearch__field}>
                        <input type="text" placeholder='Поиск' value={search} onChange={(e) => setSearch(e.target.value)}/>
                    </div>
                    <hr className={style.productSearch__hr1}/>

                    <div className={`${style.productsSearch__prices} ${style.productsSearch__labels}`}>
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
                    <hr className={style.productSearch__hr2}/>

                    <div className={`${style.productsSearch__bouquet} ${style.productsSearch__labels}`}>
                        <h4>Букет с ...</h4>

                        <label>
                            <input type="radio" name='bouquet' id='bouquet1'/>
                            Розами
                        </label>

                        <label>
                            <input type="radio" name='bouquet' id='bouquet2'/>
                            Тюльпанами
                        </label>

                        <label>
                            <input type="radio" name='bouquet' id='bouquet3'/>
                            Гортензиями
                        </label>

                        <label>
                            <input type="radio" name='bouquet' id='bouquet4'/>
                            Подсолнухами
                        </label> 

                        <label>
                            <input type="radio" name='bouquet' id='bouquet5'/>
                            Орхидеями
                        </label> 

                        <label>
                            <input type="radio" name='bouquet' id='bouquet6'/>
                            Ирисами
                        </label> 

                        <label>
                            <input type="radio" name='bouquet' id='bouquet7'/>
                            Лилиями
                        </label> 

                        <label>
                            <input type="radio" name='bouquet' id='bouquet7'/>
                            Герберами
                        </label> 

                        <button>Показать еще</button>
                    </div>
                    <hr className={style.productSearch__hr3}/>

                    <div className={`${style.productsSearch__package} ${style.productsSearch__labels}`}>
                        <h4>Цветы упаковано:</h4>
                        <label>
                            <input type="radio" name='package' id='package1'/>
                            Букетом
                        </label>

                        <label>
                            <input type="radio" name='package' id='package2'/>
                            В корзине
                        </label>

                        <label>
                            <input type="radio" name='package' id='package3'/>
                            В коробке
                        </label>
                    </div>
                    <hr className={style.productSearch__hr4}/>

                    <div className={`${style.productsSearch__gamma} ${style.productsSearch__labels}`}>
                        <h4>Цветовая гамма:</h4>
                        <label>
                            <input type="radio" name='gamma' id='gamma1'/>
                            Белая
                        </label>

                        <label>
                            <input type="radio" name='gamma' id='gamma2'/>
                            Розовая
                        </label>

                        <label>
                            <input type="radio" name='gamma' id='gamma3'/>
                            Красная
                        </label>

                        <label>
                            <input type="radio" name='gamma' id='gamma4'/>
                            Желтая
                        </label>

                        <label>
                            <input type="radio" name='gamma' id='gamma5'/>
                            Оранжевая
                        </label>

                        <label>
                            <input type="radio" name='gamma' id='gamma6'/>
                            Бордовая
                        </label>

                        <label>
                            <input type="radio" name='gamma' id='gamma7'/>
                            Синяя
                        </label>

                        <label>
                            <input type="radio" name='gamma' id='gamma8'/>
                            Фиолетовая
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}