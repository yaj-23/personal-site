import Hero from './components/pages/Hero';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Works from './components/pages/Works';



function Home() {
    return (
      <>
        <Hero/>
        <Projects/> 
        <Works/>
        <Contact/>
        
      </>
    );
  }
  
  export default Home;