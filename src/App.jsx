import About from './components/About/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import InstructionBar from './components/InstructionBar/InstructionBar';
import Services from './components/Services/Services';
import UsedTechologies from './components/UsedTechologies/UsedTechologies';
import './styles/global.scss';

function App() {
    return (
        <>
            <Header />
            <Hero />
            <InstructionBar />
            <About />
            <Services />
            <UsedTechologies />
        </>
    );
}

export default App;
