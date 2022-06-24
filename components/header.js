import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar'; 
import Menu from '../components/Menu'; 







export default function Header() {

  const [isMobile, setIsMobile] = useState("none");
  const [buttonImg, setButtonImg] = useState("menu");

  function handleClickBurger(){
      if(isMobile === "none" ){
          setIsMobile('block')
          setButtonImg("cancel")
      } else {
          setIsMobile('none')
          setButtonImg("menu")
      }
  }; 

  function handleLinkClick(){
    setIsMobile('none')
    setButtonImg("menu")
  }

  return (
    <div>
      <Head></Head>
      <Navbar imgMenu={buttonImg} onClick={handleClickBurger}/>
      <Menu  onClick={handleLinkClick} isMobile={isMobile}/>
    </div>
  )
}
