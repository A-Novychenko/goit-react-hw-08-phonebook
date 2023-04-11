import { useState } from 'react';

import { Button } from '@mui/material';
import { AddCard } from '@mui/icons-material';

import { Modal } from 'components/Modal';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

export default function Contacts() {
  const [showModal, setShowModal] = useState(false);

  const hendleShowModal = () => setShowModal(prevState => !prevState);

  return (
    <div>
      <Button onClick={hendleShowModal}>
        <AddCard />
      </Button>

      {showModal && (
        <Modal onToggleModal={hendleShowModal}>
          <ContactForm onToggleModal={hendleShowModal} />
        </Modal>
      )}

      <Filter />
      <ContactList />
    </div>
  );
}
