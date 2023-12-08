import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function CoFaculty() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    modalFirstName: "",
    modalLastName: "",
    modalEmail: "",
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
    closeModal();
  };

  return (
    <>
      <div>
        <Sidebar />
        <div id="wrapper">
          <Navbar />
          <div className="p-4">
            <section className="charts mt-4">
              <button onClick={openModal} className="button">
                Open Modal
              </button>

              {modalOpen && (
                <div className="modal">
                  <div className="modal-content">
                    <span className="close" onClick={closeModal}>
                      &times;
                    </span>
                    <form onSubmit={handleSubmit}>
                      <label htmlFor="modalFirstName">First Name:</label>
                      <input
                        type="text"
                        id="modalFirstName"
                        name="modalFirstName"
                        value={formData.modalFirstName}
                        onChange={handleInputChange}
                        required
                      />

                      <label htmlFor="modalLastName">Last Name:</label>
                      <input
                        type="text"
                        id="modalLastName"
                        name="modalLastName"
                        value={formData.modalLastName}
                        onChange={handleInputChange}
                        required
                      />

                      <label htmlFor="modalEmail">Email:</label>
                      <input
                        type="email"
                        id="modalEmail"
                        name="modalEmail"
                        value={formData.modalEmail}
                        onChange={handleInputChange}
                        required
                      />

                      <button type="submit">Submit</button>
                    </form>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoFaculty;
