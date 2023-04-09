import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@mui/material';

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
      <Input
        sx={{ display: 'block', width: 0.5, mx: 'auto', boxShadow: 1, px: 2 }}
        type="text"
        name="filter"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={filter}
        onChange={handleChange}
        placeholder="Filter"
      />
    </>
  );
};
