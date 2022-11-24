function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  return(
    <div className="modal">
      <p>Are you sure?</p>
      {/* Alternate ways to handle click events. Either calling a function within this file or passing the function from another file using props */}
      <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
      <button className="btn" onClick={props.onConfirm}>Confirm</button>
    </div>
  );
}

export default Modal;