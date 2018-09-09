import React, { Component } from 'react';

class TitleHeading extends Component {
  render() {
    return (
      
      <p className="h1 text-center pt-5 pb-3 mb-4 border-bottom">{this.props.heading}</p>

    );
  }
}

export default TitleHeading;
