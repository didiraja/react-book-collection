import React, { Component } from 'react';
import ListTable from './ListTable';

class RegisterAuthor extends Component {

  constructor(props) {
    super();

    this.state = {
      books: [
        {
          title: "DaVinci Code",
          author: "Dan Brown",
          price: ""
        },
        {
          title: "Sapiens",
          author: "Yuval Harari",
          price: ""
        },
        {
          title: "Ready Player One",
          author: "Ernest Cline",
          price: ""
        }
      ]
    }
    
  }

  componentWillMount() {

    this.stateBooks = '';

    this.stateBooks = this.state.books;
    
  }

  newEntry(e) {

    e.preventDefault();

    this.stateBooks.push({
      title: this.refs.registerTitle.value,
      author: this.refs.registerAuthor.value
    })

    this.setState({
      books: this.stateBooks
    });
    
  }
  
  render() {

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

        <ListTable books={this.stateBooks} />

      </React.Fragment>

    );
  }
}

export default RegisterAuthor;
