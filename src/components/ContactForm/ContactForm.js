import * as Yup from 'yup';
import 'yup-phone-lite';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { useFormik } from 'formik';

import { Avatar, Button, TextField, Box, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const INITIAL_STATE = {
  name: '',
  phone: '+38',
};

const Schema = Yup.object({
  name: Yup.string().max(20, 'Max: 20 symbols').required(),
  phone: Yup.string()
    .phone('UK', 'Please enter a valid phone number in the format for UKRAINE')
    .required('A phone number is required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const formik = useFormik({
    initialValues: { ...INITIAL_STATE },
    validationSchema: Schema,
    onSubmit: (values, { resetForm }) => {
      const { name, phone } = values;

      if (contacts.length) {
        const isInConntacts =
          contacts.find(contact => contact.name === name) ||
          contacts.find(contact => contact.phone === phone);

        if (isInConntacts) {
          alert(`${name} is already in contacts.`);
          return;
        }
      }

      dispatch(addContact(values));
      resetForm();
    },
  });

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mx: 'auto',
          maxWidth: 400,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <PersonAddAltIcon />
        </Avatar>
        <Typography component="h2" variant="h5">
          Add contact
        </Typography>

        <form onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="userName"
            autoFocus
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            margin="normal"
            fullWidth
            id="phone"
            name="phone"
            label="Phone"
            type="tel"
            autoComplete="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add contact
          </Button>
        </form>
      </Box>
    </>
  );
};
