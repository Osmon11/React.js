import React, { Component } from "react";
import Admin from "./Admin/admin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Admin/admin-log/privateRoute";
import Login from "./Admin/admin-log/admin-login";
import LinearProgress from "@material-ui/core/LinearProgress";
import Singup from "./Admin/admin-log/admin-singup";
import Public from "./Assets/public-page";
import { CssBaseline } from "@material-ui/core";
import Page404 from "./404";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "block",
      isTouch: "container",
    };
  }
  componentDidMount() {
    try {
      document.createEvent("TouchEvent");
      this.setState({ isTouch: "container mobile" });
    } catch (e) {
      this.setState({ isTouch: "container" });
    }
    setTimeout(() => {
      return this.setState({
        display: "none",
      });
    }, 3000);
  }
  render() {
    return (
      <>
        <div
          style={{
            minWidth: "100%",
            display: this.state.display,
            position: "absolute",
            zIndex: 10000,
          }}
        >
          <LinearProgress style={{ maxHeight: 2 }} color='secondary' />
        </div>
        <Router key='router'>
          <CssBaseline />
          <div className={this.state.isTouch}>
            <Switch>
              <PrivateRoute exact path='/admin-cs30' component={Admin} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute
                exact
                path='admin-cs30/singup-master'
                component={Singup}
              />
              <Route exact path='/' component={Public} />
              <Route component={Page404} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
