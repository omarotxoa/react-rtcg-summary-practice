import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeHandler() {
    setModalIsOpen(false);
  }
  return(
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      { modalIsOpen ? <Modal onCancel={closeHandler} onConfirm={closeHandler}/> : null }
      {/* 
        An alternate to tertiary operator is: 
        {ModalIsOpen && <Modal />} 
        If both conditions are true the second one is returned
      */}
      { modalIsOpen && <Backdrop onCancel={closeHandler} />}
    </div>
  );
}

export default Todo;