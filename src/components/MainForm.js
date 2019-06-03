import React, { Component } from "react";
import Title from "./Title";
import RegisterAuthor from "./RegisterAuthor";

class MainForm extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 mx-auto">
          <Title title={this.props.title} />

          <RegisterAuthor title={this.props.title} />
        </div>
      </div>
    );
  }
}

export default MainForm;
