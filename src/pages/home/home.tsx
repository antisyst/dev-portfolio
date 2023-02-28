import Navigation from "../../components/navigation/navigation.component";
import './home.scss'
import Showcase from "../../components/showcase/showcase.component";
import AlgoritmContainer from "../../components/algoritm-container/algoritm.component";
import SoftSkills from "../../components/soft-skills/softski.component";
import HardSkillsCont from "../../components/hard-skills/hard-skills.component";
import FuncySkills from "../../components/funcy-skills/funcy-skills.component";
import Footer from "../../components/footer/footer.component";

function Home() {
    return(
        <div className="main">
            <Showcase/>
            <AlgoritmContainer/>
            <SoftSkills/>
            <HardSkillsCont/>
            <FuncySkills/>
            <Footer/>
            </div>
    )
}

export default Home;