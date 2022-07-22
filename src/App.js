import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import SingleArticle from './Pages/SingleArticle';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




class App extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Blogs" element={<Blogs />}></Route>
          <Route path="/Blogs:slug" element={<SingleArticle />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>


        </Routes>
        <Footer />
      </Router>

    );
  }
}


export default App