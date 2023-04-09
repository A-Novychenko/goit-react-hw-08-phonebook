import { Button } from '@mui/material';
import { NavLink as RouterNavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the phone book! </h1>
      <p style={{ marginTop: 40, fontSize: 24 }}>
        This is a beautifully designed phonebook app that saves contacts
        securely. Register to create your collection of phone numbers.
      </p>
      <br />
      <Button
        component={RouterNavLink}
        variant="contained"
        style={{ marginTop: '40px' }}
        to="/login"
      >
        Get started
      </Button>
    </div>
  );
}
