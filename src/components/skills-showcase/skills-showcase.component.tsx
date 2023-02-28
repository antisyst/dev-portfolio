import './skills-showcase.styles.scss';
import { FiPlayCircle } from 'react-icons/fi';
import { Fade, Zoom, Slide } from "react-awesome-reveal";



function SkillsShowcase() {
    return(
        <main className="top-skills-showcase-external-integration">
        <Fade delay={1e3} cascade damping={1e-1}>
            <h1 className='top-skills-showcase-external-integration_first-content'>ALL SKILLS</h1>
            <div className='top-skills-showcase-external-integration-container'>
                <li>
                    <p><i className="fa-solid fa-circle-notch"></i>3+ year experience in <span>Frontend Development</span> and Technologies Monitoring website performance and rectifying front-end-related issues.</p>
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
                    <p><i className="fa-solid fa-circle-notch"></i>Strong skills with <span>CSS</span> frameworks such as <span>Bootstrap</span>, <span>TailwindCSS</span>, <span>UIkit</span>, <span>pureCSS</span>, <span>Skeleton</span> and <span>daisyUI</span>.</p>
                </li>
                <li>
                    <p><i className="fa-solid fa-circle-notch"></i>Strong skills with <span>JavaScript</span>, <span>AJAX</span> and <span>jQuery</span>, knowledge of code versioning using <span>Git</span> Control System.</p>
                </li>
                <li>
                    <p><i className="fa-solid fa-circle-notch"></i>Proficient understanding of cross-browser compatibility issues and ways to work around them.</p>
                </li>
                <li>
                    <p><i className="fa-solid fa-circle-notch"></i>Demonstrate an understanding of the needs of growing businesses, including emerging digital and web development trends.</p>
                </li>
                <li>
                    <p><i className="fa-solid fa-circle-notch"></i>Strong skills and knowledge <span>ReactJS</span> component library such as <span>MaterialUI</span>,  <span>NextUI</span>, <span>Prime React</span>, <span>Motion Framer</span>, <span>React Reveal</span>, <span>Blueprint UI</span>,  <span>Ant Design</span>, <span>Onsen UI</span>, <span>Grommet</span>,<span>Core UI</span>, <span>Semantic UI</span>, <span>React Icons</span> <span>React Bootstrap</span>, <span>ChakraUI</span> and etc.</p>
                </li>
                <li>
                    <p><i className="fa-solid fa-circle-notch"></i>Contributing in building and maintaining internal as well as customer facing frontend applications.</p>
                </li>
                <li>
                    <p><i className="fa-solid fa-circle-notch"></i>Testing to identify bugs and technical issues before and after deploying.</p>
                </li>
                <li>
                    <p><i className="fa-solid fa-circle-notch"></i>Promote best practices in <span>UI/UX</span> and components build scalable websites utilizing open-source tools.</p>
                </li>
                <li>
                    <p><i className="fa-solid fa-circle-notch"></i>Proficiency with <span>PWA</span> ( Progressive Web Application ) .</p>
                </li>
            </div>
        </Fade>

        </main>
    )
}

export default SkillsShowcase;