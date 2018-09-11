import React, { Component } from 'react';

class ListTable extends Component {
  render() {
    
    const stateBooks = this.props.books;

    return (
      
      <table className="table table-bordered mt-4">
        <thead className="thead-light">
          <tr>
            <th scope="col">Author</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>

        {stateBooks.map(
          (stateContent, key) => <tr key={key}>
            <td>{stateContent.author}</td>
            <td>{stateContent.title}</td>
          </tr>)}

        </tbody>
      </table>

    );
  }
}

export default ListTable;
