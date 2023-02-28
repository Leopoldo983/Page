import React from 'react';
import './Main.css';
import star from '../../Assets/StarMain.svg';
import like from '../../Assets/Like.svg';
import cuadrado from '../../Assets/cuadradoMain.svg';
import computador from '../../Assets/ComputadorMain.svg';
import korea from '../../Assets/Korea.svg';
import imgMain from '../../Assets/ImageMain.png';

const Main = () => {
    return ( 
        <main>
            <div className='container'>
                <nav className='NavFilterContainer'>
                        <form action="">
                            <input type="text" placeholder='Game Name / Provider / Category Tagt' className='input1'/>
                            <input type="text" placeholder='Sort by..' className='input2'/>
                            <input type="text" placeholder='All Providers' className='input2'/>
                            <button type='button'>View license</button>
                        </form>
                </nav>

                <div className='Div-after-NavFilterContainer'>
                    
                    <p>Slot (12) {'>'} Pragmatic (205) {'>'} smugglers cove</p>
                </div>

                <section>
                    <div className='ContainerFigureAndTable'>

                        <div className='ContainerFigure'>

                            <figure></figure>

                            <div className='divUnderFigure'>

                                <ul className='ul1'>
                                    <li><img src={star} alt="star"/>1058</li>
                                    <li><img src={like} alt="like"/>1058</li>
                                </ul>

                                <ul className='ul2'>
                                    <p>smugglers cove</p>
                                </ul>

                                <ul className='ul3'>
                                    <li><img src={cuadrado} alt="cuadrado" /></li>
                                    <li><img src={computador} alt="computador" /></li>
                                </ul>

                            </div>
                        </div>


                        <div className='ContainerTable'>

                            <div>
                                <button>Recent best & races</button>
                                <button>My Bet</button>
                            </div>
                        
                            <table>
                                <tr>
                                    <td className='betId diferentTd'>bet id</td>
                                    <td className='provider1 diferentTd'>Provider</td>
                                    <td className='time diferentTd'>time</td>
                                    <td className='betmoney1 diferentTd'>bet money</td>
                                    <td className='winmoney1 diferentTd'>win money</td>
                                    <td className='country diferentTd'>Country</td>
                                </tr>
                                <tr>
                                    <td className='betId'>546546181231</td>
                                    <td className='provider'>Pragmatic</td>
                                    <td className='time'>PM 5:35:08</td>
                                    <td className='betmoney'>W 100,000</td>
                                    <td className='winmoney'>W 585,600</td>
                                    <td className='country'><img src={korea} alt="korea"/></td>
                                </tr>
                                <tr>
                                    <td className='betId'>546546181231</td>
                                    <td className='provider'>Pragmatic</td>
                                    <td className='time'>PM 5:35:08</td>
                                    <td className='betmoney'>W 100,000</td>
                                    <td className='winmoney'>W 585,600</td>
                                    <td className='country'><img src={korea} alt="korea" /></td>
                                </tr>
                                <tr>
                                    <td className='betId'>546546181231</td>
                                    <td className='provider'>Pragmatic</td>
                                    <td className='time'>PM 5:35:08</td>
                                    <td className='betmoney'>W 100,000</td>
                                    <td className='winmoney'>W 585,600</td>
                                    <td className='country'><img src={korea} alt="korea" /></td>
                                </tr>
                                <tr>
                                    <td className='betId'>546546181231</td>
                                    <td className='provider'>Pragmatic</td>
                                    <td className='time'>PM 5:35:08</td>
                                    <td className='betmoney'>W 100,000</td>
                                    <td className='winmoney'>W 585,600</td>
                                    <td className='country'><img src={korea} alt="korea" /></td>
                                </tr>
                                <tr>
                                    <td className='betId'>546546181231</td>
                                    <td className='provider'>Pragmatic</td>
                                    <td className='time'>PM 5:35:08</td>
                                    <td className='betmoney'>W 100,000</td>
                                    <td className='winmoney'>W 585,600</td>
                                    <td className='country'><img src={korea} alt="korea" /></td>
                                </tr>
                                <tr>
                                    <td className='betId'>546546181231</td>
                                    <td className='provider'>Pragmatic</td>
                                    <td className='time'>PM 5:35:08</td>
                                    <td className='betmoney'>W 100,000</td>
                                    <td className='winmoney'>W 585,600</td>
                                    <td className='country'><img src={korea} alt="korea" /></td>
                                </tr>
                                <tr>
                                    <td className='betId'>546546181231</td>
                                    <td className='provider'>Pragmatic</td>
                                    <td className='time'>PM 5:35:08</td>
                                    <td className='betmoney'>W 100,000</td>
                                    <td className='winmoney'>W 585,600</td>
                                    <td className='country'><img src={korea} alt="korea" /></td>
                                </tr>
                                <tr>
                                    <td className='betId'>546546181231</td>
                                    <td className='provider'>Pragmatic</td>
                                    <td className='time'>PM 5:35:08</td>
                                    <td className='betmoney'>W 100,000</td>
                                    <td className='winmoney'>W 585,600</td>
                                    <td className='country'><img src={korea} alt="korea" /></td>
                                </tr>
                                <tr>
                                    <td className='betId'>546546181231</td>
                                    <td className='provider'>Pragmatic</td>
                                    <td className='time'>PM 5:35:08</td>
                                    <td className='betmoney'>W 100,000</td>
                                    <td className='winmoney'>W 585,600</td>
                                    <td className='country'><img src={korea} alt="korea" /></td>
                                </tr>
                                <tr>
                                    <td className='betId'>546546181231</td>
                                    <td className='provider'>Pragmatic</td>
                                    <td className='time'>PM 5:35:08</td>
                                    <td className='betmoney'>W 100,000</td>
                                    <td className='winmoney'>W 585,600</td>
                                    <td className='country'><img src={korea} alt="korea" /></td>
                                </tr>
                                <tr>
                                    <td className='betId'>546546181231</td>
                                    <td className='provider'>Pragmatic</td>
                                    <td className='time'>PM 5:35:08</td>
                                    <td className='betmoney'>W 100,000</td>
                                    <td className='winmoney'>W 585,600</td>
                                    <td className='country'><img src={korea} alt="korea" /></td>
                                </tr>
                                <tr>
                                    <td className='betId'>546546181231</td>
                                    <td className='provider'>Pragmatic</td>
                                    <td className='time'>PM 5:35:08</td>
                                    <td className='betmoney'>W 100,000</td>
                                    <td className='winmoney'>W 585,600</td>
                                    <td className='country'><img src={korea} alt="korea" /></td>
                                </tr>
                                <tr>
                                    <td className='betId'>546546181231</td>
                                    <td className='provider'>Pragmatic</td>
                                    <td className='time'>PM 5:35:08</td>
                                    <td className='betmoney'>W 100,000</td>
                                    <td className='winmoney'>W 585,600</td>
                                    <td className='country'><img src={korea} alt="korea" /></td>
                                </tr>
                                <tr>
                                    <td className='betId'>546546181231</td>
                                    <td className='provider'>Pragmatic</td>
                                    <td className='time'>PM 5:35:08</td>
                                    <td className='betmoney'>W 100,000</td>
                                    <td className='winmoney'>W 585,600</td>
                                    <td className='country'><img src={korea} alt="korea" /></td>
                                </tr>
                                <tr>
                                    <td className='betId'>546546181231</td>
                                    <td className='provider'>Pragmatic</td>
                                    <td className='time'>PM 5:35:08</td>
                                    <td className='betmoney'>W 100,000</td>
                                    <td className='winmoney'>W 585,600</td>
                                    <td className='country'><img src={korea} alt="korea" /></td>
                                </tr>
                            </table>

                        </div>

                    </div>

                    <div className='PragmaticContainer'>
                        <div className='containerImg'>
                            <img src={imgMain} alt="" />
                        </div>

                        <div className='ContainerText'>
                            <h3>Pracmatic Play</h3>
                            <p>Official website pragmatinc Play <br/> +387 Game 2015 establish <br/> Description</p>
                        </div>

                        <div className='ContainerPercetage'>
                            <p className='p1'>RTP</p>
                            <p className='p2'>96%</p>
                        </div>
                    </div>
                    
                </section>

            </div>
        </main>
     );
}
 
export default Main;