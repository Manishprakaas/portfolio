

import React from 'react';
import { Link, NavLink } from "react-router-dom"
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoNewspaperSharp } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import manish from "./img3.jpg"



const Navbar = ()=>{
    return(
        <>

           
                <aside class="sidebar" >
                    <div class="profile">
                        <img src={manish} alt="Manish" />
                        <div className="round"></div>
                        <h1>Manish</h1>
                        <p>I'm Web Developer</p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div class="social-icons">
                            <NavLink to="https://x.com/manish_prakaash?t=avB2WItVxjjGwpm0m4xXfg&s=09" class="hidden" ><RiTwitterXLine className="sizebig "size={30}/></NavLink>
                            <NavLink to="https://www.facebook.com/manish.p.m.98?mibextid=ZbWKwL" class="hidden"><FaFacebookSquare className="sizebig" size={30} /></NavLink>
                            <NavLink to="https://www.instagram.com/prakaashmanish?igsh=MTFsZmZ0aG9qMHpzbA==" class="hidden"><FaSquareInstagram className="sizebig" size={30} /> </NavLink>
                            <NavLink to="www.linkedin.com/in/manish-prakaash-4a2b2525a " class="hidden"><FaLinkedin className="sizebig" size={30} /></NavLink>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to="/" class="sidenav text-decoration-none" ><FaHome size={22}/>  Home</NavLink></li>
                            <li><NavLink to="/About" class="sidenav text-decoration-none"><IoPersonSharp size={22} /> About</NavLink></li>
                            <li><NavLink to="/Resume" class="sidenav text-decoration-none"><IoNewspaperSharp size={22} /> Resume</NavLink></li>
                            <li><NavLink to="/Contact" class="sidenav text-decoration-none"><MdContacts size={22} /> Contact</NavLink></li>

                        </ul>
                    </nav>
                </aside>
                
        </>
    )
}
export default Navbar