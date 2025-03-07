import { useRef, useState } from 'react'
import style from './question.module.scss'

export default function QuestionItem({question, answer}){
    const [show, setShow] = useState(false);
    const showCircle = 'M14.866 19.5C14.4811 20.1667 13.5189 20.1667 13.134 19.5L8.80385 12C8.41895 11.3333 8.90007 10.5 9.66987 10.5L18.3301 10.5C19.0999 10.5 19.5811 11.3333 19.1962 12L14.866 19.5Z';
    const unShowCircle = 'M19.5 13.134C20.1667 13.5189 20.1667 14.4811 19.5 14.866L12 19.1962C11.3333 19.5811 10.5 19.0999 10.5 18.3301L10.5 9.66987C10.5 8.90007 11.3333 8.41895 12 8.80385L19.5 13.134Z';

    const spanRef = useRef();

    function handleClick() {
        if(show){
            spanRef.current.className = style.questionitem__close;
            setTimeout(() => setShow(false), 300)
        } else{
            setShow(true);
            // spanRef.current.className = style.questionitem__open;
        }
    }

    return(
        <div className={style.questionitem}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleClick}>
                <circle opacity="0.3" cx="14" cy="14" r="14" transform={`${show?'':'rotate(-90 14 14)'}`} fill="#BDBDBD" />
                <path d={`${show?showCircle:unShowCircle}`} fill="#6AAE55" />
            </svg>
            <h2  onClick={handleClick}>{question}</h2>
            {show && 
                <>
                    <hr />
                    <span ref={spanRef} className={style.questionitem__open}>{answer}</span>
                </>
            }
        </div>
    )
}