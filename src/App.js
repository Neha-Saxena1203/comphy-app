import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import SingleProductPage from "./pages/SingleProductPage";
import AboutPage from "./pages/AboutPage";
import AuthWrapper from "./pages/AuthWrapper";
import CheckoutPage from "./pages/CheckoutPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <SideBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/cart" exact>
            <CartPage />
          </Route>
          <Route path="/products" exact>
            <ProductsPage />
          </Route>
          <Route exact path="/products/:id" children={<SingleProductPage />} />
          <Route path="/checkout" exact>
            <CheckoutPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
