import React, { Component } from "react";
import Admin from "./Admin/admin";
import { AuthProvider } from "./Admin/admin-log/auth";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./Admin/admin-log/privateRoute";
import Login from "./Admin/admin-log/admin-login";
import LinearProgress from "@material-ui/core/LinearProgress";
import Singup from "./Admin/admin-log/admin-singup";
import Public from "./Assets/public-page";
import { Container, CssBaseline } from "@material-ui/core";

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
      <AuthProvider>
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
            <PrivateRoute path='/admin-cs30' component={Public} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/singup-master' component={Singup} />
            {/* <Container> */}
            <Route exact path='/' component={Admin} />
            {/* </Container> */}
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
