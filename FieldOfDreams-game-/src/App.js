import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./style.css"
import Login from "./login"
import Game from "./game"
import PrivateRoute from "./assets/privateRoute"
import { AuthProvider } from "./assets/auth"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import Admin from "./assets/CRUD/admin"
import base from "./assets/config"

function App({ auth }) {
  const [login, setLogin] = useState(false)

  const clickHandler = async (e) => {
    e.preventDefault()
    setLogin(false)
    try {
      await base.auth().signOut()
    } catch (err) {
      alert(err.message)
    }
  }
  return (
    <section>
      <AuthProvider>
        <Router key="router">
          <Route exact path="/" component={Game} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <div className="ButtonBx">
            {login && !auth ? (
              <Link to="/">
                <button onClick={() => setLogin(false)}>Back</button>
              </Link>
            ) : login && auth ? (
              <Link to="/">
                <button onClick={clickHandler}>Exit</button>
              </Link>
            ) : (
              <Link to="/login">
                <button onClick={() => setLogin(true)}>Go to admin</button>
              </Link>
            )}
          </div>
        </Router>
      </AuthProvider>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.reducer_1.admin.auth,
  }
}

export default connect(mapStateToProps)(App)
