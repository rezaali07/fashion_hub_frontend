import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import { loadUser } from "./actions/UserActions";
import "./App.css";
import About from "./component/about/About";
import AllOrder from "./component/Admin/AllOrder";
import AllProducts from "./component/Admin/AllProducts";
import AllReviews from "./component/Admin/AllReviews";
import AllUsers from "./component/Admin/AllUsers";
import CreateProduct from "./component/Admin/CreateProduct";
import Dashboard from "./component/Admin/Dashboard";
import EditProduct from "./component/Admin/EditProduct";
import UpdateOrder from "./component/Admin/UpdateOrder";
import UpdateUser from "./component/Admin/UpdateUser";
import LoginSign from "./component/Authentication/LoginSign";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v2/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    Store.dispatch(loadUser());

    getStripeApiKey();
  }, [stripeApiKey]);

  return (
    <Router>
      {isAuthenticated && <UserData user={user} />}
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )}
      <Switch>
        <Route exact path="/load" component={Loading} />
        <Route exact path="/login" component={LoginSign} />
        <Route exact path="/about" component={About} />
        
        <ProtectedRoute
          exact
          path="/me/update/profile"
          component={EditProfile}
        />
        <ProtectedRoute exact path="/orders" component={MyOrder} />
        <ProtectedRoute exact path="/order/:id" component={MyOrderDetails} />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/product"
          component={CreateProduct}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/products"
          component={AllProducts}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/edit/product/:id"
          component={EditProduct}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/orders"
          component={AllOrder}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/order/:id"
          component={UpdateOrder}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/users"
          component={AllUsers}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/user/:id"
          component={UpdateUser}
        />
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/reviews"
          component={AllReviews}
        />

        <Route
          component={
            window.location.pathname === "/process/payment" ? null : Notfound
          }
        />
      </Switch>
    </Router>
  );
}

export default App;
