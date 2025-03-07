import { useState } from 'react'
import Path from '../../components/path/Path'
import QuestionItem from '../../components/questions/QuestionItem'
import style from './questions.module.scss'

export default function Questions(){
    const [name, setName] = useState()
    const [mail, setMail] = useState()
    const [comment, setComment] = useState()

    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <div className={style.questions}>
            <Path>Вопрос ответ</Path>
            <div className={style.questions__wrapper}>
                <h1>Ответы на популярные вопросы</h1>

                <div className={style.questions__list}>
                    <QuestionItem question='Какую страну считают родиной розы?' answer='Ро́за — собирательное название видов и сортов представителей рода Шиповник (лат. Rósa), выращиваемых человеком. Большая часть сортов роз получена в результате длительной селекции путём многократных повторных скрещиваний и отбора.'/>

                    <QuestionItem question='Какой цветок называют божественным цветком, «цветком Зевса»?' answer='Ро́за — собирательное название видов и сортов представителей рода Шиповник (лат. Rósa), выращиваемых человеком. Большая часть сортов роз получена в результате длительной селекции путём многократных повторных скрещиваний и отбора.'/>

                    <QuestionItem question='Какое символическое значение розы?' answer='Ро́за — собирательное название видов и сортов представителей рода Шиповник (лат. Rósa), выращиваемых человеком. Большая часть сортов роз получена в результате длительной селекции путём многократных повторных скрещиваний и отбора.'/>

                    <QuestionItem question='Актуальны ли цены и наличие на вашем сайте?' answer='Ро́за — собирательное название видов и сортов представителей рода Шиповник (лат. Rósa), выращиваемых человеком. Большая часть сортов роз получена в результате длительной селекции путём многократных повторных скрещиваний и отбора.'/>
                    
                    <QuestionItem question='Вы отправляете товары наложенным платежом?' answer='Ро́за — собирательное название видов и сортов представителей рода Шиповник (лат. Rósa), выращиваемых человеком. Большая часть сортов роз получена в результате длительной селекции путём многократных повторных скрещиваний и отбора.'/>
                    
                    <QuestionItem question='Где гарантия того, что вы не мошенники, и если я внесу предоплату, то затем получу оплаченный товар?' answer='Ро́за — собирательное название видов и сортов представителей рода Шиповник (лат. Rósa), выращиваемых человеком. Большая часть сортов роз получена в результате длительной селекции путём многократных повторных скрещиваний и отбора.'/>
                    
                    <QuestionItem question='Вы работаете с оптовыми покупателями? Какие условия/скидки?' answer='Ро́за — собирательное название видов и сортов представителей рода Шиповник (лат. Rósa), выращиваемых человеком. Большая часть сортов роз получена в результате длительной селекции путём многократных повторных скрещиваний и отбора.'/>
                </div>

                <form className={style.questions__form} onSubmit={handleSubmit}>
                    <div className={style.form__block}>
                        <div className={style.form__wrapper}>
                            <label>
                                <span>Имя и фамилия</span>
                                <input type="text" placeholder='Василий Петров' value={name} onChange={(e) => setName(e.target.value)}/>
                            </label>
                            <label>
                                <span>Эл. почта</span>
                                <input type="text" placeholder='example@mail.com'  value={mail} onChange={(e) => setMail(e.target.value)}/>
                            </label>
                        </div>

                        <textarea placeholder='Ваш комментарий' value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    </div>

                    <button type='submit'>Отправить</button>
                </form>
            </div>
        </div>
    )
}