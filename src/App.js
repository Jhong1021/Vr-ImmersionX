import './App.css';
import SaleBanner from './components/Banner';
import BuyNow from './components/BuyNow';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Product from './components/Product';
import SubscribeSection from './components/SubscribeSection';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <SaleBanner />
      <BuyNow />
      <Product />
      <SubscribeSection />
    </div>
  );
}

export default App;
