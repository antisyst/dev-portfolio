import './showcase.styles.scss';
import "animate.css/animate.min.css";
import 'animate.css';

function Showcase() {


    return(
        <div className='main-class-target-showcase-middle-content-specs animate__animated animate__fadeIn headline'>
            <div className='main-class-target-showcase-middle-content-specs_left animate__animated animate__fadeIn'>
                <h1>
                    <span className='custom-inline-span-with animate__animated animate__fadeIn'>Hi! I'am <span>Ramazan Azimli </span></span>
                    <br />
                    I'am Frontend <b>UI </b>Developer<span className='custom-tickle-key-circle'>.</span>
                </h1>
                <h2>I build things in <span>Frontend Development</span>.</h2>
                <p>I have been in the Frontend field for more than 3 years. I'am developing the project and developing it all the time. </p>
            </div>
        </div>
    )
}   

export default Showcase;
