import style from './reviewsphoto.module.scss'
import { reviewsPhoto } from '../../../reviews'
import ReviewsPhotoItem from './ReviewsPhotoItem'
import ReviewsPages from '../reviewspages/ReviewsPages'
import { useEffect, useState } from 'react'

export default function ReviewsPhoto(){
    const [page, setPage] = useState(1)
    const [pagePrev, setPrevPage] = useState(1)
    const [items, setItems] = useState([])
    let arr = [];

    if(reviewsPhoto.length >= page*10-9){
        for(let i = (page-1)*10; i < page*10; i++){
            if(reviewsPhoto[i] == null)
                break;
    
            if(reviewsPhoto[i].grade !== -1)
                continue;
    
            if(reviewsPhoto[i].review.length > 0){
                arr.push(<ReviewsPhotoItem {...reviewsPhoto[i]}/>)
            }
            else{
                arr.push(<img src={reviewsPhoto[i].img} alt="" />)
            }
        }
    }else{
        setPage(pagePrev);
    }

    useEffect(() => {
        setItems(arr);
    }, [page])

    return(
        <>
            <div className={style.reviewsphoto}>
                {items}
            </div>
            <ReviewsPages page={page} setPage={setPage} setPrevPage={setPrevPage} key='miskafre2'/>
        </>
    )
}