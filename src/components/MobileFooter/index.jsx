import { NavLink } from 'react-router-dom';

import { 
        FaHome, 
        FaUser, 
        FaShoppingCart  
                    } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

import './MobileFooter.css';

const MobileFooter = () => {
    return(
        <div className="MobileFooter">
            <ul>
                <li>
                    <NavLink to='/' className="FooterIcon">
                        <FaHome className='icon' />
                        <span className='lable'>
                            خانه
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/category' className="FooterIcon">
                        <BiCategory className='icon' />
                        <span>
                            دسته بندی ها
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/shoppingcart' className="FooterIcon">
                        <FaShoppingCart className='icon' />
                        <span>
                            سبد خرید
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/profile' className="FooterIcon">
                        <FaUser className='icon' />
                        <span>
                            پروفایل
                        </span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default MobileFooter;