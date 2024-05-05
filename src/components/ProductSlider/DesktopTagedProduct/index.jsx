import { FaStar } from "react-icons/fa6";

import './TagedProduct.css';

const TagedProduct = () => {
    return(
        <div className="TagedProduct">
            {/* product image */}
            <img 
                src="/static/icons/product.png" 
                alt="products" 
                className="productImage" 
            />
            {/* product information */}
            <div className="tagedInfo">
                {/* Title */}
                <p className="tagedDescriptaton">
                    عنوان محصول
                    عنوان محصول
                    عنوان محصول
                    عنوان محصول
                </p>

                <div className="PriceStar">
                    {/* Price of Product */}
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
                    {/* Stars */}
                    <div className="star">
                        <FaStar className="starIcon"/>
                        <span>
                            4.6
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TagedProduct;