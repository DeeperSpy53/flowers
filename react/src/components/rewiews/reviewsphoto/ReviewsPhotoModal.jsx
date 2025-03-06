import style from './reviewsphoto.module.scss'

export default function ReviewsPhotoModal({name, review, img, handleClose}){
    return(
        <div className={style.reviewsmodal}>
            <div className={style.reviewsmodal__wrapper}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleClose()}>
                    <path d="M1.30607 1.3033L11.9127 11.9099M1.30607 11.9099L11.9127 1.3033" stroke="#BDBDBD" stroke-width="3" />
                </svg>

                <h3>{name}</h3>
                <img src={img} alt="" />
                <span>{review}</span>
            </div>
        </div>
    )
}