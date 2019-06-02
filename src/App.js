import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import MainForm from "./components/MainForm";
import MenuRouter from "./components/MenuRouter";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-router bg-dark">
              <MenuRouter />
            </div>

            <div className="col-md-10 pl-md-0">
              <Route path="/home/" exact component={() => <Home />} />

              <Route
                path="/title/"
                component={() => <MainForm title="Register Title" />}
              />

              <Route
                path="/author/"
                component={() => <MainForm title="Register Author" />}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
