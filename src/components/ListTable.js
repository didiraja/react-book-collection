import React, { Component } from 'react';

class ListTable extends Component {
  render() {
    return (
      
      <table className="table table-bordered mt-4">
        <thead className="thead-light">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DaVinci Code</td>
            <td>Dan Brown</td>
          </tr>
          <tr>
            <td>Sapiens</td>
            <td>Yuval Harari</td>
          </tr>
          <tr>
            <td>Ready Player One</td>
            <td>Ernest Cline</td>
          </tr>
        </tbody>
      </table>

    );
  }
}

export default ListTable;
