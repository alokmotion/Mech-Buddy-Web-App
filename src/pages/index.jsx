import React, {useState} from 'react'
import Hero from '../components/Hero'
import Info from '../components/Info'
import { homeObjOne } from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/SideBar'
import Contact from '../components/ContactForm/Contact.jsx';
import Footer from '../components/Footer/index';
import ImgSlider from '../components/ImageSlider/index'
// import { SliderData } from '../components/ImageSlider/SliderData';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <Info {...homeObjOne}/>
      <Services />
      <ImgSlider  />
      <Contact />
      <Footer />
    </>
  )
}

export default Home