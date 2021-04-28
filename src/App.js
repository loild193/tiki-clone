import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BottomBanner from './components/Main/BottomBanner/BottomBanner';
import DealShock from './components/Main/DealShock/DealShock';
import Email from './components/Main/Email/Email';
import HomeBanner from './components/Main/HomeBanner/HomeBanner';
import HotCategory from './components/Main/HotCategory/HotCategory';
import HotSearch from './components/Main/HotSearch/HotSearch';
import MiddleBanner from './components/Main/MiddleBanner/MiddleBanner';
import ProductHint from './components/Main/ProductHint/ProductHint';
import QuickTabLink from './components/Main/QuickTabLink/QuickTabLink';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeBanner />
      <DealShock />
      <QuickTabLink />
      <MiddleBanner />
      <HotCategory />
      <HotSearch />
      <BottomBanner />
      <ProductHint />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
