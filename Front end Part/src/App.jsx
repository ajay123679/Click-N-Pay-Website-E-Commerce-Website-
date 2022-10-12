import Product from "./pages/Product";
import Home from "./pages/Home";
import Electronics from "./pages/electronics";
import Essential from "./pages/essential";
import Fitness from "./pages/Fitness"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/products/:electronics">
          <Electronics />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/products/essential">
          <Essential />
        </Route>
        <Route path="/products/fitness">
          <Fitness />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login"><Login /></Route>
        </Switch>
    </Router>
  );
};

export default App;