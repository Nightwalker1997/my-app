import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar';
import CardContainer from './components/cardContainer';
import ProductSlider from './components/ProductSlider';
import MobileFooter from './components/MobileFooter';

import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
            <CardContainer />
            <ProductSlider />

            <BrowserRouter>
                <MobileFooter />
            </BrowserRouter>

        </div>
    );
}

export default App;
