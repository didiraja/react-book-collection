import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

import { addBook } from "../redux";

import ListTable from './ListTable';

class RegisterAuthor extends Component {

  constructor(props) {
    super(props)

    this.dispatch = this.props.dispatch
  }

  newEntry(e) {

    e.preventDefault()

    this.dispatch(addBook({
      name: this.refs.registerTitle.value,
      author: this.refs.registerAuthor.value
    }))

  }
  
  render() {

    return (
      
      <Fragment>
        <form id="formCadastro" onSubmit={(e) => this.newEntry(e)}>

          <div className="form-group">
            <label htmlFor="registerAuthor-title">Title:</label>
            <input type="text" className="form-control" ref="registerTitle"
              placeholder="Dan Brown" />
          </div>
          
          <div className="form-group">
            <label htmlFor="registerAuthor-author">Author:</label>
            <input type="text" className="form-control" ref="registerAuthor"
              placeholder="DaVinci Code" />
          </div>

          <button type="submit" className="btn btn-lg d-block mx-auto btn-primary">Submit</button>

        </form>

        <ListTable title={this.props.title} />

      </Fragment>

    );
  }
}

export default connect()(RegisterAuthor)
