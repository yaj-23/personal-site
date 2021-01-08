import Hero from './components/pages/Hero';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience';


function Home() {
    return (
      <>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
      </>
    );
  }
  
  export default Home;