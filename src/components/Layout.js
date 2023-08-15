import React, { Children } from 'react';
import Footer from './Footer';
import Header from './Header';
const Layout = ({Children}) => {
  return (
    <>
    <Header />
    <main style={{minHeight : "80vh"}}>
    {Children}
    </main>
    <Footer />
        
    </>
  )
}

export default Layout;