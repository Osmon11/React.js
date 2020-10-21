import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Admin/admin-log/privateRoute";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Container, CssBaseline, IconButton } from "@material-ui/core";
import Page404 from "./404";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./Header/header.css";
import "./index.css";
const Header = lazy(() => import("./Header/header"));
const Body = lazy(() => import("./Body/body"));
const Footer = lazy(() => import("./Footer/footer"));
const ResHeader = lazy(() => import("./Responsive/res-header"));
const Carousel = lazy(() => import("./Carousel/carousel"));
const Basket = lazy(() => import("./Header/Basket"));
const Admin = lazy(() => import("./Admin/admin"));
const Login = lazy(() => import("./Admin/admin-log/admin-login"));
const AdminSingup = lazy(() => import("./Admin/admin-log/admin-singup"));

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
      <Suspense
        fallback={
          <div
            style={{
              minWidth: "100%",
              position: "absolute",
              zIndex: 10000,
            }}
          >
            <LinearProgress style={{ maxHeight: 2 }} color='secondary' />
          </div>
        }
      >
        <Router key='router'>
          <CssBaseline />
          <div className={this.state.isTouch}>
            <Switch>
              <PrivateRoute exact path='/admin-cs30' component={Admin} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute
                exact
                path='admin-cs30/singup-master'
                component={AdminSingup}
              />
              <Route exact path='/' component={Public} />
              <Route component={Page404} />
            </Switch>
          </div>
        </Router>
      </Suspense>
    );
  }
}

export default App;

const Public = () => {
  return (
    <Container>
      <a href='#' className='arrowUpward'>
        <IconButton color='secondary' aria-label='arrowUpward'>
          <ArrowUpwardIcon fontSize='inherit' />
        </IconButton>
      </a>
      <Basket />
      <Header />
      <ResHeader />
      <Carousel />
      <Body />
      <Footer />
    </Container>
  );
};
