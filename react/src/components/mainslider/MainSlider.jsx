import style from './mainslider.module.scss'
// import fonImg from '../../assets/img/fon1.jpg'
import Button from '../button/Button'
import ellipseImg from '../../assets/img/icons/ellipse.svg'
import ellipseFulledImg from '../../assets/img/icons/ellipse_fulled.svg'
import { useState } from 'react'

export default function MainSlider(){
    const [sliderPage, setSliderPage] = useState(0);

    return(
        <>
            <div className={style.mainslider}>
                <div className={style.mainslider__wrapper} style={{right: 100*sliderPage+'vw'}}>
                    <div className={style.mainslider__block1}>
                        <h1>доставка <span>цветов в городе
                                <p>Владивосток</p></span>
                        </h1>
                        <Button>Каталог</Button>
                    </div>

                    <div className={style.mainslider__block2}>
                        <h1>
                                <p><span>Пример</span> текста</p> <br />
                                Для <span>будущего</span> баннера
                        </h1>

                        <p className={style.msblock2__desc}>По своей сути рыбатекст является альтернативой <br /> традиционному lorem ipsum, который вызывает.</p>
                        <button>Кнокпка</button>
                    </div>

                    <div className={style.mainslider__block3}>
                        <div className={style.msblock3__wrapper}>
                        <h1>
                                <p><span>Пример</span> текста</p> <br />
                                Для бокового <span>будущего</span> баннера
                        </h1>

                        <p className={style.msblock3__desc}>По своей сути рыбатекст является альтернативой <br /> традиционному lorem ipsum, который вызывает.</p>
                        <button>Кнокпка</button>
                        </div>
                    </div>
                </div>

                <div className={style.mainslider__main}>
                    <img src={sliderPage == 0 ? ellipseFulledImg:ellipseImg} alt="" onClick={() => setSliderPage(0)}/>
                    <img src={sliderPage == 1 ? ellipseFulledImg:ellipseImg} alt="" onClick={() => setSliderPage(1)}/>
                    <img src={sliderPage == 2 ? ellipseFulledImg:ellipseImg} alt="" onClick={() => setSliderPage(2)}/>
                    <img src={sliderPage == 3 ? ellipseFulledImg:ellipseImg} alt="" onClick={() => setSliderPage(3)}/>
                    <img src={sliderPage == 4 ? ellipseFulledImg:ellipseImg} alt="" onClick={() => setSliderPage(4)}/>
                </div>
            </div>
        </>
    )
}