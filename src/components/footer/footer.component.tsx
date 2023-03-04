import './footer.styles.scss';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

function Footer() {
    return(
       <footer className='import-div-component-footer-integration-context'>
        <div className="import-div-component-footer-integration-context_item_1">
            <div>
            <h1>Richard Andrei</h1>
            <h2>Frontend UI Developer</h2>
            </div>
            <div>
                <p>
                Copyright 2023 © All rights reserved by me.
                </p>
            </div>
        </div>
        <div className="import-div-component-footer-integration-context_item_2">
            <a href="https://www.instagram.com/rmzn.dev/" target={'_blank'}><FaInstagram/></a>
            <a href="https://www.linkedin.com/in/ramazan-azimli-135475245/" target={'_blank'}><FaLinkedin/></a>
            <a href="https://www.tiktok.com/@rmzn.dev" target={'_blank'}><FaTiktok/></a>
        </div>
       </footer>
    )
}

export default Footer;
