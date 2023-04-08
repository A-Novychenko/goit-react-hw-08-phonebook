import { Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink as RouterNavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';
// import css from './Navigation.module.css';
import { ContactPhone } from '@mui/icons-material';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <Box component={'nav'}>
      <Toolbar sx={{}}>
        <Button component={RouterNavLink} variant="outline">
          <ContactPhone sx={{ mr: 2 }} />
          <Typography variant="h6" component="p" sx={{ textTransform: 'none' }}>
            Phonebook
          </Typography>
        </Button>

        {true && (
          <Button component={RouterNavLink} to="/contacts" variant="outline">
            <Typography
              variant="h6"
              component="p"
              sx={{ textTransform: 'none' }}
            >
              Contacts
            </Typography>
          </Button>

          //   {isLoggedIn && (
          //     <Button component={RouterNavLink} to="/contacts">
          //       Contacts
          //     </Button>
        )}
      </Toolbar>
    </Box>
  );
};
