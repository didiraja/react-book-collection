import React, { Component } from 'react';

import MainForm from './components/MainForm';
import MenuRouter from './components/MenuRouter';

import 'bootstrap/dist/css/bootstrap.min.css';

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
      
      <div className="container-fluid">

        <div className="row">

          <div className="col-md-2 col-router bg-dark border-right border-secondary">
            <MenuRouter />    
          </div>

          <div className="col-md-10 pl-md-0">

            <MainForm title="Register Author" content={this.state.books} /> 

          </div>

        </div>

      </div>

    );
  }
}

export default App;
