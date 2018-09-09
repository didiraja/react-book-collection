import React, { Component } from 'react';

class RegisterAuthor extends Component {
  
  render() {
    return (
      
      <React.Fragment>
        <form id="formCadastro">

          <div className="form-group">
            <label htmlFor="registerAuthor-title">Title:</label>
            <input type="email" className="form-control" id="registerAuthor-title" placeholder="eg: DaVinci Code"/>
          </div>
          
          <div className="form-group">
            <label htmlFor="registerAuthor-author">Author:</label>
            <input type="email" className="form-control" id="registerAuthor-author" placeholder="eg: Dan Brown"/>
          </div>

          <button type="submit" className="btn btn-lg d-block mx-auto btn-primary">Submit</button>

        </form>
      </React.Fragment>

    );
  }
}

export default RegisterAuthor;
