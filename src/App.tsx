import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Highlight } from './components/Highlight';
import { Differentials } from './components/Differentials';
import { Process } from './components/Process';
import { ServiceArea } from './components/ServiceArea';
import { Quote } from './components/Quote';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppFAB } from './components/WhatsAppFAB';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Highlight />
        <Differentials />
        <Process />
        <ServiceArea />
        <Quote />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}

export default App;
