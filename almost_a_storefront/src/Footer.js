import branding from './Icon/branding.png';
import flags from './Icon/flags.png';
import chevronDown from './Icon/chevronDown.png';
import facebook from './Icon/facebook.png';
import twitter from './Icon/twitter.png';
import insta from './Icon/insta.png';
import emailIcon from './Icon/emailIcon.png';
import footer from './footer.css';

function Footer() {
    return (
        <>
            <FooterMob />
            <FooterDesc />
        </>
    );
}

export default Footer;

function Copyrights() {
    return (
        <div className="footer-copyrights">
            <div className="footer-copyrights-text">© 2088 Nayzak Design</div>
        </div>
    );
}

function Media() {
    return (
        <div className="footer-media footer-desc-head">
            <img alt="placeholder" src={facebook} />
            <img alt="placeholder" src={insta} />
            <img alt="placeholder" src={twitter} />
            <img alt="placeholder" src={emailIcon} />
        </div>
    );
}

function Branding() {
    return (
        <div className="footer-header footer-desc-head">
            <img alt="placeholder" src={branding} />
            <div className="footer-text">
                Phosf luorescently engage worldwide method process shopping.
            </div>
        </div>
    );
}

function DropdownMobile() {
    return (
        <div className="footer-menu">
            <div className="footer-dropdown">
                <div>Product</div>
                <img alt="placeholder" src={chevronDown} />
            </div>
            <div className="footer-dropdown">
                <div>Information</div>
                <img alt="placeholder" src={chevronDown} />
            </div>
            <div className="footer-dropdown">
                <div>Support</div>
                <img alt="placeholder" src={chevronDown} />
            </div>
        </div>
    );
}

function Columns() {
    return (
        <div className="footer-columns">
            <div className="footer-column">
                <div className="footer-title"> Product</div>
                <div className="footer-links">
                    <div className="footer-link"> Learn</div>
                    <div className="footer-link"> Plugins</div>
                    <div className="footer-link"> Gallery</div>
                    <div className="footer-link"> Pricing</div>
                </div>
            </div>
            <div className="footer-column">
                <div className="footer-title">Information</div>
                <div className="footer-links">
                    <div className="footer-link"> Privacy</div>
                    <div className="footer-link"> Cookies</div>
                    <div className="footer-link"> Terms</div>
                    <div className="footer-link"> Security</div>
                </div>
            </div>
            <div className="footer-column">
                <div className="footer-title">Support</div>
                <div className="footer-links">
                    <div className="footer-link"> Updates</div>
                    <div className="footer-link"> Discord</div>
                    <div className="footer-link"> Startups</div>
                    <div className="footer-link"> Contact</div>
                </div>
            </div>
        </div>
    );
}

function Selectors() {
    return (
        <div className="footer-selectors">
            <div className="footer-language-button">
                <img alt="placeholder" src={flags} />
                <button className="footer-language">English</button>
                <img alt="placeholder" src={chevronDown} />
            </div>
            <div className="footer-language-button">
                <button className="footer-language">USD</button>
                <img alt="placeholder" src={chevronDown} />
            </div>
        </div>
    );
}
function Content() {
    return (
        <div className="footer-content">
            <div className="footer-left">
                <Branding />
                <Media />
            </div>
            <div>
                <Columns />
            </div>
        </div>
    );
}
function Bottom() {
    return (
        <div className="footer-bottom">
            <Copyrights />
            <Selectors />
        </div>
    );
}

function FooterDesc() {
    return (
        <div className="footer-desc">
            <div className="child">
                <Content />
            </div>
            <div className="child">
                <Bottom />
            </div>
        </div>
    );
}

function FooterMob() {
    return (
        <div className="footer-mob">
            <div className="footer-general">
                <div className="footer-content">
                    <div className="footer-accordion">
                        <Branding />
                        <DropdownMobile />
                    </div>
                    <Selectors />
                    <div className="footer-end">
                        <Media />
                        <Copyrights />
                    </div>
                </div>
            </div>
        </div>
    );
}
