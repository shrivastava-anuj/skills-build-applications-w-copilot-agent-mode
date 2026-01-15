import React from 'react';

const Modal = ({ title, children, show, onClose }) => {
  if (!show) return null;
  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
