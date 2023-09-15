import React from "react"
import  {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import FicheLogement from "../pages/FicheLogement"
import ErrorPage from "../pages/ErrorPage"


function AppRouter () {
    return (
        <Router>
          <main>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/FicheLogement">FicheLogement</Link>
                </li>
                <li>
                  <Link to="/ErrorPage">ErrorPage</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/About" component={About} />
              <Route path="/FicheLogement" component={FicheLogement} />
              <Route path="/ErrorPage" component={ErrorPage} />
            </Switch>
          </main>
        </Router>
      ) 
}

export default AppRouter