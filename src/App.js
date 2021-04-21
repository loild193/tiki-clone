import './App.css';
import Header from './components/Header/Header';
import DealShock from './components/Main/DealShock/DealShock';
import HomeBanner from './components/Main/HomeBanner/HomeBanner';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeBanner />
      <DealShock />
    </div>
  );
}

export default App;
