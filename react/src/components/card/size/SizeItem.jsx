import style from './size.module.scss'

export default function SizeItem({selected, name, price, handleClick}) {
  return (
    <div onClick={handleClick} className={`${style.sizeItem} ${selected==true?style.sizeItem__select:''}`}>
        <div className={style.sizeItem__title}>
            <h4>{name}</h4> 
            <span>{price} руб.</span>
        </div>
        
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#F2F2F2" />
            <circle cx="10" cy="10" r="7" fill="#E0E0E0" />
        </svg>
    </div>
  )
}