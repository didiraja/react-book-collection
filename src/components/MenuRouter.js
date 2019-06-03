import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom"

class MenuRouter extends Component {
  render() {
    return (
      <Fragment>
        <span className="list-title bg-primary">Book Collection</span>

        <ul className="list-menu">
          <li className="list-item">
            <Link to="/home/">Home</Link>
          </li>
          <li className="list-item">
            <Link to="/author/">Autores</Link>
          </li>
          <li className="list-item">
            <Link to="/title/">Livros</Link>
          </li>
        </ul>
      </Fragment>
    )
  }
}

export default MenuRouter
