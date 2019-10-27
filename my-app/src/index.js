/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Index from "views/Index.jsx";
import Landing from "views/examples/Landing.jsx";
import Login from "views/examples/Login.jsx";
import Profile from "views/examples/Profile.jsx";
import Register from "views/examples/Register.jsx";
import MakeTierListMap from "views/MakeTierListMap";
import ShopsList from "views/ShopsList"
import TierListView from "views/TierListView"
import MakeTierListView from "views/MakeTierListView"
import { updateShorthandPropertyAssignment } from "typescript";

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
      React.createElement(component, finalProps)
  );
}

const PropsRoute = ({component, ...rest}) => {
  return (
      <Route {...rest} render={routeProps => {
          return renderMergedProps(component, routeProps, rest);
      }}/>
  );
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      shopsData: {},
      selectedShops: []
    }
    this.updateData = this.updateData.bind(this)
    this.updateShops = this.updateShops.bind(this)
  }

  updateData(data) {
    this.setState({
      shopsData: data
    })
  }

  updateShops(business) {
    this.setState((prevState) => ({
      selectedShops: [...prevState.selectedShops, business]
    }))
    console.log(this.state.selectedShops)
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={props => <Index {...props} />} />
          <Route
            path="/landing-page"
            exact
            render={props => <Landing {...props} />}
          />
          <Route path="/login-page" exact render={props => <Login {...props} />} />
          <Route
            path="/profile-page"
            exact
            render={props => <Profile {...props} />}
          />
          <Route
            path="/register-page"
            exact
            render={props => <Register {...props} />}
          />
        <Route
            path="/tier-list"
            component={TierListView}
          />
        <PropsRoute
            path="/make-tier-list"
            component={MakeTierListView}
            shops={this.state.selectedShops}
          />
          <PropsRoute
            path="/make"
            component={MakeTierListMap}
            updateData={this.updateData}
             />
          <PropsRoute 
            path="/shops"
            component={ShopsList}
            shopsData={this.state.shopsData}
            updateShops={this.updateShops}
            />
            
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
