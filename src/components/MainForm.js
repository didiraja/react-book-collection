import React, { Component, Fragment } from 'react';
import Title from './Title'
import RegisterAuthor from './RegisterAuthor';

class MainForm extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <Fragment>
        <Title title={this.props.title} />

        <div className="row">
          <div className="col-md-6 mx-auto">

            <RegisterAuthor title={this.props.title} content={this.props.content} /> 

          </div>
        </div>
      </Fragment>
    );
  }
}

export default MainForm;
