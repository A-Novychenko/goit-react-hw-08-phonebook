import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';

import { selectFilter } from 'redux/contacts/contactsSelectors';
import { setFilterValue } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <>
      <TextField
        label="Search contact"
        variant="filled"
        sx={{
          display: 'flex',
          width: 0.5,
          mt: 5,
          mb: 2,
          mx: 'auto',
          boxShadow: 1,
          color: '#1976d2',
          bgcolor: 'rgba(25, 118, 210, 0.1)',
        }}
        autoComplete="off"
        type="text"
        name="filter"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={filter}
        onChange={handleChange}
        placeholder="search"
      />
    </>
  );
};
