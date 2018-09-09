import React, { Component } from 'react';

import TitleHeading from './components/TitleHeading';
import MenuRouter from './components/MenuRouter';
import RegisterAuthor from './components/RegisterAuthor';
import ListTable from './components/ListTable';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      titles: ["DaVinci Code","Sapiens","Ready Player One"],
      authors: ["Dan Brown", "Yuval Harari", "Ernest Cline"]
    }

  }

  render() {

    return (
      
      <div className="container-fluid">

        <div className="row">

          <div className="col-md-2 col-router border-right border-secondary">
            <MenuRouter />    
          </div>

          <div className="col-md-10">

            <TitleHeading heading="Register Author" /> 

            <div className="row">
              <div className="col-md-6 mx-auto">

                <RegisterAuthor /> 

                <ListTable listTitle={this.state.titles} listAuthor={this.state.authors} />

              </div>
            </div>

          </div>

        </div>

      </div>

    );
  }
}

export default App;
