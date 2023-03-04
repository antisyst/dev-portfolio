import { Link } from 'react-router-dom'
import ImportLogo from '../../icons/import-logo';
import { motion, useScroll, useSpring } from "framer-motion";
import './navigation.styles.scss';
import 'animate.css';
import Pdf from './ramazan-azimli-resume-1.pdf';

function Navigation(): JSX.Element {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    return(
       <div className='import-logo-navigation-fixed-element-top'>
      <div className="import-logo-navigation-fixed-element-top_nav">
      <div className='import-logo-navigation-fixed-element-top_nav_left_section animate__animated animate__fadeIn'>
       <Link to='/'>
       <ImportLogo/>
       </Link>
      </div>
      <div className='import-logo-navigation-fixed-element-top_nav_right_section'>
        <Link to='/skills'>Skills</Link>
      </div>
      </div>
      <motion.div className="progress-bar" style={{ scaleX }} />
       </div>
    )
}

export default Navigation;
