import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { Contact } from 'components/Contact';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import {
  selectError,
  selectIsLoading,
  selectedVisibleContacts,
} from 'redux/contacts/contactsSelectors';
import { LoaderLocal } from 'components/Loader';

export const ContactList = () => {
  const visibleContacts = useSelector(selectedVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div style={{ height: '16px' }}>
        {isLoading && <LoaderLocal />}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>

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
