import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home   from './pages/Home'
import FlatForm from './pages/Flatform'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error/Error'
import './styles/templateStyle.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flatform/:flatNumber" element={<FlatForm />}/>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
