import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FeaturesSection from './components/FeaturesSection';
import Discount from './components/DiscountsAndActivities';
import Habitations from './components/Habitations';
import InfrastructureSection from './components/Infrastructure';
import Prices from './components/Prices';
import HeroBanner from './components/Herobanner';
import Banner from './components/Banner';
import ArticlesSection from './components/ArticlesSection';
import Layout from './components/Layout';

function App() {
  return (
      <Layout>
      <Hero />
      <About />
      <Services />
      <FeaturesSection />
      <Discount />
      <Habitations />
      <Testimonials />
      <InfrastructureSection />
      <HeroBanner />
      <Prices />
      <Banner />
      <ArticlesSection />
      <Gallery /> 
      <Footer /> 
      </Layout>    
  );
}

export default App;