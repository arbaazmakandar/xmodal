import React, { useState } from "react";
import "./Modal.css";

const ModalCreated = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

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
  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      toggleModal();
    }
  };
  return (
    <>
      <h1>User Details Modal</h1>
      <button type="button" class="btn btn-primary" onClick={toggleModal}>
        Open Form
      </button>
      {modal && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
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
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCreated;
