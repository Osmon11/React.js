import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/Admin/admin-log/privateRoute";
import {
  Backdrop,
  CircularProgress,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";
import Page404 from "./404";
import "./Header/header.css";
import "./index.css";
const Public = lazy(() => import("./Pages/Public"));
const Admin = lazy(() => import("./Components/Admin/admin"));
const Login = lazy(() => import("./Components/Admin/admin-log/admin-login"));
const AdminSingup = lazy(() =>
  import("./Components/Admin/admin-log/admin-singup")
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
  render() {
    return (
      <Router key='router'>
        <CssBaseline />
        <div className={this.state.isTouch}>
          <Switch>
            <PrivateRoute exact path='/admin-cs30'>
              <Suspense fallback={<BackDropFallBack />}>
                <Admin />
              </Suspense>
            </PrivateRoute>
            <Route exact path='/login'>
              <Suspense fallback={<BackDropFallBack />}>
                <Login />
              </Suspense>
            </Route>
            <PrivateRoute exact path='admin-cs30/singup-master'>
              <Suspense fallback={<BackDropFallBack />}>
                <AdminSingup />
              </Suspense>
            </PrivateRoute>
            <Route exact path='/'>
              <Suspense fallback={<BackDropFallBack />}>
                <Public />
              </Suspense>
            </Route>
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

const useStyles = makeStyles(() => ({
  backdrop: {
    background: "#fff",
    zIndex: 2000,
  },
}));
const BackDropFallBack = () => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color='primary' />
    </Backdrop>
  );
};
