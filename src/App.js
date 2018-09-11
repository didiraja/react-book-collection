import React, { Component } from 'react';

import TitleHeading from './components/TitleHeading';
import MenuRouter from './components/MenuRouter';
import RegisterAuthor from './components/RegisterAuthor';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super();
  }

  render() {

    return (
      
      <div className="container-fluid">

        <div className="row">

          <div className="col-md-2 col-router border-right border-secondary">
            <MenuRouter />    
          </div>

          <div className="col-md-10 pl-md-0">

            <TitleHeading heading="Register Author" /> 

            <div className="row">
              <div className="col-md-6 mx-auto">

                <RegisterAuthor /> 

              </div>
            </div>

          </div>

        </div>

      </div>

    );
  }
}

export default App;
