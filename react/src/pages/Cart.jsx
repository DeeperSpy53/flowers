import style from './cart.module.scss'
import Path from '../components/path/Path'
import { useState } from 'react'
import SizeItem from '../components/cart/size/SizeItem'
import cartImg from '../assets/img/icons/cart.svg'
import AddItem from '../components/cart/add/AddItem'
import { additional } from '../additional'
import foliageLImg from '../assets/img/foliage_left_cart.png'
import foliagePImg from '../assets/img/foliage_r_cart.png'
import cartLeftImg from '../assets/img/cart__left.png'


export default function Cart({name, img, fresh, price, compound}) {
  const [image, setImage] = useState(0)
  const [size, setSize] = useState(0)
  const [comp, setComp] = useState(0)
  const [count, setCount] = useState(0)
  const [summ, setSumm] = useState(0)
  const [page, setPage] = useState(1)
  
  const imgPath = `/products/` + img;

  return (
    <div className={style.cart}>
      <Path>Карточка товара</Path>
      <img className={style.cartLeftImg} src={cartLeftImg} alt="" />
      <img className={style.foliageLImg} src={foliageLImg} alt="" />
      <img className={style.foliagePImg} src={foliagePImg} alt="" />

      <div className={style.cart__wrapper}>
        <div className={style.cart__images}>
          {fresh === 1 && 
            <div className={style.cart__fresh}>
              Новинка
            </div>
          } 
          <img src={imgPath} alt="" className={style.cartImages__main}/>

          <div className={style.cartImages__list}>
            <img src={imgPath} alt="" onClick={() => setImage(0)} className={image != 0 ?style.cartImages__unselect:''}/>
            <img src={imgPath} alt="" onClick={() => setImage(1)} className={image != 1 ?style.cartImages__unselect:''}/>
            <img src={imgPath} alt="" onClick={() => setImage(2)} className={image != 2 ?style.cartImages__unselect:''}/>
            <img src={imgPath} alt="" onClick={() => setImage(3)} className={image != 3 ?style.cartImages__unselect:''}/>
            <img src={imgPath} alt="" onClick={() => setImage(4)} className={image != 4 ?style.cartImages__unselect:''}/>
          </div>
        </div>

        <div className={style.cart__desc}>
          <h2>{name}</h2>

          <h3>Размер:</h3>
          <div className={style.cartDesc__size}>
            <SizeItem selected={size===0} name='Малый' price={price[0]} handleClick={() => setSize(0)}/>
            <SizeItem selected={size===1} name='Средний' price={price[1]} handleClick={() => setSize(1)}/>
            <SizeItem selected={size===2} name='Большой' price={price[2]} handleClick={() => setSize(2)}/>
          </div>

          <div className={style.cartDesc__compound}>
            <div className={style.cartDescComp__header}>
              <h4 className={comp===0?style.cartDescCompH__select:''} onClick={() => setComp(0)}>Состав</h4>
              <h4 className={comp===1?style.cartDescCompH__select:''} onClick={() => setComp(1)}>Доставка и оплата</h4>
            </div>

            <div className={style.cartDescComp__list}>
              { comp === 0 &&
                compound.map((c) => {
                  return(
                    <div className={style.cartDescComp__item}>
                      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#6AAE55" />
                      </svg>

                      <span>{c}</span>
                    </div>
                  )
                })
              }
              
              <div className={style.cartDescComp__blur}></div>
            </div>
          </div>
          <div className={style.cartDesc__res}>
              <div className={style.cartDescRes__btns}>
                <button onClick={() => {if(count != 1) setCount(count-1)}}></button>
                <span>{count} &nbsp;<p>шт.</p></span>
                <button onClick={() => setCount(count+1)}>
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 4.5H9M4.5 9L4.5 0" stroke="white" stroke-width="2" />
                  </svg>
                </button>
              </div>

              <div className={style.cartDescRes__summ}>
                <div className={style.cartDescResSumm__info}>
                  <h4>Сумма:</h4>
                  <span>{summ} руб.</span>
                </div>

                <button>
                  <img src={cartImg} alt="" />
                  В корзину
                </button>
              </div>
            </div>
        </div>
      </div>

      <div className={style.cart__dop}>
        <div className={style.cartDop__wrapper}>
          <h2><span>Дополнить</span> заказ</h2>

          <div className={style.cartDop__list}>
            {additional.map((add, index) => {
              if(index > 5)
                return;

                return <AddItem name={add.name} price={add.price} img={'/additional/' + add.img}/>
            })}
          </div>
        </div>

        <div className={style.cartDop__pages}>
          <button className={`${page===1?style.cartDopPage__sel:style.cartDopPage__unsel}`} onClick={() => setPage(1)}>1</button>
          <button className={`${page===2?style.cartDopPage__sel:style.cartDopPage__unsel}`} onClick={() => setPage(2)}>2</button>
          <button className={`${page===3?style.cartDopPage__sel:style.cartDopPage__unsel}`} onClick={() => setPage(3)}>3</button>
          <button className={`${page===4?style.cartDopPage__sel:style.cartDopPage__unsel}`} onClick={() => setPage(4)}>4</button>
          <button className={`${page===5?style.cartDopPage__sel:style.cartDopPage__unsel}`} onClick={() => setPage(5)}>5</button>
        </div>

        <button className={style.cart__submit}>Оформить заказ</button>
      </div>
    </div>
  )
}