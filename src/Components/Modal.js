import React from 'react'

export default function Modal(props) {
  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog" style={{color: 'black'}}>
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">Customize Your Theme Color!</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          Select a Background-color: <input className="background-color-pallete" type="color" />
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
  )
}
