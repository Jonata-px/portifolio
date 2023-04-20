
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Freelancer from "./Freelancer"; 
import Tecnologies from "./Tecnologies";
import Projects from './Projects';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <div>
            <Header/>
            
            <Banner/>

            <About/>

            <Services/>

            <Freelancer/>

            <Tecnologies/>

            <Projects/>

            <Footer/>
        </div>
    )
}
