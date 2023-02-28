import './funcy-skills.styles.scss';
import { SiMaterialui } from 'react-icons/si';
import { SiAntdesign } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiSemanticuireact } from 'react-icons/si';
import { SiChakraui } from 'react-icons/si';
import { SiScrollreveal } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';


function FuncySkills() {
    return(
        <div className='import-class-context-top-funcy-skills-thrd'>
            <h1 className='import-class-context-top-funcy-skills-thrd_h1'>Funny Skills</h1>
            <div className='import-class-context-top-funcy-skills-thrd-container'>
                <div className='import-class-context-top-funcy-skills-thrd-container_item'>
                    <SiMaterialui/>
                    <h2>Material UI</h2>
                </div>
                <div className='import-class-context-top-funcy-skills-thrd-container_item'>
                    <SiAntdesign/>
                    <h2>Ant Design</h2>
                </div>
                <div className='import-class-context-top-funcy-skills-thrd-container_item'>
                    <SiTailwindcss/>
                    <h2>TailwindCSS</h2>
                </div>
                <div className='import-class-context-top-funcy-skills-thrd-container_item'>
                    <SiSemanticuireact/>
                    <h2>Semantic UI</h2>
                </div>
                <div className='import-class-context-top-funcy-skills-thrd-container_item'>
                    <SiBootstrap/>
                    <h2>Bootstrap</h2>
                </div>
                <div className='import-class-context-top-funcy-skills-thrd-container_item'>
                    <SiChakraui/>
                    <h2>Chakra UI</h2>
                </div>
                <div className='import-class-context-top-funcy-skills-thrd-container_item'>
                    <SiScrollreveal/>
                    <h2>Reveal</h2>
                </div>
                <div className='import-class-context-top-funcy-skills-thrd-container_item'>
                    <SiRedux/>
                    <h2>Redux</h2>
                </div>
            </div>
        </div>
    )
}

export default FuncySkills;