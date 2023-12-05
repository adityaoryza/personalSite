import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Banner from './components/Banner';
import './index.css'


function App() {
 return (
  <div>
      {/* <div className="w-screen flex justify-center mt-8"> */}
      <div>
        <Header />
      </div>
        <Banner />

      <Content />

      <Footer />

  </div>
 );
}

export default App;