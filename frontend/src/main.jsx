import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import HomePage from './landing_page/home/HomePage.jsx'
import SignUp from './landing_page/signup/SignUp.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import TopNav from './landing_page/TopNav.jsx'
import Footer from './landing_page/Footer.jsx'
import NotFound from './landing_page/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <TopNav/>
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/signup" element={<SignUp />}/>
    <Route path="/about" element={<AboutPage />}/>
    <Route path="/products" element={<ProductPage />}/>
    <Route path="/pricing" element={<PricingPage />}/>
    <Route path="/support" element={<SupportPage />}/>
    <Route path="*" element={<NotFound />}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
    
 
)
