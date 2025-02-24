import Reviews from '../components/mainpage/reviews/Reviews.jsx'
import Remark from '../components/mainpage/remark/Remark.jsx'
import MainSlider from '../components/mainpage/mainslider/MainSlider.jsx'
import Advantages from '../components/mainpage/advantages/Advantages.jsx'
import Products from '../components/mainpage/products/Products'
import Steps from '../components/mainpage/steps/Steps.jsx'

export default function MainPage() {
  return (
    <>
      <MainSlider/>
      <Advantages/>
      <Products/>
      <Steps/>
      <Reviews/>
      <Remark/>
    </>
  )
}