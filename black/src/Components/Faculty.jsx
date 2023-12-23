import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function Faculty() {
  return (
    <>
      <div>
        <Sidebar />
        <div id="wrapper">
          <Navbar />
          <div className="p-4">
            <section className="charts mt-4">
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faculty