import style from './products.module.scss'

export default function ProductItem({children}){
    const {img, name, price, fresh, discont, action} = children;

    return(
        <div className={style.productItem}>
            {fresh > 0 &&
                <div className={style.productItem__fresh}>Новинка</div>
            }
            { action > 0 &&
                <div className={style.productItem__action}>Акция</div>
            }

            <img src={`/products/` + img} alt="image not found"  />
            <h3>{name}</h3>
            <p>Стоимость: &nbsp;&nbsp;
                <span className={style.productItem__price}>от <span>{price[0]} руб.</span>
                </span>
            </p>

            <button>В корзину</button>
        </div>
    )
}