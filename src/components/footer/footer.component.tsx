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
            <h2>Frontend Developer</h2>
            </div>
            <div>
                <p>
                Copyright 2023 © All rights reserved by me.
                </p>
            </div>
        </div>
        <div className="import-div-component-footer-integration-context_item_2">
            <a href="" target={'_blank'}><FaInstagram/></a>
            <a href="" target={'_blank'}><FaLinkedin/></a>
        </div>
       </footer>
    )
}

export default Footer;
