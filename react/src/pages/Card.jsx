import style from './card.module.scss'
import Path from '../components/path/Path'
import { useState } from 'react'
import SizeItem from '../components/card/size/SizeItem'
import cartImg from '../assets/img/icons/cart.svg'
import AddItem from '../components/card/add/AddItem'
import { additional } from '../additional'
import foliageLImg from '../assets/img/foliage_left_card.png'
import foliagePImg from '../assets/img/foliage_r_card.png'
import cardLeftImg from '../assets/img/card__left.png'
import { products } from '../products.js'
import { useParams } from 'react-router'
import Error404 from './404/404.jsx'

export default function Card(props) {
  const {id} = useParams()

  const prod = products[id];

  if(prod === undefined)
    return <Error404/>;
  
  const {name, img, fresh, price, compound} = prod;
  const [image, setImage] = useState(0)
  const [size, setSize] = useState(0)
  const [comp, setComp] = useState(0)
  const [count, setCount] = useState(0)
  const [summ, setSumm] = useState(0)
  const [page, setPage] = useState(1)
  
  const imgPath = `/products/` + img;

  return (
    <div className={style.card}>
      <Path>Карточка товара</Path>
      <img className={style.cardLeftImg} src={cardLeftImg} alt="" />
      <img className={style.foliageLImg} src={foliageLImg} alt="" />
      <img className={style.foliagePImg} src={foliagePImg} alt="" />

      <div className={style.card__wrapper}>
        <div className={style.card__images}>
          {fresh === 1 && 
            <div className={style.card__fresh}>
              Новинка
            </div>
          } 
          <img src={imgPath} alt="" className={style.cardImages__main}/>

          <div className={style.cardImages__list}>
            <img src={imgPath} alt="" onClick={() => setImage(0)} className={image != 0 ?style.cardImages__unselect:''}/>
            <img src={imgPath} alt="" onClick={() => setImage(1)} className={image != 1 ?style.cardImages__unselect:''}/>
            <img src={imgPath} alt="" onClick={() => setImage(2)} className={image != 2 ?style.cardImages__unselect:''}/>
            <img src={imgPath} alt="" onClick={() => setImage(3)} className={image != 3 ?style.cardImages__unselect:''}/>
            <img src={imgPath} alt="" onClick={() => setImage(4)} className={image != 4 ?style.cardImages__unselect:''}/>
          </div>
        </div>

        <div className={style.card__desc}>
          <h2>{name}</h2>

          <h3>Размер:</h3>
          <div className={style.cardDesc__size}>
            <SizeItem selected={size===0} name='Малый' price={price[0]} handleClick={() => setSize(0)}/>
            <SizeItem selected={size===1} name='Средний' price={price[1]} handleClick={() => setSize(1)}/>
            <SizeItem selected={size===2} name='Большой' price={price[2]} handleClick={() => setSize(2)}/>
          </div>

          <div className={style.cardDesc__compound}>
            <div className={style.cardDescComp__header}>
              <h4 className={comp===0?style.cardDescCompH__select:''} onClick={() => setComp(0)}>Состав</h4>
              <h4 className={comp===1?style.cardDescCompH__select:''} onClick={() => setComp(1)}>Доставка и оплата</h4>
            </div>

            <div className={style.cardDescComp__list}>
              { comp === 0 &&
                compound.map((c) => {
                  return(
                    <div className={style.cardDescComp__item}>
                      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#6AAE55" />
                      </svg>

                      <span>{c}</span>
                    </div>
                  )
                })
              }
              
              <div className={style.cardDescComp__blur}></div>
            </div>
          </div>
          <div className={style.cardDesc__res}>
              <div className={style.cardDescRes__btns}>
                <button onClick={() => {if(count != 1) setCount(count-1)}}></button>
                <span>{count} &nbsp;<p>шт.</p></span>
                <button onClick={() => setCount(count+1)}>
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 4.5H9M4.5 9L4.5 0" stroke="white" stroke-width="2" />
                  </svg>
                </button>
              </div>

              <div className={style.cardDescRes__summ}>
                <div className={style.cardDescResSumm__info}>
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

      <div className={style.card__dop}>
        <div className={style.cardDop__wrapper}>
          <h2><span>Дополнить</span> заказ</h2>

          <div className={style.cardDop__list}>
            {additional.map((add, index) => {
              if(index > 5)
                return;

                return <AddItem name={add.name} price={add.price} img={'/additional/' + add.img}/>
            })}
          </div>
        </div>

        <div className={style.cardDop__pages}>
          <button className={`${page===1?style.cardDopPage__sel:style.cardDopPage__unsel}`} onClick={() => setPage(1)}>1</button>
          <button className={`${page===2?style.cardDopPage__sel:style.cardDopPage__unsel}`} onClick={() => setPage(2)}>2</button>
          <button className={`${page===3?style.cardDopPage__sel:style.cardDopPage__unsel}`} onClick={() => setPage(3)}>3</button>
          <button className={`${page===4?style.cardDopPage__sel:style.cardDopPage__unsel}`} onClick={() => setPage(4)}>4</button>
          <button className={`${page===5?style.cardDopPage__sel:style.cardDopPage__unsel}`} onClick={() => setPage(5)}>5</button>
        </div>

        <button className={style.card__submit}>Оформить заказ</button>
      </div>
    </div>
  )
}