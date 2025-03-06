import ReviewItem from '../reviewitem/ReviewItem'
import { reviews } from '../../../reviews'
import style from './reviews.module.scss'
import ReviewsPages from '../reviewspages/ReviewsPages'
import { useEffect, useState } from 'react'

export default function ReviewsText(){
    const [prevPage, setPrevPage] = useState(1)
    const [page, setPage] = useState(1)
    let arr = [];
    const [items, setItems] = useState([]);
    
    if(reviews.length>=page*6-5)
    {
        for(let i = (page-1)*6; i < page*6; i++){
            if(reviews[i] == null)
                break;

            arr.push(<><ReviewItem {...reviews[i]} key={i}/> <hr/></>)
        }
    } else{
        setPage(prevPage);
    }

    useEffect(() => {
        setItems(arr);
    }, [page])

    return(
        <div className={style.reviewstext}>
            {items}
   
            <ReviewsPages page={page} setPage={setPage} setPrevPage={setPrevPage} key='miskafre'/>
        </div>
    )
}