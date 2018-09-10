import React, { Component } from 'react';

class RegisterAuthor extends Component {

  componentWillMount() {

    this.stateBooks = '';

    this.stateBooks = this.props.books;
    
  }

  newEntry(e) {

    e.preventDefault();

    this.stateBooks.push({
      title: this.refs.registerTitle.value,
      author: this.refs.registerAuthor.value
    })

    console.log(this.stateBooks);
    
  }
  
  render() {

    console.log(this.stateBooks);

    return (
      
      <React.Fragment>
        <form id="formCadastro" onSubmit={this.newEntry.bind(this)}>

          <div className="form-group">
            <label htmlFor="registerAuthor-title">Title:</label>
            <input type="text" className="form-control" ref="registerTitle" placeholder="eg: DaVinci Code"/>
          </div>
          
          <div className="form-group">
            <label htmlFor="registerAuthor-author">Author:</label>
            <input type="text" className="form-control" ref="registerAuthor" placeholder="eg: Dan Brown"/>
          </div>

          <button type="submit" className="btn btn-lg d-block mx-auto btn-primary">Submit</button>

        </form>
      </React.Fragment>

    );
  }
}

export default RegisterAuthor;
