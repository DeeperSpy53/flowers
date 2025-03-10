import { createContext, useState } from 'react'
import Header from './components/header/Header'
import { products } from './products.js'
import Footer from './components/footer/Footer.jsx'
import MainPage from './pages/MainPage.jsx'
import Card from './pages/Card.jsx'
import Cart from './pages/Cart.jsx'
import PersonalCab from './pages/PersonalCab.jsx'
import ReviewsPage from './pages/reviews/ReviewsPage.jsx'
import ContactInfo from './pages/contactinfo/ContactInfo.jsx'
import Questions from './pages/questions/Questions.jsx'
import Stock from './pages/stock/Stock.jsx'
import Error404 from './pages/404/404.jsx'
import Login from './pages/login/Login.jsx'

export const FlowersContext = createContext();

function App() {
  const [flowers, setFlowers] = useState(products)

  return (
    <FlowersContext.Provider value={{flowers, setFlowers}}>
      <Header/>
      {/* <MainPage /> */}
      {/* <Card {...products[0]}/> */}
      {/* <Cart/> */}
      {/* <PersonalCab/> */}
      {/* <ReviewsPage/> */}
      {/* <ContactInfo/> */}
      {/* <Questions/> */}
      {/* <Stock/> */}
      {/* <Error404/> */}
      <Login/>
      <Footer/>
    </FlowersContext.Provider>
  )
}

export default App