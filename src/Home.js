import Hero from './components/pages/Hero';
import Cards from './components/cards/Cards';

import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';



function Home() {
    return (
      <>
        <Hero/>
        <About/> 
        <Projects/>
        <Cards/>
        <Contact/> 
      </>
    );
  }
  
  export default Home;