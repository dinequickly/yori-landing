import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { Stats } from './components/Stats';
import { Technology } from './components/Technology';
import { Locations } from './components/Locations';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Stats />
        <Technology />
        <Locations />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
