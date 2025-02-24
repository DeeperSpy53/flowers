import { useState } from 'react'
import style from './add.module.scss'

export default function AddItem({name, price, img, handleClick}) {
  const [count, setCount] = useState(1)
  const [added, setAdded] = useState(false)

  return (
    <div className={style.additem} onClick={handleClick}>
        <img src={img} alt="" />
        <div className={style.addItem__block}>
          <h3>{name}</h3>
          <span className={style.addItem__price}>{price} &nbsp;<p>руб.</p></span>

          <div className={style.addItem__btns}>
              <button onClick={() => setCount(count-1)}></button>
              <span>{count} &nbsp;<p>шт.</p></span>
              <button onClick={() => setCount(count+1)}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 4.5H9M4.5 9L4.5 0" stroke="white" stroke-width="2" />
                </svg>
              </button>
          </div>

          <button className={`${style.addItem__btn} ${added==true?style.addItemBtn__added:''}`} onClick={() => setAdded(!added)}>{added==false?'Добавить':'Добавлено'}</button>
        </div>
    </div>
  )
}