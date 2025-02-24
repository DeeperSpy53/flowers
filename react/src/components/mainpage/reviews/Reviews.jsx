import style from './reviews.module.scss'
import img1 from '../../../assets/img/reviews_photo/1.jpg'
import img2 from '../../../assets/img/reviews_photo/2.jpg'
import img3 from '../../../assets/img/reviews_photo/3.jpg'
import img4 from '../../../assets/img/reviews_photo/4.jpg'

import {reviews} from '../../../reviews.js'
import ReviewItem from './ReviewItem.jsx'

export default function Reviews(){
    return(
        <div className={style.reviews__wrapper}>
            <div className={style.reviews}>
                <div className={style.reviews__photo}>
                    <div className={`${style.reviewsPhoto__header} ${style.reviews__headers}`}>
                        <h2><span>Фото</span>хвасты</h2>
                        <a href="#">Больше фото</a>
                    </div>

                    <div className={style.reviewsPhoto__list}>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>
                </div>

                <div className={style.reviews__list}>
                    <div className={`${style.reviewsList__header} ${style.reviews__headers}`}>
                        <h2>Отзывы</h2>
                        <a href="#">Смотреть все</a>
                    </div>

                    <div className={style.reviewsList__content}>
                            <ReviewItem {...reviews[0]} />
                            <hr />
                            <ReviewItem {...reviews[1]} />
                            <hr />
                            <ReviewItem {...reviews[2]} />
                    </div>
                </div>
            </div>
        </div>
    )
}