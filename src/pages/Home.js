import { Button } from '@mui/material';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the phone book! </h1>
      <p style={{ marginTop: 40, fontSize: 24 }}>
        This is a beautifully designed phonebook app that saves contacts
        securely. Register to create your collection of phone numbers.
      </p>
      <br />
      <Button variant="contained" style={{ marginTop: '40px' }}>
        Get started
      </Button>
    </div>
  );
}
