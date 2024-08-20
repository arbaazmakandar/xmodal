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

const ModalCreated = () => {
  const [openForm, setOpenForm] = useState(false);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let flag = true;
    const { username, email, phone, dob } = event.target.elements;
    console.log(username.value, email.value, phone.value, dob.value);
    const todaysDate = new Date().toISOString().split("T")[0];
    if (!phone.value.match(/^\d{10}$/)) {
      alert(`Invalid phone number. Please enter a 10-digit phone number.`);
      flag = false;
      phone.focus();
    }
    if (new Date(dob.value) > new Date(todaysDate)) {
      alert(`Invalid date of birth. Date of birth cannot be in future.`);
      flag = false;
      dob.focus();
    }

    if (flag) {
      document.getElementById("myForm").reset();
    }
  };
  return (
    <>
      <h1>User Details Modal</h1>
      <button type="button" class="btn btn-primary" onClick={openModal}>
        Open Form
      </button>
      <div className="modal">
        <div className="modal-content">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <form
              id="myForm"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontWeight: "bold",
                width: "40vw",
              }}
              onSubmit={handleSubmit}
            >
              <h3>Fill Details</h3>
              <label htmlFor="username">Username: </label>
              <input type="text" id="username" class="form-control" required />
              <br />
              <label htmlFor="email">Email Address: </label>
              <input type="email" id="email" class="form-control" required />
              <br />
              <label htmlFor="phone">Phone Number: </label>
              <input type="tel" id="phone" class="form-control" required />
              <br />
              <label htmlFor="dob">Date of Birth: </label>
              <input type="date" id="dob" class="form-control" required />
              <br />
              <button type="submit" className="btn btn-primary submit-button">
                Submit
              </button>
            </form>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default ModalCreated;
