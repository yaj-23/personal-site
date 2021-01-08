import Hero from './components/pages/Hero';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience';
import Contact from './components/pages/Contact';


function Home() {
    return (
      <>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
      </>
    );
  }
  
  export default Home;