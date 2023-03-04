import './skills-showcase.styles.scss';
import { FiPlayCircle } from 'react-icons/fi';



function SkillsShowcase() {
    return(
        <main className="top-skills-showcase-external-integration">
            <h1 className='top-skills-showcase-external-integration_first-content'>ALL SKILLS</h1>
            <div className='top-skills-showcase-external-integration-container'>
                <li>
                    <p><i className="fa-solid fa-circle-notch"></i>1+ year experience in <span>Frontend Development</span> and Technologies Monitoring website performance and rectifying front-end-related issues.</p>
                </li>
                <li>
                    <p><i className="fa-solid fa-circle-notch"></i>Strategize design choices according to user experience and develop reusable and modular elements.</p>
                </li>
                <li>
                    <p> <i className="fa-solid fa-circle-notch"></i>Have an in-depth knowledge of <span>JavaScript</span>, <span>HTML</span>, <span>CSS</span> and <span>CSS processors ( SASS/LESS )</span>. </p>
                </li>
                <li>
                    <p><i className="fa-solid fa-circle-notch"></i>Deep knowledge with Javascript libraries like <span>ReactJS</span>.</p>
                </li>
                <li>
                    <p><i className="fa-solid fa-circle-notch"></i>Demonstrated experience using ReactJS tools like <span>Redux</span>, <span>Router</span>, <span>Hooks</span> and <span>GraphQL</span>.</p>
                </li>
                <li>
                    <p><i className="fa-solid fa-circle-notch"></i>Strong skills with <span>JavaScript</span> and <span>jQuery</span>, knowledge of code versioning using <span>Git</span> Control System.</p>
                </li>
                <li>
                    <p><i className="fa-solid fa-circle-notch"></i>Strong skills and knowledge <span>ReactJS</span> component library such as <span>MaterialUI</span>,  <span>NextUI</span>, <span>Prime React</span>, <span>React Reveal</span>,  <span>Ant Design</span>,  <span>Grommet</span>, <span>React Icons</span>  and etc.</p>
                </li>
            </div>

        </main>
    )
}

export default SkillsShowcase;
