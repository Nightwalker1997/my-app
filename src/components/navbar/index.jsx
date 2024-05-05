import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { 
    CiShoppingCart,
    CiHeart ,
    CiUser,
    CiSearch,
    CiShop
} from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";

import './navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
        console.log("toggle", isOpen)
    }

    return(
        <nav className="NavBar">
            <div className="NavBarItems">
                <NavLink to='/'>    
                    <img 
                        src="/static/icons/mehrashop.jpg" 
                        alt='Mehra shop' 
                        className='ShopIcon'
                    />
                </NavLink>

                <div className="menuIcon">
                    <div onClick={toggle}>
                        <IoMdMenu />
                    </div>
                    <div>
                        <CiSearch />
                    </div>
                </div>
                <div className={`NavButtons ${isOpen && 'displayNavButtons'}`}> 
                    <ul>
                        <li>
                            <NavLink to='/'  className='home'>
                                خانه
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog'>
                                بلاگ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/ourstory'>
                                داستان ما
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contactus'>
                                تماس با ما
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to='/contactus' className="beSeller">
                                <CiShop className="icon"/>
                                <span>
                                    فروشنده شوید!
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='NavIcons'>
                    <NavLink to='/profile'>
                        <CiUser className='NavIcon' />
                    </NavLink>

                    <NavLink to='/Liked'>
                        <CiHeart className='NavIcon' />
                    </NavLink>

                    <NavLink to='/shoppingcart'>
                        <CiShoppingCart className='NavIcon'  />
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
