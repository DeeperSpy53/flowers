import { createContext, useState } from 'react'
import Header from './components/header/Header'
import MainSlider from './components/mainslider/MainSlider'
import Advantages from './components/advantages/Advantages'
import Products from './components/products/Products'
import Steps from './components/steps/Steps'
import { products } from './products.js'
import Reviews from './components/reviews/Reviews.jsx'
import Remark from './components/remark/Remark.jsx'
import Footer from './components/footer/Footer.jsx'

export const FlowersContext = createContext();

function App() {
  const [flowers, setFlowers] = useState(products)

  return (
    <FlowersContext.Provider value={{flowers, setFlowers}}>
      <Header/>
      <MainSlider/>
      <Advantages/>
      <Products/>
      <Steps/>
      <Reviews/>
      <Remark/>
      <Footer/>
    </FlowersContext.Provider>
  )
}

export default App