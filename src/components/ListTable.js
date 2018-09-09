import React, { Component } from 'react';

class ListTable extends Component {
  render() {

    // console.log(this.props.listTitle);

    const propsList = [this.props.listTitle, this.props.listAuthor];

    console.log(propsList);

    return (
      
      <table className="table table-bordered mt-4">
        <thead className="thead-light">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
          </tr>
        </thead>
        <tbody>

          {/* <tr>
            <td>{propsList.titles}</td>
            <td>{propsList.authors}</td>
          </tr> */}

        </tbody>
      </table>

    );
  }
}

export default ListTable;
