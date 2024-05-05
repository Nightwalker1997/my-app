import { BsArrowLeft } from "react-icons/bs";

import Card from './card';

import './cardContainer.css';

const cardContainer = () => {
    return(
        <div className="cardContainer">
            <div className='container'>
                <div className='containerChild'>
                    <div className='containerHeader'>
                        <button className='seeAll'>
                            <BsArrowLeft />
                            <span>
                                مشاهده همه
                            </span>
                        </button>
                        <div className='filter'>
                            <button className='active'>
                                پرفروش ترین ها
                            </button>
                            <button>
                                جدید ترین ها
                            </button>
                            <button>
                                محبوب ترین ها
                            </button>
                        </div>
                    </div>

                    <div className="cards">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />

                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default cardContainer;