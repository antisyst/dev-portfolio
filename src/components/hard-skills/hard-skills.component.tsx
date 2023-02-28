import './hard-skills.styles.scss'
import { DiReact } from 'react-icons/di';
import { DiCss3Full } from 'react-icons/di';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiJquery } from 'react-icons/si';
function HardSkillsCont(){
    return(
        <div className='hard-skills-container-content-top-start'>
              <h1 className='hard-skills-container-content-top-start_h1'>Top Hard Skills</h1>
            <div className='hard-skills-container-content-top-start_container'>
                <div className="hard-skills-container-content-top-start_container_item">
                  <DiReact />
                  <h2>ReactJS</h2>
                </div>
                <div className="hard-skills-container-content-top-start_container_item">
                    <AiOutlineHtml5/>
                  <h2>HTML5</h2>
                </div>
                <div className="hard-skills-container-content-top-start_container_item">
                    <DiCss3Full/>
                  <h2>CSS3</h2>
                </div>
                <div className="hard-skills-container-content-top-start_container_item">
                    <SiJquery/>
                  <h2>Jquery</h2>
                </div>
            </div>
        </div>
    )
}   

export default HardSkillsCont;