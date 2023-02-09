import Hero from './components/pages/Hero';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Works from './components/pages/Works';
import Certifications from './components/pages/Certifications';



function Home() {
    return (
      <>
        <Hero/>
        <Works/>
        <Projects/> 
        <Certifications/>
        <Contact/> 
        
      </>
    );
  }
  
  export default Home;