import { useState } from 'react'
import Path from '../../components/path/Path'
import style from './reviews.module.scss'
import ReviewsText from '../../components/rewiews/reviewstext/ReviewsText'
import starImg from '../../assets/img/icons/star.svg'
import star2Img from '../../assets/img/icons/star_yellow.svg'
import ReviewsPhoto from '../../components/rewiews/reviewsphoto/ReviewsPhoto'

export default function ReviewsPage(){
    const [menu, setMenu] = useState(0)
    const [page, setPage] = useState(1)

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [city, setCity] = useState('')
    const [comment, setComment] = useState('')
    const [grade, setGrade] = useState()
    const [gradeMode, setGradeMode] = useState(true)

    function handleMouseOver(res) {
        if(gradeMode)
            setGrade(res)
    }

    function handleSubmit(e) {
        e.preventDefault();

        // if(comment.length < 50){
        //     return;
        // }
    }

    return(
        <div className={style.reviews}>
            <div className={style.reviews__wrapper}>
                <div className={style.reviews__menu}>
                    <h2>Отзывы</h2>

                    <ul>
                        <li className={menu===0?style.reviewsMenu__sel:''} onClick={() => setMenu(0)}>Тектовые отзывы</li>
                        <li className={menu===1?style.reviewsMenu__sel:''} onClick={() => setMenu(1)}>Фотоотзывы</li>
                    </ul>
                </div>

                <div className={style.reviews__block}>
                    <Path>Отзывы</Path>

                    {menu === 0 && <ReviewsText/> }
                    {menu === 1 && <ReviewsPhoto/> }

                    <div className={style.reviews__pages}>
                        <div className={`${style.reviews__page} ${page===1?style.reviewsPage__sel:''}`} onClick={() => setPage(1)}>1</div>
                        <div className={`${style.reviews__page} ${page===2?style.reviewsPage__sel:''}`} onClick={() => setPage(2)}>2</div>
                        <div className={`${style.reviews__page} ${page===3?style.reviewsPage__sel:''}`} onClick={() => setPage(3)}>3</div>
                        <div className={`${style.reviews__page} ${page===4?style.reviewsPage__sel:''}`} onClick={() => setPage(4)}>4</div>
                        <div className={`${style.reviews__page} ${page===5?style.reviewsPage__sel:''}`} onClick={() => setPage(5)}>5</div>
                    </div>

                    <form className={style.reviews__window} onSubmit={handleSubmit}>
                        <label>
                            <span>Имя и фамилия</span>
                            <input type="text" name="fio" id="" value={name} onChange={(e) => setName(e.target.value)}
                                    placeholder='Василий Петров' required/>
                        </label>
                        <label>
                            <span>Эл. почта</span>
                            <input type="email" name="fio" id="" value={mail} onChange={(e) => setMail(e.target.value)}
                                    placeholder='Эл. почта' required/>
                        </label>
                        <label>
                            <span>Город</span>
                            <input type="text" name="fio" id="" value={city} onChange={(e) => setCity(e.target.value)}
                                    placeholder='Владивосток' required/>
                        </label>

                        <textarea name="" id="" value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Ваш комментарий' required></textarea>

                        <div className={style.reviews__bottom}>
                            <div className={style.reviewWindow__grade}>
                                <span>Оцените нашу работу</span>

                                <div className={style.reviewWindow__start}>
                                    <img src={star2Img} alt="" onClick={() => setGradeMode(!gradeMode)} onMouseOver={() => handleMouseOver(1)}/>
                                    <img src={grade>1?star2Img:starImg} alt="" onClick={() => setGradeMode(!gradeMode)} onMouseOver={() => handleMouseOver(2)}/>
                                    <img src={grade>2?star2Img:starImg} alt="" onClick={() => setGradeMode(!gradeMode)} onMouseOver={() => handleMouseOver(3)}/>
                                    <img src={grade>3?star2Img:starImg} alt="" onClick={() => setGradeMode(!gradeMode)} onMouseOver={() => handleMouseOver(4)}/>
                                    <img src={grade>4?star2Img:starImg} alt="" onClick={() => setGradeMode(!gradeMode)} onMouseOver={() => handleMouseOver(5)}/>                       
                                </div>
                            </div>

                            <button type='submot'>Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}