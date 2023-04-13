import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { Contact } from 'components/Contact';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { LoaderLocal } from 'components/Loader';
import { useContacts } from 'hooks';

export const ContactList = () => {
  const { visibleContacts, isLoading } = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div style={{ height: '16px' }}>{isLoading && <LoaderLocal />}</div>

      <Box
        component={'ul'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {visibleContacts.map(({ name, id, number }) => (
          <Box
            component={'li'}
            key={id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Contact name={name} number={number} id={id}></Contact>
          </Box>
        ))}
      </Box>
    </>
  );
};
