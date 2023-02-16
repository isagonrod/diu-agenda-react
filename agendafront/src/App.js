import React, { Component } from "react";
import {Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// import AddPerson from "./components/add-person.component";
// import Person from "./components/person.component";
// import PersonList from "./components/person-list.component";

class App extends Component {
  render() {
      return (
          <div>
              <nav className="navbar navbar-expand navbar-dark bg-dark">
                  <Link to={"/home"} className="navbar-brand">
                      AGENDA
                  </Link>
                  <div className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <Link to={"/add"} className="nav-link">
                              NEW CONTACT
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to={"/edit"} className="nav-link">
                              EDIT CONTACT
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to={"/delete"} className="nav-link">
                              DELETE CONTACT
                          </Link>
                      </li>
                  </div>
              </nav>

              {/*<div className="container mt-3">*/}
              {/*    <Switch>*/}
              {/*        /!*<Route exact path={["/", "/home"} component={PersonList}/>*!/*/}
              {/*        /!*<Route exact path="/add" component={AddPerson}/>*!/*/}
              {/*        /!*<Route exact path="/edit/:id" component={Person}/>*!/*/}
              {/*        /!*<Route exact path="/delete/:id" component={Person}/>*!/*/}
              {/*    </Switch>*/}
              {/*</div>*/}

          </div>
      );
  }
}

export default App;
