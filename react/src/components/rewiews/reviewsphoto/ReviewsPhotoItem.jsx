import style from './reviewsphoto.module.scss'

export default function ReviewsPhotoItem({name, review}){
    return(
        <div className={style.reviewsphotoitem}>
            <h3>{name}</h3>
            <span>{review}</span>

            <button>
                Читать больше
                <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7.5H20M20 7.5L14 1.5M20 7.5L14 13.5" stroke="#6AAE55" stroke-width="2" />
                </svg>
            </button>
        </div>
    )
}