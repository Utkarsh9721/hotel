import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Menu from './components/menu/menu';
import Home from './components/home/home';
import BookTable from './components/bookTable/bookTable';
import Campus from './components/campus/campus'
import Testimonial from './components/testimomials/testimonials';
import About from './components/about/about'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Order from './components/order/order'

const App = () => {
  const location = useLocation();

  const hideNavbarRoutes = ['/bookTable', '/order'];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Menu />
              <Order/>
              <Testimonial/>
              <Campus/>
              <About/>
              <Contact/>
              <Footer/>
            </>
          }
        />
        <Route path="/bookTable" element={<BookTable />} />
      </Routes>
    </>
  );
};

export default App;