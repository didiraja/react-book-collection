import React, { Component } from 'react';

class ListTable extends Component {
  render() {
    
    const propsList = this.props.books;

    return (
      
      <table className="table table-bordered mt-4">
        <thead className="thead-light">
          <tr>
            <th scope="col">Author</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>

        {propsList.map(
          (books, key) => <tr key={key}>
            <td>{books.author}</td>
            <td>{books.title}</td>
          </tr>)}

        </tbody>
      </table>

    );
  }
}

export default ListTable;
