import React, { Component } from 'react'

class Title extends Component {

  constructor(props) {
    super()
  }

  render() {

    this.props.title == '' ? "Texto Padrão" : this.props.title

    return (
      
      <p className="h1 text-center pt-5 pb-3 mb-4 border-bottom">{this.props.title}</p>

    )
  }
}

export default Title
