import branding from './Icon/branding.png';
import bag from './Icon/bag.png';
import hamburger from './Icon/hamburger.png';
import number from './Icon/number.png';
import pasteImage from './Icon/pasteImage.png';
import user from './Icon/user.png';
import search from './Icon/search.png';
import heart from './Icon/heart.png';
import chevronDown from './Icon/chevronDown.png';
import arrowRight from './Icon/arrowRight.png';
import arrowLeft from './Icon/arrowLeft.png';

import header from './header.css';

function Header() {
    return (
        <div className="header">
            <NavigationBar />
            <div className="desc-view">
                <div className="arrows">
                    <div className="arrowLeft">
                        <img
                            className="arrowLeft-inside"
                            alt="placeholder"
                            src={arrowLeft}
                        />
                    </div>
                    <div className="arrowRight">
                        <img
                            className="arrowRight-inside"
                            alt="placeholder"
                            src={arrowRight}
                        />
                    </div>
                </div>
                <Image />
                <TextButton />
            </div>
        </div>
    );
}

export default Header;

function NavigationBar() {
    return (
        <div className="navigation-bar">
            <div className="branding">
                <img alt="placeholder" src={branding} />
            </div>
            <div className="elements-desc">
                <div className="element">Home</div>
                <div className="element">Shop</div>
                <div className="element-product">
                    <div className="element">Product</div>
                    <img alt="placeholder" src={chevronDown} />
                </div>
                <div className="element">Pages</div>
            </div>
            <div className="navigation-bar-icons">
                <div>
                    <img alt="placeholder" src={search} />
                </div>
                <div className="desc-icons">
                    <img alt="placeholder" src={user} />
                </div>
                <div className="desc-icons">
                    <img alt="placeholder" src={heart} />
                </div>
                <div className="cart-number">
                    <div className="desc-icons">
                        <img alt="placeholder" src={bag} />
                    </div>
                    <div className="number">
                        <img alt="placeholder" src={number} />
                    </div>
                </div>
                <div className="ham-desc">
                    <img alt="placeholder" src={hamburger} />
                </div>
            </div>
        </div>
    );
}

function Image() {
    return (
        <div>
            <div>
                <img className="image-css" alt="placeholder" src={pasteImage} />
            </div>
        </div>
    );
}

function TextButton() {
    return (
        <div className="text-button">
            <div className="text-area">
                <div className="badge">IKIGAI</div>
                <div className="headerText">Leather bags worth hugging. </div>
                <div className="text">
                    Keep your everyday style chic and on-trend with our
                    selection 20+ styles to choose from.
                </div>
            </div>
            <div>
                <div className="button">See Collection</div>
            </div>
        </div>
    );
}
