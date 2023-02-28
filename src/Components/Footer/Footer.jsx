import React from 'react';
import './Footer.css';
import circleFooter from '../../Assets/Circle Footer.png';
import calculadora from '../../Assets/CalculatorFooter.png';
import sol from '../../Assets/SunFooter.png';
import imgFotter from '../../Assets/ImgFooter2.svg';

const Footer = () => {
    return ( 
        <footer>
            <div className='footerContainer'>
                
                <div className='Section1'>
                    <div className='containerTitle'>
                        <h3>description</h3>
                        <p>description</p>
                    </div>
                    <div className='ContainerButtons'>
                        <img src={imgFotter} alt="" />
                        <button className='FoterButton'><img src={circleFooter} alt="world" />Korean</button>
                        <button className='FoterButton'><img src={calculadora} alt="calculadora" />d VND</button>
                        <button className='FoterButton'><img src={sol} alt="sol" />Dark</button>
                    </div>
                </div>

                <div className='ContainerDescription'>
                    <h3>description</h3>
                    <textarea placeholder='description'></textarea>      
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;