import React, { Component, Fragment } from 'react';
import RegisterAuthor from './RegisterAuthor';

class MainForm extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <Fragment>
        <p className="h1 text-center pt-5 pb-3 mb-4 border-bottom">{this.props.title}</p>

        <div className="row">
          <div className="col-md-6 mx-auto">

            <RegisterAuthor content={this.props.content} /> 

          </div>
        </div>
      </Fragment>
    );
  }
}

export default MainForm;
