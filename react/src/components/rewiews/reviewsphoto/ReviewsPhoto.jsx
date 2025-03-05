import style from './reviewsphoto.module.scss'
import { reviews } from '../../../reviews'
import ReviewsPhotoItem from './ReviewsPhotoItem'

export default function ReviewsPhoto(){
    return(
        <div className={style.reviewsphoto}>
            {reviews.map((r) => {
                if(r.grade === -1){
                    if(r.review.length > 0){
                        return <ReviewsPhotoItem {...r}/>
                    }
                    else{
                        return <img src={r.img} alt="" />
                    }
                }
            })}
        </div>
    )
}