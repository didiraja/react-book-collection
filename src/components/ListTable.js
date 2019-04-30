import React, { Component } from 'react';

class ListTable extends Component {

  constructor(props) {
    super();
  }

  render() {
    
    const books = this.props.books;

    return (
      
      <table className="table table-bordered mt-4">
        <thead className="thead-light">
          <tr>
            <th scope="col">Author</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>

        {books.map(
          (book, key) => <tr key={key}>
            <td>{book.author}</td>
            <td>{book.name}</td>
          </tr>)}

        </tbody>
      </table>

    );
  }
}

export default ListTable;
