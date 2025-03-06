import style from './reviewspages.module.scss'

export default function ReviewsPages({page, setPage, setPrevPage}){
    return(
        <div className={style.reviews__pages}>
            <div className={`${style.reviews__page} 
                ${page===1?style.reviewsPage__sel:''}`} 
                onClick={() => {setPrevPage(page);setPage(page>3?page-2:1)}}>{page>3?page-2:1} </div>

            <div className={`${style.reviews__page} 
                ${page===2?style.reviewsPage__sel:''}`} 
                onClick={() => setPage(page>3?page-1:2)}>{page>3?page-1:2}</div>

            <div className={`${style.reviews__page} 
                ${page>=3?style.reviewsPage__sel:''}`} 
                onClick={() => {setPrevPage(page);setPage(page>3?page:3)}}>{page>3?page:3}</div>

            <div className={`${style.reviews__page}`} 
                onClick={() => {setPrevPage(page);setPage(page>3?page+1:4)}}>{page>3?page+1:4}</div>

            <div className={`${style.reviews__page}`} 
                onClick={() => {setPrevPage(page);setPage(page>3?page+2:5)}}>{page>3?page+2:5}</div>
        </div>
    )
}