import React, { Component } from 'react'

class ListTable extends Component {

  render() {
    
    const books = this.props.books
    const title = this.props.title
    const categories = ['Author', 'Title']

    if (title === "Register Title") categories.reverse()

    return (
      
      <table className="table table-bordered mt-4">
        <thead className="thead-light">
          <tr>
            {categories.map(
              (categorie, key) => <th scope="col" key={key}>{categorie}</th> 
            )}
          </tr>
        </thead>
        <tbody>
          {
            title === "Register Author" &&
              books.map(
              (book, key) => <tr key={key}>
                  <td>{book.author}</td>
                  <td>{book.name}</td>
              </tr>)
          }
          {
            title === "Register Title" &&
              books.map(
              (book, key) => <tr key={key}>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
              </tr>)
          }
        </tbody>
      </table>

    )
  }
}

export default ListTable
