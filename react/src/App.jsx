import { createContext, useState } from 'react'
import {Routes, Route, BrowserRouter} from 'react-router'

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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/card' element={<Card />}>
            <Route path=":id" element={<Card />} />
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/lk' element={<PersonalCab/>}/>
          <Route path='/reviews' element={<ReviewsPage/>}>
            <Route path=":photo" element={<Card />} />
          </Route>
          <Route path='/contacts' element={<ContactInfo/>}/>
          <Route path='/questions' element={<Questions/>}/>
          <Route path='/stock' element={<Stock/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Error404/> */}
      <Footer/>
    </FlowersContext.Provider>
  )
}

export default App