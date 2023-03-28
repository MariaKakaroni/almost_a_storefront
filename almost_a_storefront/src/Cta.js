import email from './Icon/email.png';
import cta from './cta.css';

function Cta() {
    return (
        <>
            <CtaMob />
            <CtaDesc />
        </>
    );
}

export default Cta;

function CtaButton() {
    return (
        <button className="cta-button" type="submit">
            <div className="cta-button-text">Signup</div>
        </button>
    );
}
function CtaInput() {
    return (
        <div className="input-section">
            <div className="email-input">
                <img alt="placeholder" src={email} />
                <input className="input-itself" placeholder="Your email" />
            </div>
        </div>
    );
}
function CtaHeader() {
    return (
        <div>
            <div className="cta-header">Join our newsletter</div>
            <div className="cta-text">
                Enjoy big discounts and latest updates right to your inbox.
            </div>
        </div>
    );
}

function CtaDesc() {
    return (
        <div className="cta-section-desc">
            <div className="box">
                <div className="form-box">
                    <div className="form-desc">
                        <CtaHeader />
                        <form className="form">
                            <div className="desc-input">
                                <CtaInput />
                                <CtaButton />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CtaMob() {
    return (
        <div className="cta-section">
            <div className="box">
                <div className="form-box">
                    <CtaHeader />
                    <form className="form">
                        <CtaInput />
                        <CtaButton />
                    </form>
                    <div className="message"></div>
                </div>
            </div>
        </div>
    );
}
