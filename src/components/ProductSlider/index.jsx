import { useState } from 'react';

import { HiArrowLeft } from "react-icons/hi2";
import { 
    MdNavigateNext, 
    MdNavigateBefore  
                    } from "react-icons/md";

import TagedProduct from './DesktopTagedProduct';
import TagedProductModal from './TagedProductModal';

import './ProductSlider.css'

const ProductSlider = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const maxSlide = 2;

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const nextSlide = () => {
        if(slideNumber >= maxSlide-1){
            setSlideNumber(0);
        }else{
            setSlideNumber(slideNumber + 1);
        }
    }

    const previousSlide = () => {
        if(slideNumber <= 0){
            setSlideNumber(maxSlide - 1);
        }else{
            setSlideNumber(slideNumber - 1);
        }
    }

    return (
        <>
        <TagedProductModal isOpen={isModalOpen} onClose={closeModal}/>

        <div className='ProductSlider'>
            <div className='product'>
                <div class="slideshow-container">

                    <div class={`fade ${slideNumber === 0 ? 'mySlides' : 'displayNone'}`}>
                        <img 
                            src={`/static/products/woman.png`} 
                            alt='ProductImage'
                            className='slideImage' 
                        />
                        
                        <div onClick={() => {setIsModalOpen(true)}} className="one">
                            &nbsp;
                            <div className="Product">
                                <TagedProduct />
                            </div>
                        </div>
                        <div onClick={() => {setIsModalOpen(true)}} className="two">
                            &nbsp;
                            <div className="Product">
                                <TagedProduct />
                            </div>
                        </div>
                        <div onClick={() => {setIsModalOpen(true)}} className="three">
                            &nbsp;
                            <div className="Product">
                                <TagedProduct />
                            </div>
                        </div>
                        <div onClick={() => {setIsModalOpen(true)}} className="four">
                            &nbsp;
                            <div className="Product">
                                <TagedProduct />
                            </div>
                        </div>

                    </div>
                    <div class={`fade  ${slideNumber === 1 ? 'mySlides' : 'displayNone'}`}>
                        <img 
                            src={`/static/products/image110.png`} 
                            alt='ProductImage'
                            className='slideImage' 
                        />
                        <div onClick={() => {setIsModalOpen(true)}} className="one">
                            &nbsp;
                            <div className="Product">
                                <TagedProduct />
                            </div>
                        </div>
                        <div onClick={() => {setIsModalOpen(true)}} className="two">
                            &nbsp;
                            <div className="Product">
                                <TagedProduct />
                            </div>
                        </div>
                        <div onClick={() => {setIsModalOpen(true)}} className="three">
                            &nbsp;
                            <div className="Product">
                                <TagedProduct />
                            </div>
                        </div>
                        <div onClick={() => {setIsModalOpen(true)}} className="four">
                            &nbsp;
                            <div className="Product">
                                <TagedProduct />
                            </div>
                        </div>

                    </div>

                    <span 
                        onClick={previousSlide}
                        class="prev" 
                    >
                        <MdNavigateBefore />
                    </span>

                    <span 
                        onClick={nextSlide}
                        class="next"
                    >
                        <MdNavigateNext />
                    </span>
                </div>
                
                <div className="SliderSide">
                    <div className="slideBox">
                        <div className="box active">
                            <img 
                                src="/static/icons/1.png" 
                                alt="alt" 
                            />
                            <span>
                                مد و فشن
                            </span>
                        </div>
                        <div className="box">
                            <img 
                                src="/static/icons/2.png" 
                                alt="alt" 
                            />
                            <span>
                                زیبایی و سلامت
                            </span>
                        </div>
                        <div className="box">
                            <img 
                                src="/static/icons/3.png" 
                                alt="alt" 
                            />
                            <span>
                                لوازم خانگی
                            </span>
                        </div>
                        <div className="box">
                            <img 
                                src="/static/icons/4.png" 
                                alt="alt" 
                            />
                            <span>
                                ورزش و سفر
                            </span>
                        </div>
                    </div>
                    <button className="SeeAllProducts">
                        <HiArrowLeft />
                        <p>
                            مشاهده همه محصولات
                        </p>
                    </button>    
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductSlider;