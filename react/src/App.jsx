import { useState } from 'react'
import Header from './components/header/Header'
import MainSlider from './components/mainslider/MainSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MainSlider/>
    </>
  )
}

export default App