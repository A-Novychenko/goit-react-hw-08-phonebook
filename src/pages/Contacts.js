import { useState } from 'react';

import { Button, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import { Modal } from 'components/Modal';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

export default function Contacts() {
  const [showModal, setShowModal] = useState(false);

  const hendleShowModal = () => setShowModal(prevState => !prevState);

  return (
    <div>
      <Button
        onClick={hendleShowModal}
        variant="contained"
        sx={{ display: 'flex', mx: 'auto', my: 4 }}
      >
        <PersonAddAltIcon fontSize="large" />
        <Typography ml={2}> add contact</Typography>
      </Button>
      <Filter />
      <ContactList />

      {showModal && (
        <Modal onToggleModal={hendleShowModal}>
          <ContactForm onToggleModal={hendleShowModal} />
        </Modal>
      )}
    </div>
  );
}
