import React from 'react'
import Men from '../Routes/Men/Men'
import Women from '../Routes/Women/Women'
import { Route, Routes} from 'react-router-dom'
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import App from '../App'
import Favorites from '../components/favorites/favorites'
import Account from '../Account/Account'





export default function Layout() {

  
  return (
  <div>
    <Header/>
    <Routes>
      <Route path="/" element={<App/>}/>
        <Route path='/men' element={<Men/>}/>
       <Route path='/women' element={<Women/>}/>
       <Route path="/favorites" element={<Favorites />} />
        <Route path='/account' element={<Account/>}/>
       

    </Routes>
    <Footer/>
  </div>
  )
}
