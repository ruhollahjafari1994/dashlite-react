import React, { Suspense } from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import IndexOne from "./pages/IndexOne"
import IndexTwo from "./pages/IndexTwo"
import IndexThree from "./pages/IndexThree"
import IndexFour from "./pages/IndexFour"
import Error404Classic from "./pages/error/404-classic"
import Error404Modern from "./pages/error/404-modern"
import Error504Classic from "./pages/error/504-classic"
import Error504Modern from "./pages/error/504-modern"
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword"
import Success from "./pages/auth/Success";

function App() {
  return (
    <Suspense fallback={<div/>}>
      <Router basename="/">
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/pages/auths/auth-login`} component={Login} exact/>
          <Route path={`${process.env.PUBLIC_URL}/pages/auths/auth-register`} component={Register} exact/>
          <Route path={`${process.env.PUBLIC_URL}/pages/auths/auth-forgotpassword`} component={ForgotPassword} exact/>
          <Route path={`${process.env.PUBLIC_URL}/pages/auths/auth-success`} component={Success} exact/>
          <Route path={`${process.env.PUBLIC_URL}/pages/error/404-classic`} component={Error404Classic} exact />
          <Route path={`${process.env.PUBLIC_URL}/pages/error/404-modern`} component={Error404Modern} exact />
          <Route path={`${process.env.PUBLIC_URL}/pages/error/504-classic`} component={Error504Classic} exact />
          <Route path={`${process.env.PUBLIC_URL}/pages/error/504-modern`} component={Error504Modern} exact />
          <Route path={`${process.env.PUBLIC_URL}/indextwo`} component={IndexTwo} exact />
          <Route path={`${process.env.PUBLIC_URL}/indexthree`} component={IndexThree} exact />
          <Route path={`${process.env.PUBLIC_URL}/indexfour`} component={IndexFour} exact />
          <Route path={`${process.env.PUBLIC_URL}/`} component={IndexOne} exact />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
