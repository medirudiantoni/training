import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Products from './pages/products/products'
import Header from './components/header/header'
import ProductView from './pages/productView/productView'
import Notifications from './pages/notifications/notifications'
import Cart from './pages/cart/cart'

const MyApp = () => {
  return (
    <div className="w-screen lg:w-[360px] h-screen mx-auto border overflow-hidden bg-white shadow-lg relative">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:productId' element={<ProductView />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/notifications' element={<Notifications />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MyApp