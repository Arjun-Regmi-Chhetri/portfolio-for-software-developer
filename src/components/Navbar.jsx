import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
 import { useContext } from "react";
 import { ScrollContext } from '../context/ScrollContext';
 import { useState, useRef} from 'react';
//import {Scroll} from '../hooks/scroll';
export default function Navbar(){
     const {isSticky} = useContext(ScrollContext);
     const navRef = useRef();
     const burger = useRef();
     const content = useRef();
     const[nav, setNav] = useState();

     const hamburger =()=>{
        setNav(()=>{
            navRef.current.classList.toggle("nav-active");
            burger.current.classList.toggle("click");
            content.current.classList.toggle("nav-active");
        });

        return nav;
     };

     const hideBar =()=>{
        setNav(()=>{
            navRef.current.classList.toggle("nav-active");
            burger.current.classList.toggle("click");
            content.current.classList.toggle("nav-active");
        });
     };

    return(
        <>
            <div className="Navbar" >
            <section className={isSticky ? 'header sticky' : 'header'} >
            <div className="navbar" data-aos="zoom-in">
                    <div className="logo">
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                            <img src={Logo} alt="Arjun Chhetri" />
                        </Link>
                        
                    </div>
                <div className="nav">
                    <ul className="navigation" ref={navRef} >
                        <li>
                            <Link  onClick={hideBar} className="nav-link" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={100}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link onClick={hideBar} className="nav-link" activeClass="active" to="work" spy={true} smooth={true} offset={-100} duration={100}>
                                Work
                            </Link>
                        </li>
                        <li><Link onClick={hideBar} className="nav-link" activeClass="active" to="contact" spy={true} smooth={true} offset={-150} duration={100}>Contact</Link></li>
                        <li className="resume"><Link  onClick={hideBar} to="">Resume</Link></li>
                    </ul>
                </div>
                <div className="hamburger" onClick={hamburger} ref={burger}>
                    <div className="inner-hams">
                        <ul className="line"></ul>
                    </div>
                </div>
            </div>
            
        </section>
        <div className="content" ref={content} onClick={hideBar}>
        </div>
            </div>
        </>
    );
}