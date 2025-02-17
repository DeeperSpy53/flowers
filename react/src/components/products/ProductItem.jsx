import style from './products.module.scss'

export default async function ProductItem({children}){
    const {img, name, price} = children;

    return(
        <div className={style.productItem}>
            <img src={require(`../../assets/img/products/` + img)} alt="" />
            <h3>{name}</h3>

            <p>Стоимость: от <span>{price}</span></p>

            <button>В корзину</button>
        </div>
    )
}