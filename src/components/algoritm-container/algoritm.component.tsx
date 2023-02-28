import './algoritm.styles.scss'
import SleepIcon from '../../icons/sleep-icon';
import RepeatIcon from '../../icons/repeat-icon';
import CodingIcon from '../../icons/coding-icon';

function AlgoritmContainer() {
    return(
        <div className="main-class-target-showcase-middle-content-specs_container">
                <div className='main-class-target-showcase-middle-content-specs_container_item'>
                    <CodingIcon/>
                    <h2>Code</h2>
                </div>
                <div className='main-class-target-showcase-middle-content-specs_container_item'>
                    <SleepIcon/>
                    <h2>Sleep</h2>
                </div>
                <div className='main-class-target-showcase-middle-content-specs_container_item'>
                    <RepeatIcon/>
                    <h2>Repeat</h2>
                </div>
            </div>
    )
}

export default AlgoritmContainer;