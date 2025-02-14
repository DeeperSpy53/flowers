import { useState } from 'react'
import Header from './components/header/Header'
import MainSlider from './components/mainslider/MainSlider'
import Advantages from './components/advantages/Advantages'
import Products from './components/products/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MainSlider/>
      <Advantages/>
      <Products/>
    </>
  )
}

export default App