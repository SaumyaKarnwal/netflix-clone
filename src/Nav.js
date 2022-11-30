import React from "react";
import './Nav.css'
import { useState, useEffect } from "react";


export default function Nav() {
    // const [show, handleShow]= useState(false);

    // useEffect(()=>{
    //     window.addEventListener("scroll",()=>{
    //         if(window.scrollY > 100){
    //             handleShow(true);
    //         }else handleShow(false);
    //     });
    //     return ()=>{
    //         window.removeEventListener("scroll");
    //     };
    // },[]);
    const [showHeaderBg, setHeaderBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setHeaderBg(true)
      } else {
        setHeaderBg(false)
      }
    })

    return () => {
      window.removeEventListener('scroll', null)
    }
  }, [])

  return (
    <div className={`nav ${showHeaderBg && "nav__black"}`}>
      <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"layout="fill" alt="netlfix logo" />
      <img className="nav__logo_a" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"layout="fill" alt="netlfix logo" />
    </div>
  );
}
