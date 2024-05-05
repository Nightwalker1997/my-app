import { ImLeaf } from "react-icons/im";
import { CiShop, CiSquarePlus } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

import './card.css';

const Card = () => {
    return(
        <div className="card">
            <div className="cardHeader">
                <div className="cardHeaderIcon">
                    <ImLeaf className='CardIcon' />
                </div>
                <div className="cardHeaderIcon">
                    <ImLeaf className='CardIcon' />
                </div>
                <div className="cardHeaderIcon">
                    <ImLeaf className='CardIcon' />
                </div>
            </div>
            <div className='ProductImage'>
                <img src="/static/icons/product.png" alt="product" />
                <p>
                    عنوان محصول
                    عنوان محصول
                    عنوان محصول
                    عنوان محصول
                </p>
            </div>
            <div className="oneToLast">
                <div className="seller">
                    <span>
                        مهراشاپ
                    </span>
                    <CiShop className="sellerIcon"/>
                </div>
                <div className="mark">
                    <FaStar className='starIcon'/>
                    <span>
                        4.6
                    </span>
                </div>
            </div>
            <div className="PricePlus">
                <div className="price">
                    <span className='prePrice'>
                        460,000
                    </span>
                    <div className='curPrice'>
                        <span className='number'>
                            460,000
                        </span>
                        <span className='unit'>
                            تومان
                        </span>
                    </div>
                </div>
                <div className="plus">
                    <CiSquarePlus />
                </div>
            </div>
        </div>
    )
}

export default Card;