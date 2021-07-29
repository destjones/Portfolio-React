import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import {  FiExternalLink } from 'react-icons/fi';
import logo from '../images/962492-200.png'

class Sidebar extends Component {
    render() {
       
        return (
            <div className="sidebar">
                <img src={logo} />
                <h1><Link smooth to="/#start" className="h1_links">Destiny Jones</Link></h1>
                <p style={{color:'black',fontWeight:'bold'}} className="gmail"> destinyj88999@gmail.com </p>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interest</Link></li>
                    {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
                </ul>
    
                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/destljones/" rel="opener noreferrer" target="_blank" class="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://github.com/destjones" rel="opener noreferrer" target="_blank" class="fa fas fa-github fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:destinyj8899@gmail.com" rel="opener noreferrer" target="_blank" class="fa fas fa-envelope fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.facebook.com/profile.php?id=100009472448166&sk=photos&viewas=&show_switched_toast=false&show_switched_tooltip=false&show_podcast_settings=false" rel="opener noreferrer" target="_blank" class="fa fas fa-facebook fa-lg"></a></li>
                    </ul>
                </div>
              
            </div>
        )
    }
}

export default Sidebar