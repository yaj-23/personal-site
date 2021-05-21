import Hero from './components/pages/Hero';
import Cards from './components/cards/Cards';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import CardsOne from './components/cardsone/CardsOne';



function Home() {
    return (
      <>
        <Hero/>
        <About/> 
        <Cards/>
        <CardsOne/>
        <Contact/>
        
      </>
    );
  }
  
  export default Home;