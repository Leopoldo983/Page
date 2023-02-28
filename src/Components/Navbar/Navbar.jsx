import React from 'react';
import logo from '../../Assets/FullLogoHeader.png';
import menu from '../../Assets/Menu.svg';
import home from '../../Assets/Home.svg';
import ciculoHeader from '../../Assets/HeaderCircle.svg';
import star from '../../Assets/Star.svg';
import imgHeader from '../../Assets/ImageHeader.png';
import X from '../../Assets/X.svg';
import favorite from '../../Assets/ubicacion.png'
import './Navbar.css';

const Navbar = () => {
    return (
        <header>
            <div className='Header-container'>
                <ul className='header-ul-container-links'>
                    <li><img src={logo} alt="Logo" /></li>
                    <li><img src={menu} alt="Menu" className='menuIcon'/></li>
                    <li><img src={home} alt="Home" className='icon'/>Home</li>
                    <li><img src={ciculoHeader} alt="Circle" className='icon'/> Recent</li>
                    <li><img src={star} alt="Star" className='icon'/>Vogue</li>
                    <li><img src={favorite} alt="Star" className='icon'/>Favorite</li>
                </ul>

                <ul className='header-ul-container-texts'>
                    <li>Casino</li>
                    <li>Slot</li>
                    <li>Reel</li>
                    <li>Live</li>
                    <li>MiniGame</li>


                    <li>
                        <div className='header-ul-container-div'>
                            <img src={imgHeader} alt="" />
                            <div className='header-ul-container-div-brother'>
                                <div><p>Korea aplus</p></div>
                                <div>
                                    <p>VIP</p>
                                    <p>W0</p>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li className='xIcon'>
                        <img src={X} alt="X" />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;