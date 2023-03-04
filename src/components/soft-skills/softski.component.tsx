import './softski.styles.scss'
import AlgorithmIcon from '../../icons/algorithm-icon';
import ThunderIcon from '../../icons/thunder-icon';
import ProblemIcon from '../../icons/problem-icon';
import CrossDeviceIcon from '../../icons/devices-icon';
import { ALL } from 'dns';

function SoftSkills() {
 return(
    <div className="import-top-content-launcher-content-first">
          <h1 className="import-top-content-launcher-content-first_h1">Soft Skills</h1>
         <div className="import-tag-content-launcher-flex-container">
            <div className="import-tag-content-launcher-flex-container_item">
               <div className='import-tag-content-launcher-flex-container_item_content'>
                  <div>
                     <ThunderIcon/>
                  </div>
                  <div>
                     <h2>Adaptability</h2>
                  </div>
               </div>
               <div className='import-tag-content-launcher-flex-container_item_content_bottom'>
                  <p>Things can change quickly when you're building a website or an app; developers must be able to take in the changes and adjust their workload accordingly.</p>
               </div>
            </div>
            <div className="import-tag-content-launcher-flex-container_item">
               <div className='import-tag-content-launcher-flex-container_item_content'>
                  <div>
                     <ProblemIcon/>
                  </div>
                  <div>
                     <h2>Problem Solving</h2>
                  </div>
               </div>
               <div className='import-tag-content-launcher-flex-container_item_content_bottom'>
                  <p>Developers need advanced problem-solving skills to get around obstacles that arise in terms of code, functionality, and appearance. These skills are also useful when something breaks — an inevitability in the world of app and web development.</p>
               </div>
            </div>
         </div>
    </div>
 )
}

export default SoftSkills;
