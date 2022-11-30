import React from 'react';
import AddClientsModal from '../components/AddClientsModal';
import Clients from '../components/Clients';
import Projects from '../components/Projects';

function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientsModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}

export default Home;
