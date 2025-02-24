import { createContext, useState } from 'react'
import Header from './components/header/Header'
import { products } from './products.js'
import Footer from './components/footer/Footer.jsx'
import MainPage from './pages/MainPage.jsx'
import Cart from './pages/Cart.jsx'

export const FlowersContext = createContext();

function App() {
  const [flowers, setFlowers] = useState(products)

  return (
    <FlowersContext.Provider value={{flowers, setFlowers}}>
      <Header/>
      {/* <MainPage /> */}
      <Cart {...products[0]}/>
      <Footer/>
    </FlowersContext.Provider>
  )
}

export default App