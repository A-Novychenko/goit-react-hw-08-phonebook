import { useState } from 'react';

import { Button, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

// import { Modal } from 'components/Modal';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { TransitionsModal } from 'components/Modal/Modal';

export default function Contacts() {
  // const [showModal, setShowModal] = useState(false);

  // const hendleShowModal = () => setShowModal(prevState => !prevState);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ display: 'flex', mx: 'auto', my: 4 }}
      >
        <PersonAddAltIcon fontSize="large" />
        <Typography ml={2}> add contact</Typography>
      </Button>
      <Filter />
      <ContactList />

      {open && (
        <TransitionsModal handleClose={handleClose} open={open}>
          <ContactForm onToggleModal={handleClose} />
        </TransitionsModal>
      )}
    </div>
  );
}
