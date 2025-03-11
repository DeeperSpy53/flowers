import { useState } from 'react'
import Path from '../../components/path/Path'
import style from './reviews.module.scss'
import ReviewsText from '../../components/rewiews/reviewstext/ReviewsText'
import starImg from '../../assets/img/icons/star.svg'
import star2Img from '../../assets/img/icons/star_yellow.svg'
import ReviewsPhoto from '../../components/rewiews/reviewsphoto/ReviewsPhoto'
import loadImg from '../../assets/img/icons/load.svg'
import { useParams } from 'react-router'

export default function ReviewsPage(){
    const {photo} = useParams();
    const [menu, setMenu] = useState(photo=='photo'?1:0)

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

                    <form className={style.reviews__window} onSubmit={handleSubmit}>
                        {menu === 1 &&  
                            <label>
                                <img src={loadImg} alt=""/>
                                <span>Загрузить изображение</span>
                                <input type='file' accept=".jpeg, .jpg, .png"/>
                            </label> 
                        }
                        <label>
                            <span>Имя и фамилия</span>
                            <input type="text" name="fio" id="" value={name} onChange={(e) => setName(e.target.value)}
                                    placeholder='Василий Петров' required/>
                        </label>
                        <label>
                            <span>Эл. почта</span>
                            <input type="text" name="fio" id="" value={mail} onChange={(e) => setMail(e.target.value)}
                                    placeholder='Эл. почта' required/>
                        </label>
                        {menu === 0 &&
                            <label>
                                <span>Город</span>
                                <input type="text" name="fio" id="" value={city} onChange={(e) => setCity(e.target.value)}
                                        placeholder='Владивосток' required/>
                            </label>
                        }

                        <textarea name="" id="" value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Ваш комментарий' required
                            style={{gridColumn: `span ${menu===0?3:2}`}}></textarea>

                        <div className={style.reviews__bottom}>
                            {menu === 0 &&                             
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
                            }

                            <button type='submit'>Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}