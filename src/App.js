import './App.css';
import Header from './components/Header/Header';
import DealShock from './components/Main/DealShock/DealShock';
import HomeBanner from './components/Main/HomeBanner/HomeBanner';
import HotCategory from './components/Main/HotCategory/HotCategory';
import MiddleBanner from './components/Main/MiddleBanner/MiddleBanner';
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
    </div>
  );
}

export default App;
