import React, { Component, Fragment } from 'react';
import ListTable from './ListTable';

class RegisterAuthor extends Component {

  constructor(props) {
    super(props);

    this.books = this.props.content

  }

  newEntry(e) {

    e.preventDefault()

    this.books.push({
      name: this.refs.registerTitle.value,
      author: this.refs.registerAuthor.value
    })

  }
  
  render() {

    return (
      
      <Fragment>
        <form id="formCadastro" onSubmit={(e) => this.newEntry(e)}>

          <div className="form-group">
            <label htmlFor="registerAuthor-title">Title:</label>
            <input type="text" className="form-control" ref="registerTitle"
              placeholder={`eg: ${this.books[0].name}`} />
          </div>
          
          <div className="form-group">
            <label htmlFor="registerAuthor-author">Author:</label>
            <input type="text" className="form-control" ref="registerAuthor"
              placeholder={`eg: ${this.books[0].author}`} />
          </div>

          <button type="submit" className="btn btn-lg d-block mx-auto btn-primary">Submit</button>

        </form>

        <ListTable title={this.props.title} />

      </Fragment>

    );
  }
}

export default RegisterAuthor;
