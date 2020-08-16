import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function EditTask({ edit, oldText, id}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editText, setEditText] = useState(oldText);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setEditText(oldText);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!editText.trim()) {
      return;
    }
    edit(id, editText);
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>
        Edit
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            type="text"
          />
          <button>Confirm</button>
        </form>
      </Modal>
    </div>
  );
}

export default EditTask;
