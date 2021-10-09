import Hero from './components/pages/Hero';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Works from './components/pages/Works';



function Home() {
    return (
      <>
        <Hero/>
        <Works/>
         <Projects/> 
        
        <Contact/> 
        
      </>
    );
  }
  
  export default Home;