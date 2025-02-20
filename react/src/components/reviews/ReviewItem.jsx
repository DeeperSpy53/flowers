import style from './reviews.module.scss'

import starImg from '../../assets/img/icons/star.svg'
import star2Img from '../../assets/img/icons/star_yellow.svg'
import { useEffect, useState } from 'react'

export default function ReviewItem({name, date, city, grade, review}){
    const arr = [];
    const [showReview, setShowReview] = useState([])

    for(let i = 0; i < grade; i++){
        arr.push(<img src={star2Img}></img>)
    } 

    if(5-grade > 0){
        for(let i = 0; i < 5-grade; i++){
            arr.push(<img src={starImg}></img>)
        } 
    }

    useEffect(() => {
        setShowReview(arr);
    }, [])

    return(
        <div className={style.reviewItem}>
            <div className={style.reviewItem__img}>
                {showReview}
            </div>

            <h4>{name}</h4>
            <span className={style.reviewItem__info}>{date} &nbsp; &nbsp;<span>{city}</span></span>

            <p>{review}</p>
        </div>
    )
}