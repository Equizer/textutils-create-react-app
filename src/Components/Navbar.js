// notice how the name of the file starts with a capital letter , so we are supposed to start the name of a file that has a component with a capital letter

import React from 'react';
import PropTypes from 'prop-types'; // this is imported for using Navbar.propTypes


export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href='/'>{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href='/'>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href='/'>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href='/'>Contact Us</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder={props.placeholder} aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>


            <button type="button" className="btn btn-success mx-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Custom
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog" style={{color: 'black'}}>
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Customize Your Theme Color!</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    Select a Color: <input className="color-pallete" type="color" />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary change-button" data-bs-dismiss="modal" onClick={props.customMode}>Change</button>
                  </div>
                </div>
              </div>
            </div>


            <div className={`form-check form-switch mx-4 toggle-mode-div text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle</label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}

//following will make sure that the values passed in the function is string, we can set it to be number, array or object as well,
//   *NOTICE* that the p of propTypes is small in Navbar.propTypes but it is capital in PropTypes.string
//  here we also later marked the title to be required so we made it compulsory to pass a value or else it would throw an error
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

// following will set a default value to a prop if we don't pass a value then the default will  be used 
Navbar.defaultProps = {
  placeholder: 'Search Here',
}

