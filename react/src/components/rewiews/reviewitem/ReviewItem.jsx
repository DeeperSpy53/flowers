import style from './reviewitem.module.scss'
import starImg from '../../../assets/img/icons/star.svg'
import star2Img from '../../../assets/img/icons/star_yellow.svg'
import { useEffect, useState } from 'react'

export default function ReviewItem({name, date, city, review, grade}){
    let arr = [];
    const [gradeShow, setGradeShow] = useState([]);
    for(let i = 0; i < grade; i++){
        arr.push(<img src={star2Img}></img>)
    }

    if(grade < 5){
        for(let i = 0; i < 5-grade; i++){
            arr.push(<img src={starImg}></img>);
        } 
    }

    useEffect(() => {
        setGradeShow(arr);
    }, [])

    return(
        <div className={style.reviewitem}>
            <div className={style.reviewitem__grade}>
                {gradeShow}
            </div>
            <h3>{name}</h3>
            <div className={style.reviewitem__info}>
                <span>{date} &nbsp; &nbsp;</span>
                <p>{city}</p>
            </div>

            <span className={style.reviewitem__text}>{review}</span>
        </div>
    )
}