import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home'
import MainForm from './components/MainForm';
import MenuRouter from './components/MenuRouter';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      books: [
        {
          name: "DaVinci Code",
          author: "Dan Brown",
        },
        {
          name: "Yuval Harari",
          author: "Sapiens",
        },
        {
          name: "Ernest Cline",
          author: "Ready Player One",
        },
      ] 
    }

  }

  render() {

    return (
      <Fragment>
        <Router>
        
        <div className="container-fluid">

          <div className="row">

            <div className="col-md-2 col-router bg-dark">
              <MenuRouter />    
            </div>

            <div className="col-md-10 pl-md-0">

              <Route path="/" exact component={
                () => <Home />
              } />
              <Route path="/author/" component={
                () => <MainForm title="Register Author" content={this.state.books} />
              } />
              <Route path="/title/" component={
                () => <MainForm title="Register Title" content={this.state.books} />
              } />

            </div>

          </div>

        </div>
        </Router> 
      </Fragment>

    );
  }
}

export default App;