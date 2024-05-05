import { IoMdClose } from "react-icons/io"; 
import { ImLeaf } from "react-icons/im";
import { BsExclamationSquare } from "react-icons/bs";
import { IoStarSharp } from "react-icons/io5";

import './TagedProductModal.css';

const TagedProductModal = ({isOpen, onClose}) => {

    if(!isOpen) return null;
    
    return(
        <div className="TagedProductModal">
            <div className="modalContent">
                
                <div className="TitleClose">
                    {/* Modal close Button */}
                    <IoMdClose 
                        onClick={onClose}
                        className="close"
                    />
                    {/* Produse Name */}
                    <p className="title">
                        عنوان محصول
                        عنوان محصول
                        عنوان محصول
                    </p>
                </div>

                <div className="IconsSeller">
                    {/* Place Icons */}
                    <div className="icons">
                        <ImLeaf  className="icon"/>
                        <ImLeaf  className="icon"/>
                        <ImLeaf  className="icon"/>
                    </div>
                    {/* Product Seller name */}
                    <div className="seller">
                        <p className="sellerName">
                            فروشگاه مهراشاپ
                        </p>
                        <img 
                            src="/static/icons/mehrashop2.png" 
                            alt="shop Icon" 
                            className="sellerIcon"
                        />
                    </div>
                </div>
                {/* Product Images */}
                <div className="ProdutsImage">
                    <img 
                        src="/static/icons/product.png" 
                        alt="product" 
                    />
                    {/* To change Product Image */}
                    <div className="dots">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dotSolid"></span>

                    </div>
                </div>

                {/* Reviw mark and IsOrginal row */}
                <div className="StarsOriginal">
                    {/* Reviw Customer given to Product */}
                    <div className="stars">
                        <div className="starsIcons">
                            <IoStarSharp className="starsIcon"/>
                            <IoStarSharp className="starsIcon"/>
                            <IoStarSharp className="starsIcon"/>
                            <IoStarSharp className="starsIcon"/>
                            <IoStarSharp className="starsIcon"/>
                        </div>
                        <p className="starsAvg">
                            (121)
                        </p>
                    </div>
                    {/* To say is Product is fake or Original */}
                    <div className="original">
                        <BsExclamationSquare />
                        <p>
                            کالای غیراصل
                        </p>
                    </div>
                </div>
                
                <div className="PriceSell">
                    {/* Go to Product Page */}
                    <button 
                        type="button"
                        className="sellBtn"
                    >
                        مشاهده محصول
                    </button>

                    {/* Product Price Change */}
                    <div className="price">
                        {/* Product Previos Price and Dicount prsent */}
                        <div className="DisPre">
                            <span className="prePricr">
                                460,000
                            </span>
                            <span className="discount">
                                20%
                            </span>
                        </div>
                        {/* Current Price pf Product */}
                        <div className="CurUnit">
                            <span className="curPrice">
                                460,000
                            </span>
                            <span className="priceUnit">
                                تومان
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TagedProductModal;