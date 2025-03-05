import ReviewItem from '../reviewitem/ReviewItem'
import { reviews } from '../../../reviews'
import style from './reviews.module.scss'

export default function ReviewsText(){

    return(
        <div className={style.reviewstext}>
            {reviews.map((r, i) => {
                if(r.grade != -1)
                {
                return (
                    <>
                        <ReviewItem {...r}/>
                        <hr />
                    </>)
                }
            })}
        </div>
    )
}