import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import ModalForm from './ModelForm';

function Student() {
  return (
    <>
      <div>
        <Sidebar />
        <div id="wrapper">
          <Navbar />
          <div className="p-4">
            <section className="charts mt-4">
              <ModalForm />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student