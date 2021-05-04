import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Cart from "./components/Cart/Cart";
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
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { CartProvider } from "./contexts/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />

          <Switch>
            <Route 
              path="/cart"
              component={Cart}
            />
            <Route 
              path="/product/:id"
              render={() => <ProductDetail />}
            />

            <Route 
              exact 
              path="/"
              render={() => (
                <React.Fragment>
                  <HomeBanner />
                  <DealShock />
                  <QuickTabLink />
                  <MiddleBanner />
                  <HotCategory />
                  <HotSearch />
                  <BottomBanner />
                  <ProductHint />
                </React.Fragment>
              )}
            />
          </Switch>

          <Email />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
