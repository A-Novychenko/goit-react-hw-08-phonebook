import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Typography, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

import { deleteContact } from 'redux/contacts/contactsOperations';

export const Contact = ({ name, phone, id }) => {
  const [isBtnActive, setIsBtnActive] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setIsBtnActive(true);
  };

  return (
    <>
      <Box
        component={'div'}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 1,
          mx: 'auto',
          border: '1px solid grey',
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '33%',
            ml: 2,
          }}
        >
          <ContactPhoneIcon sx={{ mr: 2 }} />
          <Typography>{name}</Typography>
        </Box>

        <Box
          sx={{
            textAlign: 'center',
            width: 200,
            height: '100%',
            py: 1.2,
            borderRight: '1px solid grey',
            borderLeft: '1px solid grey',
          }}
        >
          <Typography sx={{ textAlign: 'center' }}>{phone}</Typography>
        </Box>

        <IconButton
          edge="end"
          aria-label="delete"
          type="button"
          onClick={handleDelete}
          disabled={isBtnActive}
          sx={{ mr: 2 }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
